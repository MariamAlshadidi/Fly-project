import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import SuccessPayment from "./SuccessPayment";

const Paypal = (props) => {
  const { flight_id } = useParams();
  const [price, setPrice] = useState(0);
  const [errors, setErrors] = useState([]);
  const [show, setShow] = useState(false);
  const [transaction, setTrasaction] = useState("");
  const [loaded, setLoaded] = useState(false);
  var p = 0;

  useEffect(() => {
    console.log("iam useEffect");

    const instance = axios.create({
      baseURL: "http://localhost:8000/api/",
      timeout: 1000,
      //headers: { 'authorization': 'Bearer ' + localStorage.getItem('user') },
    });

    instance
      .get(`/flight/${flight_id}`)
      .then((res) => {
        console.log("price", res.data.flight.price);
        p = res.data.flight.price;
        setPrice(res.data.flight.price);
        setLoaded(true);
      })
      .catch((err) => {
        const data = err.response.data;
        const errorMessages = [];
        if ("errors" in data) {
          for (let field in data.errors) {
            const validationError = data.errors[field];
            errorMessages.push(validationError.message);
          }
        }
        setErrors(errorMessages);
      });

    window.paypal
      .Buttons({
        style: {
          color: "silver",
          shape: "pill",
        },
        // Sets up the transaction when a payment button is clicked
        createOrder: (data, actions) => {
          console.log("price", price);
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: p,
                },
              },
            ],
          });
        },
        // Finalize the transaction after payer approval
        onApprove: (data, actions) => {
          setShow(true);
          return actions.order.capture().then(function (orderData) {
            // Successful capture! For dev/demo purposes:
            // console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));
            setTrasaction(orderData.purchase_units[0].payments.captures[0]);
            //alert(`Transaction ${transaction.status}: ${transaction.id}\n\nSee console for all available details`);
          });
        },
      })
      .render("#paypal-btn-container");
  }, []);

  return (
    <>
      <h1 style={{ marginTop: "30px" }}>Checkout</h1>
      <div id="paypal-btn-container" style={{ width: "400px", margin: "auto" }}>
        <SuccessPayment
          show={show}
          setShow={setShow}
          transaction={transaction}
        />
      </div>
    </>
  );
};

export default Paypal;
