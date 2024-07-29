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
        <Link to="/category/hardware/furniture"><img src="/Images/hardware/1.jpg" alt className="img" /></Link>   
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to="/category/hardware/mats"><img src="/Images/hardware/2.jpg" alt className="img1" /></Link> 
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to="/category/hardware/metalbuck"> <img src="/Images/hardware/3.jpg" alt className="img2" /></Link>
      </div>
    </div>
    {/* <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/deparmentbathroom'><img src="./Images/HARDWARE-3.png" alt className="img3" /></Link>   
      </div>
    </div> */}
  </div>
 
</div>
<Footer/>
    </div>
  )
}

export default Hardwaremain