import React from 'react'
import '../../../../Style.css'
import { Link } from 'react-router-dom'

import Footer from '../../../../Footer'
const Partywaremain = () => {
  return (
    <div>
      <div className="container">
  <div className="row justify-content-center mt-3">
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to="/baloon"><img src="./Images/Partyware/Partyware.png" alt className="img" /></Link>   
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to="/pumps"><img src="./Images/Partyware/Partyware-1.png" alt className="img1" /></Link> 
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to="/banner"> <img src="./Images/Partyware/Partyware-2.png" alt className="img2" /></Link>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/deparmentbathroom'><img src="./Images/Partyware/Partyware-3.png" alt className="img3" /></Link>   
      </div>
    </div>
  </div>
  <div className="row justify-content-center mt-3">
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/deparmentloundry'><img src="./Images/Partyware/Partyware-4.png" alt className="img" /></Link>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/kitechenwear'> <img src="./Images/Partyware/Partyware-5.png" alt className="img1" /></Link>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/cleaning'><img src="./Images/Partyware/Partyware-6.png" alt className="img2" /></Link>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/gardening'><img src="./Images/Partyware/Partyware-7.png" alt className="img3" /></Link>
      </div>
    </div>
  </div>
  <div className="row justify-content-center mt-3">
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/toiletries'><img src="./Images/Partyware/Partyware-8.png" alt className="img" /></Link> 
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/deparmentdisposible'><img src="./Images/Partyware/Partyware-9.png" alt className="img1" /></Link> 
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/homedecore' ><img src="./Images/Partyware/Partyware-10.png" alt className="img2" /></Link>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/diye'><img src="./Images/Partyware/Partyware-11.png" alt className="img3" /></Link>
      </div>
    </div>
  </div>
  <div className="row justify-content-center mt-3">
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/flowers'><img src="./Images/Partyware/Partyware-12.png" alt className="img" /></Link> 
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <a href><img src="./Images/Partyware/Partyware-13.png" alt className="img1" /></a>
      </div>
    </div>
    </div>
  
</div>
<Footer/>
    </div>
  )
}

export default Partywaremain
