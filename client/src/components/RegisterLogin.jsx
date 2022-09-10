import axios from 'axios'
import { useHistory } from 'react-router-dom'
import React from 'react'
import UserContext from "../context/userContext";


function RegisterLogin() {
  const context = React.useContext(UserContext)

  const [user, setUser] = React.useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const [userLogin, setUserLogin] = React.useState({
    email: '',
    password: '',
  })
  const [errors, setErrors] = React.useState([]);
  const history = useHistory()
  //const { setAuth } = useContext(authContext);


  const handleChange = (e) => {
    console.log(user)
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleChangeLogin = (e) => {
    setUserLogin({ ...userLogin, [e.target.name]: e.target.value })
  }

  const handleRegister = (e) => {
    e.preventDefault()
    axios.post(`http://localhost:8000/api/signup`, user)
      .then(res => {
        console.log(res.data, 'data')
        //---
        if (res.data.userToken) {
          localStorage.setItem('user', JSON.stringify(res.data.userToken))
          localStorage.setItem('user_email', JSON.stringify(user.email))
          history.push('/home')
          context.setUserlogged(res.data.username)

        }
      })
      .catch(err => {
        console.log(err)
        const data = err.response.data;
        const errorMessages = [];
        if ("errors" in data) {
          for (let field in data.errors) {
            const validationError = data.errors[field];
            errorMessages.push(validationError.message);
          }
        }
        else {
          errorMessages.push("Email dose exist")
        }
        setErrors(errorMessages);
      })
  }
  const handleLogin = (e) => {
    e.preventDefault()
    axios.post(`http://localhost:8000/api/login`, userLogin)
      .then(res => {
        
        console.log(userLogin,'user')
        //---
        if (res.data.userToken) {
          localStorage.setItem('user', JSON.stringify(res.data.userToken))
          localStorage.setItem('user_email', JSON.stringify(userLogin.email))
          history.push('/')
          context.setUserlogged(res.data.username)
        }
      })
      .catch(err => {
        console.log(err)
        const data = err.response.data;
        const errorMessages = [];

        //errorMessages.push(data)

        if (!err?.response) {
          errorMessages.push("No Server Response");
        } else if (err.response?.status === 400) {
          errorMessages.push("Wrong Email or Password");
        } else if (err.response?.status === 401) {
          errorMessages.push("Unauthorized");
        } else {
          errorMessages.push("Login Failed");
        }
        setErrors(errorMessages);
      })

  };

  return (
    <div className="App">
      {errors.map((errorMessage, index) => (
        <div className="text-danger" key={index}>{errorMessage}</div>
      ))}

      <div className="container w-75 d-flex justify-content-between flex-sm-wrap flex-xl-nowrap
" >
        <div className="w-100 m-3">
          <h3>Register</h3>

          <form onSubmit={handleRegister} className="border border-3 p-4 border-dark">
            <div className="mb-3">
              <label name="username" className="form-label">Name:</label>
              <input name="username" value={user.username} className="form-control" onChange={handleChange} />
            </div>

            <div className="mb-3">
              <label name="email" className="form-label">email:</label>
              <input name="email" value={(user.email)} className="form-control" onChange={handleChange} />
            </div>

            <div className="mb-3">
              <label name="password" className="form-label">Password: </label>
              <input name="password" value={user.password} type="password" className="form-control" onChange={handleChange} />

            </div>
            <div className="mb-3">
              <label name="confirmPassword" className="form-label">Confirm Password: </label>
              <input name="confirmPassword" value={user.confirmPassword} type="password" className="form-control" onChange={handleChange} />

            </div>
            <input type="submit" value="Submit" className="btn btn-dark " style={{ backgroundColor: "#603F8B" }} />
          </form>
        </div>
        <div className="w-100 m-3">

          <h3>Login</h3>

          <form onSubmit={handleLogin} className="border border-3 p-4 border-dark">
            <div className="mb-3">
              <label name="email" className="form-label">email:</label>
              <input name="email" value={userLogin.email} className="form-control" onChange={handleChangeLogin} />
            </div>
            <div className="mb-3">
              <label name="password" className="form-label">Password: </label>
              <input name="password" value={userLogin.password} type="password" className="form-control" onChange={handleChangeLogin} />
            </div>
            <input type="submit" value="Submit" className="btn btn-dark" style={{ backgroundColor: "#603F8B" }} />
          </form>
        </div>

      </div>

    </div>
  );

}
export default RegisterLogin;
