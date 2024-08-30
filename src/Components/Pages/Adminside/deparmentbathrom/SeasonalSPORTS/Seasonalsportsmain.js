import React from 'react'
import '../../../../Style.css'
import { Link } from 'react-router-dom'

import Footer from '../../../../Footer'
const Seasonalsportsmain = () => {
  return (
    <div>
      <div className="container">
  <div className="row justify-content-center mt-3">
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to="/category/seasonalsports/cooler"><img src="/Images/seasonal sport/1.jpg" alt className="h-100 w-100 mt-md-0 mt-2" /></Link>   
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to="/category/seasonalsports/flask"><img src="/Images/seasonal sport/2.jpg" alt className="h-100 w-100 mt-md-0 mt-2" /></Link> 
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to="/category/seasonalsports/hotwaterr"> <img src="/Images/seasonal sport/3.jpg" alt className="h-100 w-100 mt-md-0 mt-2" /></Link>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/category/seasonalsports/picnic'><img src="/Images/seasonal sport/4.jpg" alt className="h-100 w-100 mt-md-0 mt-2" /></Link>   
      </div>
    </div>
  </div>
  <div className="row justify-content-center mt-3">
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/category/seasonalsports/sportbootel'><img src="/Images/seasonal sport/5.jpg" alt className="h-100 w-100 mt-md-0 mt-2" /></Link>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/category/seasonalsports/umbrella'><img src="/Images/seasonal sport/7.jpg" alt className="h-100 w-100 mt-md-0 mt-2" /></Link>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/category/seasonalsports/towelssport'><img src="/Images/seasonal sport/towe.jpg" alt className="h-100 w-100 mt-md-0 mt-2" /></Link>
      </div>
    </div>
  </div>
 
</div>
<Footer/>
    </div>
  )
}

export default Seasonalsportsmain