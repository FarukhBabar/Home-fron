import React from 'react'
import '../../../../Style.css'
import { Link } from 'react-router-dom'
import Footer from '../../../../Footer'

const Tolitriesmain = () => {
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center mt-3">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div>
              <Link to="cotton"><img src="/Images/toiletries/2.jpg" alt="Cotton" className="img" /></Link>   
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div>
              <Link to="baby"><img src="/Images/toiletries/1.jpg" alt="Baby" className="img2" /></Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div>
              <Link to="giftsets"><img src="/Images/toiletries/4.jpg" alt="Gift Sets" className="img2" /></Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div>
              <Link to="hair"><img src="/Images/toiletries/5.jpg" alt="Hair" className="img3" /></Link>   
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-3">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div>
              <Link to="hand"><img src="/Images/toiletries/6.jpg" alt="Hand" className="img" /></Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div>
              <Link to="health"><img src="/Images/toiletries/7.jpg" alt="Health" className="img1" /></Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div>
              <Link to="mouthwash"><img src="/Images/toiletries/8.jpg" alt="Mouthwash" className="img2" /></Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div>
              <Link to="perfumes"><img src="/Images/toiletries/9.jpg" alt="Perfumes" className="img3" /></Link>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-3">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div>
              <Link to="sanitary"><img src="/Images/toiletries/10.jpg" alt="Sanitary" className="img" /></Link> 
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div>
              <Link to="shampo"><img src="/Images/toiletries/11.jpg" alt="Shampo" className="img1" /></Link> 
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div>
              <Link to="saving"><img src="/Images/toiletries/12.jpg" alt="Saving" className="img2" /></Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div>
              <Link to="showerge"><img src="/Images/toiletries/13.jpg" alt="Shower Gel" className="img3" /></Link>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-3">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div>
              <Link to="skincare"><img src="/Images/toiletries/14.jpg" alt="Skincare" className="img" /></Link> 
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div>
              <Link to="soapbar"><img src="/Images/toiletries/15.jpg" alt="Soapbar" className="img1" /></Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div>
              <Link to="toothbrush"><img src="/Images/toiletries/16.jpg" alt="Toothbrush" className="img2" /></Link> 
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div>
              <Link to="toothpast"><img src="/Images/toiletries/17.jpg" alt="Toothpaste" className="img3" /></Link>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-3">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div>
              <Link to="africa"><img src="/Images/toiletries/18.jpg" alt="Africa" className="img" /></Link>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div>
              <Link to="deodrant"><img src="/Images/toiletries/3.jpg" alt="Deodorant" className="img1" /></Link> 
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Tolitriesmain
