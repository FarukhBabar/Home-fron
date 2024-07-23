import React from 'react'
import '../../../../Style.css'
import { Link } from 'react-router-dom'

import Footer from '../../../../Footer'
const Glasswaremain = () => {
  return (
    <div>
      <div className="container">
  <div className="row justify-content-center mt-3">
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to="/cakes"><img src="/Images/Glassware/Glassware.jpg" alt className="img" /></Link>   
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to="/crokery"><img src="/Images/Glassware/Glassware-1.jpg" alt className="img1" /></Link> 
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to="/crystal"> <img src="/Images/Glassware/Glassware-2.jpg" alt className="img2" /></Link>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/drinkingglass'><img src="/Images/Glassware/Glassware-3.jpg" alt className="img3" /></Link>   
      </div>
    </div>
  </div>
  <div className="row justify-content-center mt-3">
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/glassdecorative'><img src="/Images/Glassware/Glassware-4.jpg" alt className="img" /></Link>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/glasstumbler'> <img src="/Images/Glassware/Glassware-5.jpg" alt className="img1" /></Link>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/glassvass'><img src="/Images/Glassware/Glassware-6.jpg" alt className="img2" /></Link>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/glassstorage'><img src="/Images/Glassware/Glassware-7.jpg" alt className="img3" /></Link>
      </div>
    </div>
  </div>
  <div className="row justify-content-center mt-3">
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/glasstableware'><img src="/Images/Glassware/Glassware-8.jpg" alt className="img" /></Link> 
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/pyrex'><img src="/Images/Glassware/Glassware-9.jpg" alt className="img1" /></Link> 
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/kliner' ><img src="/Images/Glassware/Group 26.jpg" alt className="img2" /></Link>
      </div>
    </div>
    {/* <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/flowers'><img src="./Images/Glassware/Glassware1.png" alt className="img2" /></Link> 
      </div>
    </div> */}
  </div>
 
</div>
<Footer/>
    </div>
  )
}

export default Glasswaremain