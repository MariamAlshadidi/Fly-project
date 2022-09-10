import { useEffect, useState } from "react"
import axios from 'axios';
import { useHistory, useParams, Link, NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';
import './css/flightsCards.css'

const CityFlights = props => {

    const { city } = useParams();
    const [flights, setFlights] = useState([]);
    const history = useHistory();
    const [loaded, setLoaded] = useState(false);


    const instance = axios.create({
        baseURL: 'http://localhost:8000/api/',

        timeout: 1000,
        //headers: { 'authorization': 'Bearer ' + localStorage.getItem('user') },
    })

    useEffect(() => {

        setTimeout(() => {
            instance.get(`/flights/${city.toLowerCase()}`)
                .then(res => {
                    setFlights(res.data.flights)
                    setLoaded(true)
                })
                .catch(err => console.log(err))


        }, "2000")

        // instance.get(`/users/${localStorage.getItem('user_email').slice(1,localStorage.getItem('user_email').length-1)}`)
        // .then(res => setUser(res.data.user))
        // .catch(err => console.log(err))

    }, [])

    return (
      <>
        <div>
          <h1 className="display-4 mt-5">Flights &#9992; {city}</h1>
        </div>
        <div style={{ marginTop: "30px" }} className="container">
          {loaded ? (
            flights.map((flight) => (
              <>
                <div className="container d-flex justify-content-between col-9">
                  <NavLink
                    className={(isActive) =>
                      isActive ? "nav-link active" : "nav-link"
                    }
                    to={`/book/${flight._id}`}
                  >
                    <div className="card m-4">
                      <div className="card-header d-flex justify-content-between colorBG">
                        <h4>{flight.airline}</h4>
                        <h5>
                          {flight.departure
                            .slice(0, 10)
                            .toLocaleString({ month: "long" })}
                        </h5>
                        <h5>
                          {flight.departure.slice(
                            11,
                            flight.departure.length - 8
                          )}{" "}
                          -{" "}
                          {flight.arraival.slice(
                            11,
                            flight.arraival.length - 8
                          )}
                        </h5>
                      </div>
                      <div className="card-body  d-flex flex-column">
                        <div className="card-title title d-flex justify-content-between flex-row ">
                          <div className=" d-flex">
                            <div>
                              <h3>{flight.source.toUpperCase()}</h3>
                              <p>{flight.departure_airport}</p>
                            </div>
                            <span style={{ fontSize: "40px" }} className="mt-4">&#9992; </span>
                            <div>
                              <h3>{flight.destination.toUpperCase()} </h3>
                              <p>{flight.arraival_airport}</p>
                            </div>
                          </div>
                          <div className="mx-5">
                            <h3>{flight.estimated_time}</h3>
                          </div>
                          <div>
                            <h3>{flight.price} SAR</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </NavLink>
                </div>
              </>
            ))
          ) : (
            <Spinner animation="border" />
          )}

          {/* <h3 key={flight._id}> {flight.source} |  {flight.destination} | {flight.price} &nbsp;
                         <Button onClick={e => history.push(`/book/${flight._id}`)} variant="warning">Book </Button> <hr /> </h3>
                ) : <Spinner animation="border" />} */}

          {loaded && !flights.length && <h3>No flights available</h3>}
        </div>
      </>
    );
}

export default CityFlights;
