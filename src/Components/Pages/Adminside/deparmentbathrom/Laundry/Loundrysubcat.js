
import React from 'react'
import Footer from '../../../../Footer'
import { Link } from 'react-router-dom'
import "../../../../Style.css"
const Loundrysubcat = () => {
  return (
    <div><div>
  <div className="department">
    <p className="departments">DEPARTMENTS  BATHROOM</p>
  </div>
  <div className="container">
  <div className="row justify-content-center mt-3">
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div>
          <Link to="/category/loundry/airers"><img src="/Images/laundry storage and luggage/1.jpg" alt className="img" /></Link>   
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div>
          <Link to="/category/loundry/iorining"><img src="/Images/laundry storage and luggage/2.jpg" alt className="img1" /></Link> 
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div>
          <Link to="/category/loundry/laacess"> <img src="/Images/laundry storage and luggage/3.jpg" alt className="img2" /></Link>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div>
          <Link to="/category/loundry/bagsl"><img src="/Images/laundry storage and luggage/4.jpg" alt className="img3" /></Link>   
        </div>
      </div>
    </div>
    <div className="row justify-content-center mt-3">
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div>
          <Link to="/category/loundry/bascketst"><img src="/Images/laundry storage and luggage/5.jpg" alt className="img" /></Link>   
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div>
          <Link to="/category/loundry/luggage"><img src="/Images/laundry storage and luggage/6.jpg" alt className="img1" /></Link> 
        </div>
      </div>
      
    </div>
  </div>
</div>
<Footer/>
</div>
  )
}

export default Loundrysubcat;