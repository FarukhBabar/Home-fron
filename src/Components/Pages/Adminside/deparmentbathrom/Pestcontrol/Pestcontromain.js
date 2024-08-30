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
        <Link to="/category/pestcontrol/rentokil"><img src="/Images/Pest control/1.jpg" alt className="h-100 w-100 mt-md-0 mt-2" /></Link>   
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to="/category/pestcontrol/stv"><img src="/Images/Pest control/2.jpg" alt className="h-100 w-100 mt-md-0 mt-2" /></Link> 
      </div>
    </div>
    
   
  </div>
 
</div>
<Footer/>
    </div>
  )
}

export default Pestcontromain
