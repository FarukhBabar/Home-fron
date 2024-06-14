import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer'

const Smoking = () => {
  return (
    <div>
      <div>
  <div className="department">
    <p className="departments">Smoking Products</p>
  </div>
  <div className="container">
    <div className="row justify-content-center mt-3">
      <div className="col-lg-3 col-md-6 col-sm-12 mt-3">
        <Link to="/lighter">
          <img src="../Images/Group 116.png" className="img" alt />
        </Link>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 ms-3 mt-3">
        <Link to="/electrical">
          <img src="../Images/Group 115.png" className="img1" alt />
        </Link>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 ms-3 mt-3">
        <Link to="/essentional">
          <img src="../Images/Group 171.png" className="img1" alt />
        </Link>
      </div>
    </div>
  </div>
</div>
<Footer/>
    </div>
  )
}

export default Smoking