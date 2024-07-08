import React from 'react'

import Footer from '../Footer'
import Navbar from '../Navbar'
const Home = () => {
  return (
    <>
    <Navbar/>
   <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="/Images/Main banner/1ban.jpg" className="d-block w-100" alt="..." />
      
    </div>
    <div className="carousel-item ">
      <img src="/Images/Main banner/2ban.jpg" className="d-block w-100" alt="..." />
      
    </div>
    <div className="carousel-item ">
      <img src="/Images/Main banner/main-banners3.jpg" className="d-block w-100" alt="..." />
      
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

   <div className="container">
  
  <div className="row ">
    <div className="col-lg-6 col-md-6 col-sm-12"><img src="/Images/Homepag/Super Sunday.jpg" alt className="banner" /></div>
    <div className="col-lg-6 col-md-6 col-sm-12"><img src="/Images/Homepag/Pallet Deals.jpg" alt className="banner" /></div>
  </div>
  <div className="row mt-3 revie">
    <div className="col-lg-12 col-md-12 col-sm-12 reviews">
      <p className="title">Customer Reviews</p>
      <div className="row  rrr ">
        <div className="col-lg-2 col-md-3 col-sm-12 card ms-3 mt-3" style={{width: '16rem', height: 169}}>
          <div className="star-rating">
            <input type="radio" id="star5" name="rating" defaultValue={5} /><label htmlFor="star5" title="5 stars">☆</label>
            <input type="radio" id="star4" name="rating" defaultValue={4} /><label htmlFor="star4" title="4 stars">☆</label>
            <input type="radio" id="star3" name="rating" defaultValue={3} /><label htmlFor="star3" title="3 stars">☆</label>
            <input type="radio" id="star2" name="rating" defaultValue={2} /><label htmlFor="star2" title="2 stars">☆</label>
            <input type="radio" id="star1" name="rating" defaultValue={1} /><label htmlFor="star1" title="1 star">☆</label>
          </div>
          <div className="card-body">
            <h6 className="card-title">It was a really pleasant experiance</h6>
            <h6 className="card-subtitle mb-2 text-muted">It was a really pleasant experiance</h6>
            <br />
            <p className="time">Yanky, 1 day ago</p>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-12  card  ms-3 mt-3" style={{width: '16rem', height: 169}}>
          <div className="star-rating">
            <input type="radio" id="star5" name="rating" defaultValue={5} /><label htmlFor="star5" title="5 stars">☆</label>
            <input type="radio" id="star4" name="rating" defaultValue={4} /><label htmlFor="star4" title="4 stars">☆</label>
            <input type="radio" id="star3" name="rating" defaultValue={3} /><label htmlFor="star3" title="3 stars">☆</label>
            <input type="radio" id="star2" name="rating" defaultValue={2} /><label htmlFor="star2" title="2 stars">☆</label>
            <input type="radio" id="star1" name="rating" defaultValue={1} /><label htmlFor="star1" title="1 star">☆</label>
          </div>
          <div  className="card-body">
            <h6 className="card-title">It was a really pleasant experiance</h6>
            <h6 className="card-subtitle mb-2 text-muted">It was a really pleasant experiance</h6>
            <br />
            <p className="time">Yanky, 1 day ago</p>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-12  card  ms-3 mt-3" style={{width: '16rem', height: 169}}>
          <div className="star-rating">
            <input type="radio" id="star5" name="rating" defaultValue={5} /><label htmlFor="star5" title="5 stars">☆</label>
            <input type="radio" id="star4" name="rating" defaultValue={4} /><label htmlFor="star4" title="4 stars">☆</label>
            <input type="radio" id="star3" name="rating" defaultValue={3} /><label htmlFor="star3" title="3 stars">☆</label>
            <input type="radio" id="star2" name="rating" defaultValue={2} /><label htmlFor="star2" title="2 stars">☆</label>
            <input type="radio" id="star1" name="rating" defaultValue={1} /><label htmlFor="star1" title="1 star">☆</label>
          </div>
          <div className="card-body">
            <h6 className="card-title">It was a really pleasant experiance</h6>
            <h6 className="card-subtitle mb-2 text-muted">It was a really pleasant experiance</h6>
            <br />
            <p className="time">Yanky, 1 day ago</p>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-12  card ms-3 mt-3" style={{width: '16rem', height: 169}}>
          <div className="star-rating">
            <input type="radio" id="star5" name="rating" defaultValue={5} /><label htmlFor="star5" title="5 stars">☆</label>
            <input type="radio" id="star4" name="rating" defaultValue={4} /><label htmlFor="star4" title="4 stars">☆</label>
            <input type="radio" id="star3" name="rating" defaultValue={3} /><label htmlFor="star3" title="3 stars">☆</label>
            <input type="radio" id="star2" name="rating" defaultValue={2} /><label htmlFor="star2" title="2 stars">☆</label>
            <input type="radio" id="star1" name="rating" defaultValue={1} /><label htmlFor="star1" title="1 star">☆</label>
          </div>
          <div className="card-body">
            <h6 className="card-title">It was a really pleasant experiance</h6>
            <h6 className="card-subtitle mb-2 text-muted">It was a really pleasant experiance</h6>
            <br />
            <p className="time">Yanky, 1 day ago</p>
          </div>
        </div>
      </div>
      <div className="row rating mt-4">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <center><p className="card-subtitle ">Rated 4.5 / 5 based on  &nbsp;45 reviews  &nbsp;Showing our 4 &amp; 5 star reviews.</p> </center> 
        </div>
      </div>
      <center><img src="https://linkwwwebsite.000webhostapp.com/Group%2078.png" alt /></center>
    </div>
  </div>
  <div className="row mt-5">
    <div className="col-lg-6 col-md-6 col-sm-12">
      <img src="/Images/Homepag/Diy range.png" alt className="ca" />
    </div>
    <div className="col-lg-6 col-md-6 col-sm-12">
      <img src="/Images/Homepag/Poundlines range.png" alt className="ca" />
    </div>
  </div>
  {/* ------- */}
  <div className="row">
    <div className="col-lg-3 col-md-4 col-sm-12">
      <img src="/Images/Homepag/disposables.png" className="caa" alt />
    </div>
    <div className="col-lg-3 col-md-4 col-sm-12">
      <img src="/Images/Homepag/Household Cleaners.png" className="caa" alt />
    </div>
    <div className="col-lg-3 col-md-4 col-sm-12">
      <img src="/Images/Homepag/Cleaning Materials.png" alt className="caa" />
    </div>
    <div className="col-lg-3 col-md-4 col-sm-12">
      <img src="/Images/Homepag/Plastics.png" alt className="caa" />
    </div>
  </div>
  <div className="row  ">
    <div className="col-lg-3 col-md-4 col-sm-12">
      <img src="/Images/Homepag/Partyware.png" className="caa " alt />
    </div>
    <div className="col-lg-3 col-md-4 col-sm-12">
      <img src="/Images/Homepag/Kitchen Utensils.png" className="caa " alt />
    </div>
    <div className="col-lg-3 col-md-4 col-sm-12">
      <img src="/Images/Homepag/Cookware.png" className="caa" alt />
    </div>
    <div className="col-lg-3 col-md-4 col-sm-12">
      <img src="/Images/Homepag/Bakeware.png" className="caa" alt />
    </div>
  </div>
  <div className="row  ">
    <div className="col-lg-3 col-md-4 col-sm-12">
      <img src="/Images/Homepag/Toiletries.png" className="caa" alt />
    </div>
    <div className="col-lg-3 col-md-4 col-sm-12">
      <img src="/Images/Homepag/Pet Products.png" className="caa" alt />
    </div>
    <div className="col-lg-3 col-md-4 col-sm-12">
      <img src="/Images/Homepag/Stationeries.png" className="caa" alt />
    </div>
    <div className="col-lg-3 col-md-4 col-sm-12">
      <img src="/Images/Homepag/all departements.png" className="caa" alt />
    </div>
  </div>
  <div>
    <div className="mt-2 reviews">
      <p className="title1">WE ARE UK'S LARGEST INDEPENDENT WHOLESALER</p>
    </div>
    <p className="ms-2  mt-4">Welcome to EFG Housewares, your trusted <b>trade only</b> wholesaler with over 45 years of industry experience!
      Explore our extensive selection of 50,000+ products from 1,000+ reputable UK brands, now available online.
      Open a trade account today for seamless ordering and delivery, backed by our dedicated team who will assist
      you every single step of the way.</p>
    <p className="mt-3 ms-2">EFG: Everything under One Roof</p>
  </div>
  <div className="row">
    <div className="col-lg-4 col-md-6 col-sm-12 form1">
      <center><h3 className="registerform text-white">CREATE AN ACCOUNT</h3></center>
      <p className="te ms-3">PLEASE CLICK ON THE REGISTER BUTTON BELOW TO CREATE AN ACCOUNT</p>
      <center><button className=" mb-3 registerbuton ">REGISTER</button></center>
    </div>
    <div className="col-lg-4 col-md-6 col-sm-12  homeage ">
      <center><h3 className="registerform text-white">EMAIL</h3></center>
      <div className="">
        <div>
          <label className="ms-2">EMAIL</label>
          <input type="text" className="  homelogin" placeholder="Type Your Email" />
        </div>
        <div className='pashome'>
        <label className="">PASSWORD</label>
          <input type="text" className="homelogin" placeholder="Type Your Email" />
        </div>
      </div>     
      <div className=" d-flex">
        <div className="forgot mb-3"> <a href>FORGOT PASSWORD</a></div>
        <div>
          <button className="mb-3 sizebutton1 ms-2 registerbuto ">LOGIN</button>
        </div>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col-lg-12 col-md-12 col-sm-12 mt-2 reviews">
      <p className="title">FEATURED BRANDS</p>
    </div>
  </div>
  <div className='row slider'>
    <div className='col slide-track'>
     
      <div>
      <img src="https://www.efghousewares.co.uk/Content/14/images/BrandsLogo/655857d34d9f48f0bb57298ba4efa29c.jpg" alt className="" />
      </div>
      <div>
      <img src="https://www.efghousewares.co.uk/Content/14/images/BrandsLogo/142cc78ff34640d1899c77dfe0d66496.jpg" alt className="sliimg" />
      </div>
      <div>
      <img src="https://www.efghousewares.co.uk/Content/14/images/BrandsLogo/02beb9a5e10c4f4a847406158222cda2.jpg" alt className="sliimg" />
      </div>
      <div>
      <img src="https://www.efghousewares.co.uk/Content/14/images/BrandsLogo/c8ada3393abf463fa6f2a016e80386a6.jpg" alt className="sliimg" />
      </div>
      <div>
      <img src="https://www.efghousewares.co.uk/Content/14/images/BrandsLogo/6436ee1233344abbbbcf90d82d69dae5.jpg" alt className="sliimg" />
      </div>
      <div>
      <img src="https://www.efghousewares.co.uk/Content/14/images/BrandsLogo/37f51d5132b24473906028d623d30ab5.jpg" alt className="sliimg" />
      </div>
      <div>
      <img src="https://www.efghousewares.co.uk/Content/14/images/BrandsLogo/2c689aaf4d9c48c990640f6c70fc55b8.jpg" alt className="sliimg" />
      </div>
      <div>
      <img src="https://www.efghousewares.co.uk/Content/14/images/BrandsLogo/093f9422000e4e6883be7b281ae95545.jpg" alt className="sliimg" />
      </div>
      <div>
      <img src="https://www.efghousewares.co.uk/Content/14/images/BrandsLogo/26cad78f12d9404cbf5c8a64fb1a888a.jpg" alt className="sliimg" />
      </div>
      <div>
      <img src="https://www.efghousewares.co.uk/Content/14/images/BrandsLogo/dc65ce50a7434978ab3534eb2eecae01.jpg" alt className="sliimg" />
      </div>
      <div>
      <img src="https://www.efghousewares.co.uk/Content/14/images/BrandsLogo/fd66e73b317d478ebd3c9c11560fa104.jpg" alt className="sliimg" />
      </div>
      <div>
      <img src="https://www.efghousewares.co.uk/Content/14/images/BrandsLogo/88b88d29caef4765be995bc32e7aa862.jpg" alt className="sliimg" />
      </div>
    </div>
  </div>
</div>
<Footer/>
</>
  )
}

export default Home