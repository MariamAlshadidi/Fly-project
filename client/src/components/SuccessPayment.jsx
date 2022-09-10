
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { useHistory } from 'react-router-dom';
import SuccessImg from "./imgs/payment-success.png"

const SuccessPayment = ({show , setShow, transaction  }) => {
  
    const history = useHistory();
    
    const handleClose = () =>{
        setShow(false);
        history.push("/boarding")
    } 
    

    return (
        <div>
            <Modal show={show} onHide={handleClose} style={{textAlign:"center"}}>
                <Modal.Header >
                <Modal.Title>Success Payment</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <img src={SuccessImg} alt="" />
                <p> {transaction.status}: {transaction.id}</p>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="warning" onClick={handleClose}>ok ! </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default SuccessPayment;