
import React from 'react'
import Footer from '../../../../../Footer'
import { Link } from 'react-router-dom'
import "../../../../../Style.css"
const Disposiblecat = () => {
  return (
    <div><div>
  <div className="department">
    <p className="departments">DEPARTMENTS  BATHROOM</p>
  </div>
  <div className="container">
  <div className="row justify-content-center mt-3">
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div>
          <Link to="/category/disposible/disposible"><img src="/Images/116.jpg" alt className="h-100 w-100 mt-md-0 mt-2" /></Link>   
                  </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div>
          <Link to="/category/disposible/tablewear"><img src="/Images/20.jpg" alt className="h-100 w-100 mt-md-0 mt-2" /></Link> 
        </div>
      </div>
    </div>
  </div>
</div>
<Footer/>
</div>
  )
}

export default Disposiblecat