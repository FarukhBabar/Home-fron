
import React from 'react'
import Footer from '../../../Footer'
import { Link } from 'react-router-dom'
import "../../../Style.css"
const Debathroom = () => {
  return (
    <div><div>
  <div className="department">
    <p className="departments">DEPARTMENTS => BATHROOM</p>
  </div>
  <div className="container">
  <div className="row justify-content-center mt-3">
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div>
          <Link to="/bathroommain"><img src="/Images/bathroom3.png" alt className="img" /></Link>   
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div>
          <Link to="/mirrormain"><img src="/Images/bathroom4.png" alt className="img1" /></Link> 
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div>
          <Link to="/showermain"> <img src="/Images/bathroom5.png" alt className="img2" /></Link>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div>
          <Link to="/bathmatesmain"><img src="/Images/bathrom1.png" alt className="img3" /></Link>   
        </div>
      </div>
    </div>
    <div className="row justify-content-center mt-3">
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div>
          <Link to="/bathacessories"><img src="/Images/batheroom2.png" alt className="img" /></Link>   
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div>
          <Link to="/showerhead"><img src="/Images/bathrrom6.png" alt className="img1" /></Link> 
        </div>
      </div>
      
    </div>
  </div>
</div>
<Footer/>
</div>
  )
}

export default Debathroom