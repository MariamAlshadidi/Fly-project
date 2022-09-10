import { NavLink, useHistory } from 'react-router-dom'; //for linking
import Button from 'react-bootstrap/Button';
import './css/header.css'

import logo from './imgs/logo.png'
import React from 'react';
import axios from 'axios';
import UserContext from "../context/userContext";

function Navbar() {
    const context = React.useContext(UserContext)

    const history = useHistory()
    
    console.log(context)
    const handleClick = () => {
        localStorage.clear()
        //setIsUpdates(true)
        context.setUserlogged('')
        history.push('/home')
    }
    return (
        <>
            <nav className="navbar nav_bg  navbar-expand-lg w-100 p-0 navbar_position pe-5 ps-5">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse justify-content-between ">
                        <div>
                            <ul className="navbar-nav">
                                <li className="nav-item full_nav">
                                    <img src={logo} alt="" className='logo_img' />
                                </li>
                                <li className="nav-item full_nav">

                                    <NavLink to='/' className="nav-link nav_text" > iFly</NavLink>

                                </li>

                                <li className="nav-item">
                                    <NavLink to='/AboutUs' className="nav-link nav_text" > ABOUT US </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to='/AboutUs' className="nav-link nav_text" > CONTACT US </NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="d-flex flex-row-reverse search_width">
                            <ul className="navbar-nav">
                                {context.userlogged ? <>
                                    <li className="nav-item text-white mx-1 nav_text pe-2">{context.userlogged}</li>
                                    <li className="nav-item nav_text ms-2"><span onClick={handleClick}>Logout</span >  <span><i className="fa fa-sign-out" ></i></span> </li>

                                </>
                   
                                    : <li className="nav-item"><span className='nav_text' onClick={e => history.push(`/signup`)} variant="warning">Login </span> </li>
                                }

                            </ul>
                        </div>

                    </div>


                </div>
            </nav>

            {/* responsive navbar start -------------------------------------- */}

            <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex="-1" id="nav_toggler" style={{ "background": "linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%)" }}>

                <div className="offcanvas-header">
                    <button data-bs-dismiss="offcanvas" className='resp_nav_x'> <i style={{ "fontSize": 40 }} className="fa-solid fa-x"></i> </button>
                </div>

                <div className="offcanvas-body">

                    {/* <!-- accordian start --> */}

                    <div className="accordion accordion-flush" id="nav_accordian">

                        <div className="accordion-item">

                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne">
                                    <h1>SHOP</h1>
                                </button>
                            </h2>

                        </div>

                        <div className="accordion-item">

                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed mt-1" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo">
                                    <h1>ARTICLES</h1>
                                </button>
                            </h2>

                        </div>
                        <button className="accordion-button collapsed mt-1" type="button">
                            <NavLink to='/AboutUs' className="nav-link" >
                                <h1 style={{ "color": "black" }}>ABOUT US </h1>
                            </NavLink>
                        </button>

                        <button className="accordion-button collapsed mt-1" type="button">
                            <NavLink to='/Pageunderconstruction' className="nav-link" >
                                <h1 style={{ "color": "black" }}>COMMUNITY </h1>
                            </NavLink>
                        </button>

                    </div>

                    {/* <!-- accordian end --> */}



                    {/* <!-- search start --> */}

                    <div className="my-4 w-100 search_width">
                        <form>
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Search" />
                                <div className="input-group-text"> <i className="fa-solid fa-magnifying-glass"></i> </div>
                            </div>
                        </form>
                    </div>

                    {/* <!-- search start --> */}


                    {/* <!-- accordian 2 start --> */}

                    <div className="accordion accordion-flush" id="nav_accordian_2">

                        <div className="accordion-item">

                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne_2">
                                    <h6>Need Help?</h6>
                                </button>
                            </h2>

                            <div id="flush-collapseOne_2" className="accordion-collapse collapse p-2 nav_acc_text" data-bs-parent="#nav_accordian_2">

                                <ul>
                                    <li> <a href="#"> log in </a> </li>
                                    <li> <a href="#"> track order </a> </li>
                                    <li> <a href="#"> returns </a> </li>
                                    <li> <a href="#"> rewards </a> </li>
                                    <li> <a href="#"> support </a> </li>

                                    <li>
                                        <NavLink to='/Contactus' className="nav-link" >contact us </NavLink></li>
                                </ul>

                            </div>

                        </div>

                        <div className="accordion-item">

                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed mt-1" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo_2">
                                    <h6>Order & Shipping</h6>
                                </button>
                            </h2>

                            <div id="flush-collapseTwo_2" className="accordion-collapse collapse p-2 nav_acc_text" data-bs-parent="#nav_accordian_2">

                                <ul>
                                    <li> <a href="#"> track Order </a></li>
                                    <li> <a href="#"> order Status </a></li>
                                    <li> <a href="#"> cancel Order </a></li>
                                    <li> <a href="#"> return Order </a></li>
                                </ul>

                            </div>

                        </div>

                    </div>

                    {/* <!-- accordian 2 end --> */}


                    {/* <!-- social start --> */}

                    <div className="mt-3">
                        <h6>Connect with Us</h6>
                        <h1>
                            <i title="facebook" className="fa-brands fa-facebook-square mx-2"></i>
                            <i title="twitter" className="fa-brands fa-twitter-square mx-2"></i>
                            <i title="instagram" className="fa-brands fa-instagram-square mx-2"></i>
                            <i title="youtube" className="fa-brands fa-youtube-square mx-2"></i>
                        </h1>
                    </div>

                    {/* <!-- social end --> */}

                </div>

            </div>

            {/* responsive navbar end */}

        </>
    )
}

export default Navbar;
