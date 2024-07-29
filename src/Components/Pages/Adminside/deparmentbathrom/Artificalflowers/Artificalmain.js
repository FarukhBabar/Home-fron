import React from 'react'
import '../../../../Style.css'
import { Link } from 'react-router-dom'

import Footer from '../../../../Footer'
const Artificalmain = () => {
  return (
    <div>
      <div className="container">
  <div className="row justify-content-center mt-3">
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to="/category/flowers/artifical"><img src="/Images/artificals/1.jpg" alt className="img" /></Link>   
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to="/category/flowers/bouquet"><img src="/Images/artificals/2.jpg" alt className="img1" /></Link> 
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to="/category/flowers/garland"> <img src="/Images/artificals/3.jpg" alt className="img2" /></Link>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/category/flowers/singlestem'><img src="/Images/artificals/4.jpg" alt className="img3" /></Link>   
      </div>
    </div>
  </div>
  <div className="row justify-content-center mt-3">
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/category/flowers/wreaths'><img src="/Images/artificals/5.jpg" alt className="img" /></Link>
      </div>
    </div>
  </div>
 
</div>
<Footer/>
    </div>
  )
}

export default Artificalmain
