import axios from 'axios'
import React from 'react'

const Allflights = () => {
    const [data, setData] = React.useState([])
    const [user, setUser] = React.useState()

    const instance = axios.create({
        baseURL: 'http://localhost:8000/api/',
        timeout: 1000,
        headers: { 'authorization': 'Bearer ' + localStorage.getItem('user') },
    })

    React.useEffect(() => {
        instance.get('/flight')
            .then(res => setData(res.data.flights))
            .catch(err => console.log(err))
        instance.get(`/users/${localStorage.getItem('user_email').slice(1,localStorage.getItem('user_email').length-1)}`)
        .then(res => setUser(res.data.user))
        .catch(err => console.log(err))
        
    }, [])
    console.log(`/users/${localStorage.getItem('user_email').slice(1,localStorage.getItem('user_email').length-1)}`)
    return (

        <>
         <div>
            <div>{user.username}</div>
            {data.map(a => <div key={a._id}>{a.source}</div>)}
        </div>
        
        </>
    )
}

export default Allflights