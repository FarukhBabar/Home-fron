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
        <Link to="/category/foodanddrinks/foods">
          <img src="/Images/Food/8.jpg" className="h-100 w-100 mt-md-0 mt-2" alt />
        </Link>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 ms-3 mt-3">
        <Link to="/category/foodanddrinks/drinks">
          <img src="/Images/Food/7.jpg" className="h-100 w-100 mt-md-0 mt-2" alt />
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