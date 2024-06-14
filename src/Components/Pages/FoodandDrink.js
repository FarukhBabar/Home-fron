import React from 'react'
import Footer from '../Footer'
import { Link } from 'react-router-dom'
import "../Style.css"
const FoodandDrink = () => {
  return (
    <div><div>
  <div className="department">
    <p className="departments">Departments</p>
  </div>
  <div className="container">
    <div className="row justify-content-center mt-3">
      <div className="col-lg-3 col-md-6 col-sm-12 mt-3">
        <Link to="/foods">
          <img src="../Images/Group 418 (1).png" className="img" alt />
        </Link>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 ms-3 mt-3">
        <Link to="/drinks">
          <img src="../Images/Group 418 (2).png" className="img1" alt />
        </Link>
      </div>
    </div>
  </div>
</div>
<Footer/>
</div>
  )
}

export default FoodandDrink