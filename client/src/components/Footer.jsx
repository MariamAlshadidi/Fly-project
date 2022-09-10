// FOOTER PAGE  

import './css/footer.css'

function Footer()
{
    return (
      <>
        <div className="container-fluid pt-4 footer me-0 mt-5">
          <div className="row">
            <div className="col-md-2 mx-auto text-start">
              <h3>cool stuff</h3>
              <ul>
                <li>
                  {" "}
                  <a href="#"> flight </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="#"> airlines </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="#"> traveling </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="#"> skateboard </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="#"> about us </a>{" "}
                </li>
              </ul>
            </div>

            <div className="col-md-2 mx-auto text-start">
              <h3>boring stuff</h3>
              <ul>
                <li>
                  {" "}
                  <a href="#"> track order </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="#"> returns </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="#"> rewards </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="#"> support </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="#"> FAQs </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="#"> privacy policy </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="#"> terms & condition </a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="#"> coupon </a>{" "}
                </li>
              </ul>
            </div>

            <div className="col-md-2 mx-auto text-start">
              <h3>reach out to us</h3> <br />
              <h6>Email: hello@abcd.com</h6>
              <h6>
                Timing: <br /> 11am to 6pm Mon - Sat
              </h6>{" "}
              <br />
              <h3>
                <a href="#" title="INSTAGRAM">
                  {" "}
                  <i className="fa-brands fa-instagram"></i>{" "}
                </a>
                <a href="#" title="FACEBOOK">
                  {" "}
                  <i className="fa-brands fa-facebook"></i>{" "}
                </a>
                <a href="#" title="YOU TUBE">
                  {" "}
                  <i className="fa-brands fa-youtube"></i>{" "}
                </a>
              </h3>
            </div>

            <div className="col-md-2 mx-auto text-start">
              <h3>community exclusive</h3>

              <form>
                <div className="input-group my-4">
                  <input
                    type="email"
                    className="form-control w-100"
                    placeholder="email address"
                  />
                </div>

                <button type="submit" className="btn w-100 subs_btn">
                  {" "}
                  subscribe.{" "}
                  <i className="fa-solid fa-arrow-right-to-bracket"></i>{" "}
                </button>
              </form>
            </div>
          </div>

          <div className="row footer_2 mt-5">
            <div className="col-md-7 text-center pt-3 mx-auto">
              <h6>
                © 2022, XYZ® - Headwear, T-shirts, Sunglasses, Wallets, Face
                Masks, Caps. Skateboards
              </h6>
              <h5>
                <a href="#" title="VISA" className="me-3">
                  {" "}
                  <i class="fa fa-whatsapp  icon-3d"></i>
                </a>
                <a href="#" title="MASTERCARD" className="me-2">
                  <i class="fa fa-instagram"></i>
                </a>
                <a href="#" title="AMERICAN EXPRESS" className="me-2">
                  <i class="fa fa-tumblr"></i>
                </a>
                <a href="#" title="DINER CLUB" className="me-2">
                  {" "}
                  <i class="fa fa-linkedin"></i>{" "}
                </a>
                <a href="#" title="APPLE PAY" className="me-2">
                  {" "}
                  <i class="fa fa-google-plus"></i>
                </a>
                <a href="#" title="CASH ON DELIVERY" className="me-2">
                  {" "}
                  <i class="fa fa-twitter"></i>{" "}
                </a>
                <a href="#" title="AMAZON PAY" className="me-2">
                  {" "}
                  <i class="fa fa-facebook"></i>
                </a>
                <a href="#" title="PAYPAL" className="me-2">
                  {" "}
                  <i class="fa fa-codepen"> </i>
                </a>
                <a href="#" title="GOOGLE PAY" className="me-2">
                  {" "}
                  <i className="fa-brands fa-google-pay"></i>{" "}
                </a>
              </h5>
            </div>
          </div>

          <div
            className="footer_2 row text-center"
            style={{ borderTop: "0.5px solid #B3B6B7" }}
          >
            <h6>
              Designed & Developed by Bshayer, Khadijah, Norah, Mariam, & Shahad .
              <i class="fa-solid fa-hand-peace"></i>
            </h6>
          </div>
        </div>
      </>
    );
}

export default Footer;