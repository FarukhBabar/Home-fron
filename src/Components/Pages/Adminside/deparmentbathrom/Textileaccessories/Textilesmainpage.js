import React from 'react'
import '../../../../Style.css'
import { Link } from 'react-router-dom'

import Footer from '../../../../Footer'
const Textilesmainpage = () => {
  return (
    <div>
      <div className="container">
  <div className="row justify-content-center mt-3">
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to="/aprons"><img src="./Images/Textiles & Accessories.png" alt className="img" /></Link>   
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to="/bedding"><img src="./Images/Textiles & Accessories-1.png" alt className="img1" /></Link> 
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to="/clothing"> <img src="./Images/Textiles & Accessories-2.png" alt className="img2" /></Link>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/curtains'><img src="./Images/Textiles & Accessories-3.png" alt className="img3" /></Link>   
      </div>
    </div>
  </div>
  <div className="row justify-content-center mt-3">
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/tablecover'><img src="./Images/Textiles & Accessories-4.png" alt className="img" /></Link>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/teatowel'><img src="./Images/Textiles & Accessories-5.png" alt className="img" /></Link>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/towelaccessories'><img src="./Images/Textiles & Accessories-6.png" alt className="img" /></Link>
      </div>
    </div>
  </div>
 
</div>
<Footer/>
    </div>
  )
}

export default Textilesmainpage
