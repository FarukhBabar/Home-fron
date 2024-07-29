import React from 'react'
import '../../../../Style.css'
import { Link } from 'react-router-dom'

import Footer from '../../../../Footer'
const Homedecoremain = () => {
  return (
    <div>
      <div className="container">
  <div className="row justify-content-center mt-3">
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to="/category/homedecore/st"><img src="/Images/home & decor/1.jpg" alt className="img" /></Link>   
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to="/category/homedecore/candel"><img src="/Images/home & decor/2.jpg" alt className="img1" /></Link> 
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to="/category/homedecore/fathersday"> <img src="/Images/home & decor/3.jpg" alt className="img2" /></Link>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/category/homedecore/framsmirror'><img src="/Images/home & decor/4.jpg" alt className="img3" /></Link>   
      </div>
    </div>
  </div>
  <div className="row justify-content-center mt-3">
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/category/homedecore/giftwareh'><img src="/Images/home & decor/5.jpg" alt className="img" /></Link>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/category/homedecore/incense'> <img src="/Images/home & decor/6.jpg" alt className="img1" /></Link>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/category/homedecore/memorial'><img src="/Images/home & decor/7.jpg" alt className="img2" /></Link>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/souvenirs'><img src="/Images/home & decor/9.jpg" alt className="img3" /></Link>
      </div>
    </div>
  </div>
  <div className="row justify-content-center mt-3">
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/category/homedecore/wedding'><img src="/Images/home & decor/10.jpg" alt className="img" /></Link> 
      </div>
    </div>
  
  </div>
 
</div>
<Footer/>
    </div>
  )
}

export default Homedecoremain
