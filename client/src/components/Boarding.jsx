import { useParams } from "react-router-dom";
import React from "react";
import axios from 'axios';
import "./css/booking.css";


const Boarding = props => {
    // const {  ticket_id } = useParams();
	const [ticket, setTicket] = React.useState({});
	const [loaded, setLoaded] = React.useState(false);
	const [flight, setFlight] = React.useState({});
    const [user, setUser] = React.useState({})
    const [errors, setErrors] = React.useState([]);
    //const history = useHistory()

    // source: '',
    // destination: '',
    // departure: '',
    // arraival:'',
    // estimated_time:'',
    // seats:'',
    // type:''
    // })
      const instance = axios.create({
        baseURL: "http://localhost:8000/api/",
        timeout: 1000,
        //headers: { 'authorization': 'Bearer ' + localStorage.getItem('user') },
      });

	React.useEffect(() => {

		instance
			.get(`/ticket/${localStorage.getItem("ticket_id")}`)
			.then((res) => {
	
				console.log(res.data);
				setTicket(res.data.Ticket);
			})
			.catch((err) => {
				const data = err.response.data;
				const errorMessages = [];
				if ("errors" in data) {
					for (let field in data.errors) {
						const validationError = data.errors[field];
						errorMessages.push(validationError.message);
					}
				} else {
					// error msg when name is exist
					errorMessages.push(err.response.data.error);
				}
				setErrors(errorMessages);
			});
	

	

		// instance.get(`/users/${localStorage.getItem('user_email').slice(1, localStorage.getItem('user_email').length - 1)}`)
		//     .then(res => setUser(res.data.user))
		//     .catch(err => console.log(err))
	}, []);

	React.useEffect(() => {
    // ------------user------------
    console.log("User id", ticket.user);
    if (ticket.user) {
      instance
        .get(`/user/${ticket.user}`)
        .then((res) => {
        //   setLoaded(true);
          console.log("user", res.data);
          setUser(res.data.user);
        })
        .catch((err) => {
          const data = err.response.data;
          const errorMessages = [];
          if ("errors" in data) {
            for (let field in data.errors) {
              const validationError = data.errors[field];
              errorMessages.push(validationError.message);
            }
          } else {
            // error msg when name is exist
            errorMessages.push(err.response.data.error);
          }
          setErrors(errorMessages);
        });
    }
    // ------------flight------------
    if (ticket.flight) {
      instance
        .get(`/flight/${ticket.flight}`)
        .then((res) => {
          setLoaded(true);
          console.log("flight", res.data);
          setFlight(res.data.flight);
        })
        .catch((err) => {
          const data = err.response.data;
          const errorMessages = [];
          if ("errors" in data) {
            for (let field in data.errors) {
              const validationError = data.errors[field];
              errorMessages.push(validationError.message);
            }
          } else {
            // error msg when name is exist
            errorMessages.push(err.response.data.error);
          }
          setErrors(errorMessages);
        });
    }
  }, [ticket]);
	// React.useEffect(() => {}, []);
   

    return (
      <>
        {/* <div style={{ marginTop: "40px" }}>user want book flight with id : {flight_id}
            <h3> {flight.source} <span style={{ 'font-size': '40px' }}>&#8594;</span> {flight.destination}</h3>
            <div>airLine:{flight.airline}</div>
            <div>flight No. :{flight.flight_NO}</div>
            <div>price :{flight.price}</div>
            <div>airport :{flight.departure_airport}</div>
            <div>estimated_time:{flight.estimated_time}</div>
            {flight.arraival && <div>arraival date:{flight.arraival.slice(0, 10)},
                time: {flight.arraival.slice(11, flight.arraival.length - 5)}</div>}
            {flight.departure && <div>departure date: {flight.departure.slice(0, 10)},
                time: {flight.departure.slice(11, flight.departure.length - 5)}</div>}

            {/* checkbox or select or radios */}
        {/* <div>cabin_class:{flight.cabin_class}</div>
        </div> */}
        {loaded && (
          <div className="tecketBody mt-5 d-flex justify-content-center">
            <div className="ticket">
              <div id="barBig"></div>
              <div id="mainInfo">
                <div class="passenger-info-container">
                  <div class="passenger-info">
                    <span>Name of Passenger</span>
                    <span className="details mt-3">{user.username}</span>
                  </div>
                  <div class="passenger-info">
                    <span>Flight</span>
                    <span className="details mt-3">
                      {flight.flight_NO.slice(0, 5)}
                    </span>
                  </div>
                  <div class="passenger-info">
                    <span>Date</span>
                    <span className="details mt-3">
                      {flight.departure
                        .slice(0, 10)
                        .toLocaleString({ month: "long" })}
                    </span>
                  </div>
                  <div class="passenger-info">
                    <span>Seat</span>
                    <span className="details mt-3">{ticket.seat}</span>
                  </div>
                </div>
                <div class="destination">
                  <h1>{flight.source.toUpperCase()}</h1>
                  <span style={{ "font-size": "70px" }}> &#9992;</span>
                  <h1>{flight.destination.toUpperCase()}</h1>
                </div>
                <div class="flight-info-container">
                  <div class="flight-info">
                    <span>Gate</span>
                    <span>D 12</span>
                  </div>
                  <div class="flight-info">
                    <span>Boarding Time</span>
                    <span>
                      {flight.departure.slice(11, flight.departure.length - 8)}
                    </span>
                  </div>
                  <div class="flight-info">
                    <span>ETD</span>
                    <span>
                      {flight.departure.slice(11, flight.departure.length - 8)}
                    </span>
                  </div>
                  <div class="flight-info">
                    <span>ETA</span>
                    <span>
                      {flight.arraival.slice(11, flight.departure.length - 8)}
                    </span>
                  </div>
                </div>
                <p class="note">Gate closes 20 minutes before departure</p>
              </div>
              <div id="circles">
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
                <div class="circle"></div>
              </div>
              <div id="sideInfo">
                <div class="details-container">
                  <div class="flight-details">
                    <div>
                      <span>Name of Passenger</span>
                      <span>{user.username}</span>
                    </div>
                    <div>
                      <span>Flight</span>
                      <span>{flight.flight_NO.slice(0, 5)}</span>
                    </div>
                    <div>
                      <span>Date</span>
                      <span>
                        {flight.departure
                          .slice(0, 10)
                          .toLocaleString({ month: "long" })}
                      </span>
                    </div>
                    <div>
                      <span>Seat</span>
                      <span>{ticket.seat}</span>
                    </div>
                  </div>
                  <div class="destination-details">
                    {flight.source.toUpperCase()}
                    <span style={{ "font-size": "40px" }}>&#8594;</span>
                    {flight.destination.toUpperCase()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
};

export default Boarding;