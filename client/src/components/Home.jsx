// import { NavLink } from 'react-router-dom';

import "./css/home.css";
// import './js_files/Home_counter.js'
import To_top from "./To_top";
import Contact from "./Floatingcontact";
// import './js_files/totop_js.js'

// import apparel_header from './imgs/fly.png'
import apparel_catagory_1 from "./imgs/Riyadh.jpg";
import apparel_catagory_2 from "./imgs/jeddah.jpg";
import apparel_catagory_3 from "./imgs/abha.jpg";
import apparel_catagory_4 from "./imgs/Istanbul.jpg";
import apparel_catagory_5 from "./imgs/seoul.jpg";
import apparel_catagory_6 from "./imgs/london.jpg";
// import apparel_banner from './imgs/apparel_banner_img.jpg'

import gadget_img1 from "./imgs/20%.png";
import gadget_img2 from "./imgs/itrusted.png";
import gadget_img3 from "./imgs/unlimited.png";

import { NavLink, Link } from "react-router-dom";

import Search from "./Search";
import React from "react";
import axios from "axios";

function Home() {
  const [cities, setCities] = React.useState([
    { city: "Riyadh", img: apparel_catagory_1 },
    { city: "Jeddah", img: apparel_catagory_2 },
    { city: "Abha", img: apparel_catagory_3 },
    { city: "Istanbul", img: apparel_catagory_4 },
    { city: "Seoul", img: apparel_catagory_5 },
    { city: "London", img: apparel_catagory_6 },
  ]);
  const [user, setUser] = React.useState({});

  const instance = axios.create({
    baseURL: "http://localhost:8000/api/",
    timeout: 1000,
    headers: { authorization: "Bearer " + localStorage.getItem("user") },
  });

  // React.useEffect(() => {
  //   if (localStorage.getItem('user_email'))
  //     instance.get(`/users/${localStorage.getItem('user_email').slice(1, localStorage.getItem('user_email').length - 1)}`)
  //       .then(res => {
  //         setUser(res.data.user)
  //         localStorage.setItem('username', JSON.stringify(res.data.user.username))
  //       })
  //       .catch(err => console.log(err))
  // }, [localStorage])

  //print username
  //console.log(JSON.stringify(localStorage.getItem('username')))

  return (
    <>
      {/* apparel start */}

      <div className="container-fluid slider_bg p-0" id="pagetop">
        <div className="row p-5">
          <div className="col-md-6 mx-auto text-center">
            {/* <img src={ apparel_header } alt="" className='heading_img mb-3' />  */}
            <br />
          </div>
        </div>
      </div>
      <div style={{ marginTop: "-220px" }}>
        <Search />
      </div>
      <div
        className="container-fluid my-5 bg-landing"
        style={{ marginTop: "150px" }}
      >
        <center>
          <h4 class="mt-5 g_store_heading">Let’s book your next trip!</h4>
        </center>
        <div className="row d-flex flex-nowrap apparels pt-4 m-5">
          {cities.map((c) => (
            <div className="apparel_1 p-0 m-3 text-center">
              <Link style={{ textDecoration: "none" }} to={`/flight/${c.city}`}>
                <img src={c.img} alt="" className="apparal_catagory_img" />

                <h5 className="font-style">
                  <b>{c.city}</b>
                </h5>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="container-fluid apparel_banner">
        <div className="row">
          <div className="overlay">
            <div className="col-md-5 mx-auto text-center pt-5">
              {/* <img src={ apparel_banner } alt="" className="apparel_banner_text mb-4" /> */}
            </div>
          </div>
        </div>
      </div>

      {/* apparel end */}

      {/* -------------------------------------------------------------------------------- */}

      {/* gadget catagory start */}

      <center>
        <h1 class="mt-5 g_store_heading">Let’s book your next trip!</h1>
      </center>

      <div className="container-fluid gadget_bg mt-5 p-0">
        <div className="row py-5">
          <div className="col-lg-3 offset-lg-1 p-0">
            <a href="#" className="d-flex align-items-center gadget_1 p-2">
              <img src={gadget_img1} alt="" className="g_1_size" />
              <div className="py-4 ms-4 px-2">
                <p>
                  <b>Trusted Travel Partners:</b>
                  <p>51 Mn+ happy customers have booked with us till date</p>
                </p>
              </div>
            </a>

            <a href="#" className="d-flex align-items-center gadget_2 p-2">
              <img src={gadget_img2} alt="" className="g_1_size" />
              <div className="py-2 ms-4 px-2">
                <p>
                  <b>Best Brand Promise:</b>
                  <p>
                    We mark 20 years of brand existence and are a Nasdaq listed
                    company
                  </p>
                </p>
              </div>
            </a>

            <a href="#" className="d-flex align-items-center gadget_3 p-2">
              <img src={gadget_img3} alt="" className="g_1_size" />
              <div className="py-2 ms-4 px-2">
                <p>
                  {" "}
                  <b>Unlimited Choices Available: </b>{" "}
                  <p>
                    {" "}
                    We offer a choice of 700,000 hotel options across the globe.
                  </p>
                </p>
              </div>
            </a>
          </div>

          <div className="col-lg-6 offset-lg-1">
            <div
              id="gadget_carousel"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#gadget_carousel"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#gadget_carousel"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#gadget_carousel"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
              </div>

              <div className="carousel-inner">
                <div className="carousel-item active gadget_car_dmns">
                  <div className="gadget_car_text mx-auto mt-3">
                    <div className="container-fluid">
                      <div className="row pt-5">
                        {/* <div className="col-0 offset-md-1 pt-5">
                                            <h2>Check our huge</h2>
                                            <h1><b>Smartphones</b></h1>
                                            <h4>& Accessories collection</h4>
                                            <button type="button" className="btn mt-3 gadget_car_button">Shop Now</button>
                                        </div> */}
                        <div className="col-md-12 offset-md-1 mt-4 p-0">
                          <img
                            src="https://www.almosafer.com/_next/image?url=http%3A%2F%2Fcms-cdn.almosafer.com%2Fdrupal_cms%2Falm%2Ffiles%2Fpublic%2F2021-11%2Fksa-travel-homepage-card2x.jpg&w=640&q=75"
                            alt=""
                            className="g_2_size"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="carousel-item gadget_car_dmns">
                  <div className="gadget_car_text mx-auto mt-3">
                    <div className="container-fluid">
                      <div className="row pt-5">
                        {/* <div className="col-md-5 pt-5">
                                            <h2>Explore the best</h2>
                                            <h1><b>VR Collection</b></h1>
                                            <h4>on the market</h4>
                                            <button type="button" className="btn mt-3 gadget_car_button">Shop Now</button>
                                        </div> */}
                        <div className="col-md-12  mt-4 p-0">
                          <img
                            src="https://www.almosafer.com/_next/image?url=http%3A%2F%2Fcms-cdn.almosafer.com%2Fdrupal_cms%2Falm%2Ffiles%2Fpublic%2F2020-09%2Finternational-destination-580x213-generic2x.jpg&w=640&q=75"
                            alt=""
                            className="g_2_size"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="carousel-item gadget_car_dmns">
                  <div className="gadget_car_text mx-auto mt-3 pt-5">
                    <div className="container-fluid">
                      <div className="row">
                        {/* <div className="col-md-5 offset-md-1 pt-5">
                                            <h5>World of music with</h5>
                                            <h1><b>Headphones</b></h1>
                                            <h4>Choose between top brands</h4>
                                            <button type="button" className="btn mt-3 gadget_car_button">Shop Now</button>
                                        </div> */}

                        <div className="col-md-12 mt-4 p-0">
                          <img
                            src="https://www.almosafer.com/_next/image?url=http%3A%2F%2Fcms-cdn.almosafer.com%2Fdrupal_cms%2Falm%2Ffiles%2Fpublic%2F2022-06%2Fdesktop-homepage-card-580x213-en2x_5.jpg&w=640&q=75"
                            alt=""
                            className="g_2_size"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <To_top></To_top>
      <Contact></Contact>
    </>
  );
}

export default Home;
