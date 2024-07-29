import React from 'react'
import '../../../../Style.css'
import { Link } from 'react-router-dom'

import Footer from '../../../../Footer'
const Chinamain = () => {
  return (
    <div>
      <div className="container">
  <div className="row justify-content-center mt-3">
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to="/category/chinaproducts/cookware"><img src="/Images/china/1.jpg" alt className="img" /></Link>   
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to="/category/chinaproducts/crockery"><img src="/Images/china/2.jpg" alt className="img1" /></Link> 
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to="/category/chinaproducts/dinner"> <img src="/Images/china/3.jpg" alt className="img2" /></Link>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div> 
        <Link to='/category/glassweare/drinkingglass'><img src="/Images/china/glasses.jpg" alt className="img3" /></Link>   
      </div>
    </div>
  </div>
  <div className="row justify-content-center mt-3">
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/category/chinaproducts/glasstablewear'><img src="/Images/china/4.jpg" alt className="img" /></Link>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/category/chinaproducts/homebaking'><img src="/Images/china/5.jpg" alt className="img" /></Link>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/category/chinaproducts/mugcups'><img src="/Images/china/6.jpg" alt className="img" /></Link>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/category/chinaproducts/storageaccessories'><img src="/Images/china/7.jpg" alt className="img" /></Link>
      </div>
    </div>
  </div>
 
</div>
<Footer/>
    </div>
  )
}

export default Chinamain
