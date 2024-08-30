import React from 'react'
import '../../../../Style.css'
import { Link } from 'react-router-dom'

import Footer from '../../../../Footer'
const  Leaning = () => {
  return (
    <div>
      <div className="container">
  <div className="row justify-content-center mt-3">
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to="/category/cleaning/sponge"><img src="/Images/child catagory/cleaning/133.jpg" alt className="h-100 w-100 mt-md-0 mt-2" /></Link>   
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to="/category/cleaning/mops"><img src="/Images/child catagory/cleaning/134.jpg" alt className="h-100 w-100 mt-md-0 mt-2" /></Link> 
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to="/category/cleaning/gloves"> <img src="/Images/child catagory/cleaning/132.jpg" alt className="h-100 w-100 mt-md-0 mt-2" /></Link>
      </div>
    </div>
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/category/cleaning/duster'><img src="/Images/child catagory/cleaning/21.jpg" alt className="h-100 w-100 mt-md-0 mt-2" /></Link>   
      </div>
    </div>
  </div>
  <div className="row justify-content-center mt-3">
    <div className="col-lg-3 col-md-6 col-sm-12">
      <div>
        <Link to='/category/cleaning/brushware'><img src="/Images/child catagory/cleaning/131.jpg" alt className="h-100 w-100 mt-md-0 mt-2" /></Link>
      </div>
    </div>
  </div>
</div>
<Footer/>
    </div>
  )
}

export default  Leaning
