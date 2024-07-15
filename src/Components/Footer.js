import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <div>
 <footer className=" footer mt-4">
  <div className="footer-top py-8">
    <div className="container">
      <div className="row gy-5">
        <div className="col-lg-8 pe-xxl-10">
          <div className="row gy-5">
            <div className="col-6 col-lg-4">
              <h5 className="text-black footer-title-01">CUSTOMER SERVICE</h5>
              <ul className="list-unstyled footer-link-01 m-0">
                <li><Link className="tex text-black text-opacity-75" to="/contact">Contact Us</Link></li>
                <li><Link className="tex text-black text-opacity-75" to="/aboutus">About Us</Link></li>
                <li><Link className="tex text-black text-opacity-75" to="/delivery">Delivery</Link></li>
                {/* <li><Link className="tex text-black text-opacity-75" to="/export">Export</Link></li> */}
                <li><Link className="tex text-black text-opacity-75" to="/faq">Help / FAQ</Link></li>
              </ul>
            </div>
            <div className="col-6 col-lg-3">
              <h5 className="text-black footer-title-01">Website</h5>
              <ul className="list-unstyled footer-link-01 m-0">
                <li><Link className="tex text-black text-opacity-75" to="/blog">Blog</Link></li>
                <li><a className="tex text-black text-opacity-75" href="/privacy">Privacy Policy</a></li>
                <li><Link to='/faqs'><a className="tex text-black text-opacity-75" href="/cookies">FAQ</a></Link></li>
                <li><a className="tex text-black text-opacity-75" href="/termscondition">Terms &amp; Conditions</a></li>
              </ul>
            </div>
            <div className="col-6 col-lg-4">
              <h5 className="text-black footer-title-01">Contact Us</h5>
             {/* <Link to='/faqs'><h5 className="text-black footer-title-01">FAQ</h5></Link>   */}
              <ul className="list-unstyled footer-link-01 m-0">
                <li><a className="tex text-black text-opacity-75" href="#">29 Mollison Avenue, Brimsdown, Enfield, EN3 7NL</a></li>
                <li><a className="tex text-black text-opacity-75" href="#">E:enquiries@fdd3wea.co.uk</a></li>
                <li><a className="tex text-black text-opacity-75" href="#">T: 0208 12 12123</a></li>
                {/* <li><a className="text-white text-opacity-75" href="#">Get the app</a></li>
                <li><a className="text-white text-opacity-75" href="#">Store locator</a></li> */}
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <h5 className="text-black footer-title-01 fs-5">Subscribe to our newsletter and get 15% off your next order.</h5>
          <div>
            <form className="d-flex flex-row mb-2 p-1  input-group"><input type="email" className="form-control rounded border-0" placeholder="Your Email" /> <button className="btn btn-secondary flex-shrink-0" type="submit">Subscribe</button></form>
            <p className="fs-sm text-black text-opacity-75">I agree to receive Absolution newsletters</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="footer-bottom small py-3 border-top border-white border-opacity-10">
    <div className="container">
      <div className="row">
        <div className="col-md-6 text-center text-md-start py-1">
          <p className="m-0 text-black text-opacity-75">© 2022 copyright by <a className="text-reset" href="#">homeessentialhive.co.uk</a></p>
        </div>
        {/* <div className="col-md-6 text-center text-md-end py-1">
          <ul className="nav justify-content-center justify-content-md-end list-unstyled footer-link-01 m-0">
            <li className="p-0 mx-3 ms-md-0 me-md-3"><a href="#" className="tex text-black text-opacity-75">Privace &amp; Policy</a></li>
            <li className="p-0 mx-3 ms-md-0 me-md-3"><a href="#" className="tex text-black text-opacity-75">Faq's</a></li>
            <li className="p-0 mx-3 ms-md-0 me-md-3"><a href="#" className="tex text-black text-opacity-75">Get a Quote</a></li>
          </ul>
        </div> */}
      </div>
    </div>
  </div>
</footer>


    </div>
  )
}

export default Footer