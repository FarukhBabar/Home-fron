import React from 'react'
import '../../../../Style.css'
import { Link } from 'react-router-dom'

import Footer from '../../../../Footer'
const Hardwaremain = () => {
  return (
    <div>
      <div className="container">
  <div className="row justify-content-center mt-3">
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to="/furniture"><img src="./Images/HARDWARE.png" alt className="img" /></Link>   
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to="/mats"><img src="./Images/HARDWARE-1.png" alt className="img1" /></Link> 
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to="/poundline"> <img src="./Images/HARDWARE-2.png" alt className="img2" /></Link>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/deparmentbathroom'><img src="./Images/HARDWARE-3.png" alt className="img3" /></Link>   
      </div>
    </div>
  </div>
 
</div>
<Footer/>
    </div>
  )
}

export default Hardwaremain