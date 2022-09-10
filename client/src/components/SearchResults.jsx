import React from 'react'
import { useParams, useHistory, NavLink } from 'react-router-dom'
import axios from 'axios'
import Search from './Search'
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import './css/flightsCards.css'



const SearchResults = () => {
    const { from, to, date } = useParams()
    const [flights, setFlights] = React.useState([])
    const [errors, setErrors] = React.useState([]);
    const history = useHistory()

    const [loaded, setLoaded] = React.useState(false);

    React.useEffect(() => {
        axios.get(`http://localhost:8000/api/flight/search`, { params: { source: from, destination: to, departure: date } })
            .then(res => {
                //setIsCreated(true)
                console.log(res.data)
                setFlights(res.data.flights)
                setLoaded(true)

            })
            .catch(err => {
                const data = err.response.data;
                const errorMessages = [];
                if ("errors" in data) {
                    for (let field in data.errors) {
                        const validationError = data.errors[field];
                        errorMessages.push(validationError.message);
                    }
                }
                else {
                    // error msg when name is exist
                    errorMessages.push(err.response.data.error);
                }
                setErrors(errorMessages);
            })
    }, [from])
    return (
        <div>
            <Search />
            {/* {flights && flights.map(f =>
                <div key={f._id} className="mt-3">
                    from: {f.source}, to: {f.destination}, date: {f.departure.slice(0, 10)}, time: {f.departure.slice(11, f.departure.length - 5)}
                    <Button onClick={e => history.push(`/book/${f._id}`)} variant="warning">Book </Button>
                </div>
            )}
            {!flights.length &&<h5 className='my-5'>No flights available</h5>} */}
            <div style={{ marginTop: "30px" }} className="container">

                {loaded ? flights.map((flight) =>
                    <>
                        <div className="container d-flex justify-content-between col-9">
                            <NavLink className={isActive =>
                                isActive ? 'nav-link active' : 'nav-link'
                            } to={`/book/${flight._id}`}>
                                <div className="card m-4">
                                    <div className="card-header d-flex justify-content-between colorBG">
                                        <h4>{flight.airline}</h4>
                                        <h5>{flight.departure.slice(0, 10).toLocaleString({ month: 'long' })}</h5>
                                        <h5>{flight.departure.slice(11, flight.departure.length - 8)} - {flight.arraival.slice(11, flight.arraival.length - 8)}</h5>
                                    </div>
                                    <div className="card-body  d-flex flex-column">
                                        <div className="card-title title d-flex justify-content-between flex-row ">
                                            <div className=" d-flex">
                                                <div>
                                                    <h3>{flight.source.toUpperCase()}</h3>
                                                    <p>{flight.departure_airport}</p>
                                                </div>
                                                <span style={{ fontSize: "40px" }}>&#9992; </span>
                                                <div>
                                                    <h3>{flight.destination.toUpperCase()} </h3>
                                                    <p >{flight.arraival_airport}</p>
                                                </div>
                                            </div>
                                            <div className="mx-5">
                                                <h3 >
                                                    {flight.estimated_time}
                                                </h3>
                                            </div>
                                            <div>
                                                <h3>{flight.price} SAR</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </NavLink>
                        </div>

                    </>) : <Spinner animation="border" />
                }

                {/* <h3 key={flight._id}> {flight.source} |  {flight.destination} | {flight.price} &nbsp;
         <Button onClick={e => history.push(`/book/${flight._id}`)} variant="warning">Book </Button> <hr /> </h3>
) : <Spinner animation="border" />} */}

                {loaded && !flights.length && <h3>No flights available</h3>}


            </div>
        </div>
    )
}

export default SearchResults