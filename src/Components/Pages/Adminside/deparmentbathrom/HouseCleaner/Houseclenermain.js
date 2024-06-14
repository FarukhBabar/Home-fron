import React from 'react'
import '../../../..//Style.css'
import { Link } from 'react-router-dom'

import Footer from '../../../../Footer'
const Houseclenermain = () => {
  return (
    <div>
      <div className="container">
  <div className="row justify-content-center mt-3">
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to="/freshn"><img src="./Images/Household Cleaners.png" alt className="img" /></Link>   
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to="/smoking"><img src="./Images/Household Cleaners-1.png" alt className="img1" /></Link> 
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to="/bleech"> <img src="./Images/Household Cleaners-2.png" alt className="img2" /></Link>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/car'><img src="./Images/Household Cleaners-3.png" alt className="img3" /></Link>   
      </div>
    </div>
  </div>
  <div className="row justify-content-center mt-3">
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/deparmentloundry'><img src="./Images/Household Cleaners-4.png" alt className="img" /></Link>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/kitechenwear'> <img src="./Images/Household Cleaners-5.png" alt className="img1" /></Link>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/cleaning'><img src="./Images/Household Cleaners-6.png" alt className="img2" /></Link>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/gardening'><img src="./Images/Household Cleaners-7.png" alt className="img3" /></Link>
      </div>
    </div>
  </div>
  <div className="row justify-content-center mt-3">
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/toiletries'><img src="./Images/Household Cleaners-8.png" alt className="img" /></Link> 
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/deparmentdisposible'><img src="./Images/Household Cleaners-9.png" alt className="img1" /></Link> 
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/homedecore' ><img src="./Images/Household Cleaners-10.png" alt className="img2" /></Link>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/diye'><img src="./Images/Household Cleaners-11.png" alt className="img3" /></Link>
      </div>
    </div>
  </div>
  <div className="row justify-content-center mt-3">
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/flowers'><img src="./Images/Household Cleaners-12.png" alt className="img" /></Link> 
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <a href><img src="./Images/Household Cleaners-13.png" alt className="img1" /></a>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/stationery'><img src="./Images/Household Cleaners (1).png" alt className="img2" /></Link> 
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/textiles & Accessories'><img src="./Images/Household Cleaners (2).png" alt className="img3" /></Link>
      </div>
    </div>
  </div>
  <div className="row justify-content-center mt-3">
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <a href><img src="./Images/Household Cleaners (3).png" alt className="img" /></a>
      </div>
    </div>
  </div>
</div>
<Footer/>
    </div>
  )
}

export default Houseclenermain
