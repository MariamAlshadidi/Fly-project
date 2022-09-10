
import axios from 'axios'
import { useHistory } from 'react-router-dom'
import React from 'react'
import './css/RegisterTest.css'
import UserContext from "../context/userContext";

function RegisterTest() {
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
      <>
     <div className="error">
      {errors.map((errorMessage, index) => (
        <div className="alert alert-light" key={index}>{errorMessage}</div>
      ))}
      <div class="login-wrap">
	<div class="login-html">
		<input id="tab-1" type="radio" name="tab" class="sign-in" checked /> <label for="tab-1" class="tab"> Sign In</label>
		<input id="tab-2" type="radio" name="tab" class="sign-up" /><label for="tab-2" class="tab">Sign Up</label>
		
        <div class="login-form">
        <form onSubmit={handleLogin} class="sign-in-htm"  >
			{/* <div class="sign-in-htm"  > */}
				<div class="group">
					<label for="user" class="label">Email</label>
					<input id="user" class="input"  name="email" value={userLogin.email} onChange={handleChangeLogin}   />
				</div>
				<div class="group">
					<label for="pass" class="label">Password</label>
					<input id="pass" class="input" data-type="password"  name="password" value={userLogin.password} type="password" onChange={handleChangeLogin} />
				</div>
				<div class="group">
					<input id="check" type="checkbox" class="check" checked />
					<label for="check"><span class="icon"></span> Keep me Signed in</label>
				</div>
				<div class="group">
					<input type="submit"  className=' button btn btn-warning' value="Sign In" />
				</div>
				<div class="hr"></div>
				<div class="foot-lnk">
					<a href="#forgot" className='link'>Forgot Password?</a>
				</div>
			{/* </div> */}
        </form> 

         <form onSubmit={handleRegister}  class="sign-up-htm">  
			{/* <div class="sign-up-htm">  */}
     
				<div class="group">
					<label for="user" class="label">Username</label>
					<input id="user" type="text" class="input"  name="username" value={user.username}onChange={handleChange}/>
				</div>
				<div class="group">
					<label for="pass" class="label">Password</label>
					<input id="pass" type="password" class="input" data-type="password" name="password" value={user.password}  onChange={handleChange}/>
				</div>
				<div class="group">
					<label for="pass" class="label">Repeat Password</label>
					<input id="pass" type="password" class="input" data-type="password"  name="confirmPassword" value={user.confirmPassword} onChange={handleChange} />
				</div>
				<div class="group">
					<label for="pass" class="label">Email Address</label>
					<input id="pass" type="text" class="input"  name="email" value={(user.email)} onChange={handleChange}  />
				</div>
				<div class="group">
					<input type="submit"  className=' button btn btn-warning' value="Sign Up" />
				</div>
				<div class="hr"></div>
				<div class="foot-lnk">
					<label for="tab-1" className='link' >Already Member?</label>
				</div>
			{/* </div> */}
         </form>
          
		</div>
	</div>
</div>
      </div>
      </>
  )

}

export default RegisterTest