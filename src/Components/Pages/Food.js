import React from 'react'
import '../Style.css'
const Food = () => {
  return (
    <div>
       <div>
  <h2 className="newarrival">Food</h2>
  <hr />
  <hr className="mt-5" />
  <div className="showing">
  </div>
  
  <div>
    <div className="d-flex">
      <div className="ms-4 lite"><h2 className="newar">Shop By</h2>
        <h2 className="newarr">STOCK STATUS </h2>
        <p className="mew">IN STOCK <input type="checkbox" id="subscribe" name="subscribe" defaultValue="yes" className="ms-5" /></p> 
        <p className="mew">OUT OF STOCK  <input type="checkbox" id="subscribe" name="subscribe" defaultValue="yes" className="ms-2" /></p>
      </div>
      <div className="container ">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 d-flex">
            <div className="card card12 ms-2">
              <div>
                <img src="https://www.efghousewares.co.uk/Content/14/images/Productimages/rsz_0_400_9cf72_150679.jpg" className="card-titl" alt />
                <div className="card-body">
                  <h2 className="pack">GOLDEN PRIDE SLICED  <br />BLACK OLIVES 3KG PK6</h2>
                  <h6 className="code"><b>Code:</b>144335</h6> 
                  <button className="butt">Shop Now</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 d-flex">
            <div className="card card12 ">
              <div>
                <img src="https://www.efghousewares.co.uk/Content/14/images/Productimages/rsz_0_400_c004e_144335.jpg" className="card-img-top card-titl" alt />
                <div className="card-body">
                  <h2 className="pack">GOLDEN PRIDE SLICEDMUSHROOMS</h2>
                  <h6 className="code"><b>Code:</b> 150679</h6>
                  <button className="butt">Shop Now</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 d-flex">
            <div className="card card12">
              <div>
                <img src="https://www.efghousewares.co.uk/Content/14/images/Productimages/rsz_8be560fb8de945669e1cf0a3dbec6eb9.JPG" className="card-img-top card-titl" alt />
                <div className="card-body">
                  <h2 className="pack">GOLDEN PRIDE WHOLE  PEELED  TOMATOES 2.55KG</h2>
                  <h6 className="code"><b>Code:</b> 135518</h6>
                  <button className="butt">Shop Now</button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 col-sm-6 col-12 d-flex">
            <div className="card card12">
              <div>
                <img src="https://www.efghousewares.co.uk/Content/14/images/Productimages/rsz_0_400_de568_160013.jpg" className="card-img-top card-titl" alt />
                <div className="card-body">
                  <h2 className="pack">KTC VEGETABLE OIL <br /> 5LTR PK3</h2>
                  <h6 className="code"><b>Code:</b>  160013</h6>
                  <button className="butt">Shop Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div></div></div></div>

    </div>
  )
}

export default Food