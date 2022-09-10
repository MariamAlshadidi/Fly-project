import React from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import './css/search.css'
const Search = () => {
    var someDate = new Date();
    someDate.setDate(someDate.getDate() + 3);
    var date = someDate.toISOString().substr(0, 10);
    const [flight, setFlight] = React.useState({
        source: '',
        destination: '',
        departure: date,
    })
    const [isCreated, setIsCreated] = React.useState(false)
    const [errors, setErrors] = React.useState([]);
    const history = useHistory()
    //const [flights, setFlights] = React.useState([])



    const handleChange = (e) => {
        setIsCreated(false)
        setFlight({ ...flight, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        history.push(`/search-results/${flight.source.toLowerCase()}/${flight.destination.toLowerCase()}/${flight.departure}`)
        //console.log(flight)

    }
    //console.log(flights)
    return (
        <div className="search-nav">
            <div className="search-box">
                <form className="form d-flex justify-content-evenly align-items-end" onSubmit={handleSubmit}>

                    <div className=" mt-4">
                        {/* <label className="form-label  tex-search"></label> */}
                        <input className="form-control" placeholder="From" value={flight.source} name="source" onChange={handleChange} />
                    </div>
                    <div className=" mt-4">
                        {/* <label className="form-label  tex-search">to:</label> */}
                        <input className="form-control" placeholder="To" value={flight.destination} name="destination" onChange={handleChange} />
                    </div>
                    <div className=" mt-4">
                        {/* <label className="form-label tex-search">Date:</label> */}
                        <input type="date" className="form-control" value={flight.departure} name="departure" onChange={handleChange} />
                    </div>
                    <div className=" mt-5">
                        {flight.source && flight.destination ?
                            <input className="btn btn-light btn-serach" value="Go" type="submit" /> :
                            <input className="btn btn-light btn-serach" value="Go" type="submit" disabled />
                        }
                    </div>
                </form>
            </div>
        </div >
    )
}
export default Search