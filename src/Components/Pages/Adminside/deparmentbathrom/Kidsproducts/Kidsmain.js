import React from 'react'
import '../../../../Style.css'
import { Link } from 'react-router-dom'

import Footer from '../../../../Footer'
const Kidsmain = () => {
  return (
    <div>
      <div className="container">
  <div className="row justify-content-center mt-3">
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to="/babyproducts"><img src="/Images/kids product/1.jpg" alt className="img" /></Link>   
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to="/kidssto"><img src="/Images/kids product/3.jpg" alt className="img1" /></Link> 
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to="/simplehuman"><img src="/Images/kids product/2.jpg" alt className="img1" /></Link> 
      </div>
    </div>
   
  </div>
 
</div>
<Footer/>
    </div>
  )
}

export default Kidsmain
