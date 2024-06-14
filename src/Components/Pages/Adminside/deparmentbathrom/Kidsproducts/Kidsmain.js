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
        <Link to="/babyproducts"><img src="./Images/Kids Products.png" alt className="img" /></Link>   
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to="/kidssto"><img src="./Images/Kids Products-1.png" alt className="img1" /></Link> 
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to="/smoking"><img src="./Images/Kids Products-2.png" alt className="img1" /></Link> 
      </div>
    </div>
   
  </div>
 
</div>
<Footer/>
    </div>
  )
}

export default Kidsmain
