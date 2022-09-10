
import { Link } from "react-router-dom";
const HomeTest =()=> {

    const cities = ['Jeddah' , 'Riyadh']
    return (
        <div>
             {cities.map( (city , index) =>
            <Link style={{marginLeft:"20px"}} key={index} to={`/flights/${city}`}>{city}</Link> 
             )}
            </div>
    )
}

export default HomeTest;