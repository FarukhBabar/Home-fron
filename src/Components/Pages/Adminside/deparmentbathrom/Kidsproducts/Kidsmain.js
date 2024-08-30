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
        <Link to="/category/kidsproduct/babyproducts"><img src="/Images/kids product/1.jpg" alt className="h-100 w-100 mt-md-0 mt-2" /></Link>   
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to="/category/kidsproduct/kidssto"><img src="/Images/kids product/3.jpg" alt className="h-100 w-100 mt-md-0 mt-2" /></Link> 
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to="/category/kidsproduct/charater"><img src="/Images/kids product/2.jpg" alt className="h-100 w-100 mt-md-0 mt-2" /></Link> 
      </div>
    </div>
   
  </div>
 
</div>
<Footer/>
    </div>
  )
}

export default Kidsmain
