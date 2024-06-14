import React from 'react'
import '../../../../Style.css'
import { Link } from 'react-router-dom'

import Footer from '../../../../Footer'
const Gardeningmain = () => {
  return (
    <div>
      <div className="container">
  <div className="row justify-content-center mt-3">
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
      <Link to='/bbq'><img src="./Images/Gardening.png" alt className="img" /></Link>
        
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to="/smoking"><img src="./Images/Gardening (2).png" alt className="img1" /></Link> 
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to="/poundline"> <img src="./Images/Gardening (3).png" alt className="img2" /></Link>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/deparmentbathroom'><img src="./Images/Gardening (4).png" alt className="img3" /></Link>   
      </div>
    </div>
  </div>
  <div className="row justify-content-center mt-3">
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/deparmentloundry'><img src="./Images/Gardening (5).png" alt className="img" /></Link>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/kitechenwear'> <img src="./Images/Gardening (6).png" alt className="img1" /></Link>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/cleaning'><img src="./Images/Gardening (7).png" alt className="img2" /></Link>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <a href><img src="./Images/Gardening (8).png" alt className="img3" /></a>
      </div>
    </div>
  </div>
  <div className="row justify-content-center mt-3">
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <a href><img src="./Images/Gardening (9).png" alt className="img" /></a> 
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/deparmentdisposible'><img src="./Images/Gardening (10).png" alt className="img1" /></Link> 
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <a href><img src="./Images/Gardening (11).png" alt className="img2" /></a>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
      <Link to="/bird"><img src="./Images/Gardening (1).png" alt className="img3" /></Link> 
      </div>
    </div>
  </div>
  
</div>
<Footer/>
    </div>
  )
}

export default Gardeningmain
