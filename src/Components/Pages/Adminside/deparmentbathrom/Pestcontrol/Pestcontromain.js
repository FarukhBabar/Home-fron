import React from 'react'
import '../../../../Style.css'
import { Link } from 'react-router-dom'

import Footer from '../../../../Footer'
const Pestcontromain = () => {
  return (
    <div>
      <div className="container">
  <div className="row justify-content-center mt-3">
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to="/rentokil"><img src="./Images/Pest Control.png" alt className="img" /></Link>   
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to="/stv"><img src="./Images/Pest Control (1).png" alt className="img1" /></Link> 
      </div>
    </div>
    
   
  </div>
 
</div>
<Footer/>
    </div>
  )
}

export default Pestcontromain
