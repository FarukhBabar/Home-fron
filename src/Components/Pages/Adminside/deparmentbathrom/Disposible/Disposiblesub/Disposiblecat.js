
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
          <Link to="/disposible"><img src="/Images/116.jpg" alt className="img" /></Link>   
                  </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12">
        <div>
          <Link to="/tablewear"><img src="/Images/20.jpg" alt className="img1" /></Link> 
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