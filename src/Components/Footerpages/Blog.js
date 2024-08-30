import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../Footer'

const Blog = () => {
  return (
    <>
    <div className="container mt-3">
  <div className="row">
    <div className="col-lg-12 col-md-12 col-sm-12">
      <center><h4>Latest news from EFG Housewares</h4>
        <hr className="line" /></center>
    </div>
    <hr />
  </div>
  <div className="row">
    <div className="col-lg-4 col-md-4 col-sm-12">
      <img src="./Images/img1.png" alt className="h-100 w-100 mt-md-0 mt-2" />
    </div>
    <div className="col-lg-8 col-md-8 col-sm-12">
      <Link to="/hotwater"><h3 className="text-primary">Wholesale Hot Water Bottles at low trade prices</h3></Link>
      <p>03/11/2022</p>
      <p>A guide for businesses of various types on the excellent hot water bottle products available
        from EFG Housewares</p>
    </div>
    <hr className="mt-4" />
  </div>
  <div className="row">
    <div className="col-lg-8 col-md-8 col-sm-12 mt-3">
      <a href><h3 className="text-primary">Festive Homeware Heroes! Christmas home décor that
          will boost spirits</h3></a>
      <p>03/11/2022</p>
      <p>A guide on the range of items to stock up on from EFG Housewares for the home ahead of
        Christmas 2022</p>
    </div>
    <div className="col-lg-4 col-md-4 col-sm-12  mt-3">
      <img src="./Images/img2.png" alt className="h-100 w-100 mt-md-0 mt-2" />
    </div>
    <hr className="mt-4" />
  </div>
  <div className="row">
    <div className="col-lg-4 col-md-4 col-sm-12  mt-3">
      <img src="./Images/img3.png" alt className="h-100 w-100 mt-md-0 mt-2" />
    </div>
    <div className="col-lg-8 col-md-8 col-sm-12 mt-3">
      <a href><h3 className="text-primary">Awesome Adhesives at Amazing Wholesale Prices</h3></a>
      <p>07/09/2022</p>
      <p>In our latest blog, we take a look through the wholesale adhesives we have and give you
        some inspiration as to what to stock up on</p>
    </div>
    <hr className="mt-4" />
  </div>
  <div className="row">
    <div className="col-lg-8 col-md-8 col-sm-12 mt-3">
      <a href><h3 className="text-primary">EFG’s Selection of Wholesale Home Scents</h3></a>
      <p>07/09/2022</p>
      <p>At EFG Housewares, we have a host of excellent wholesale home scent products to buy. In
        our latest blog, we pick out some of the best options from our range</p>
    </div>
    <div className="col-lg-4 col-md-4 col-sm-12  mt-3">
      <img src="./Images/img4.png" alt className="h-100 w-100 mt-md-0 mt-2" />
    </div>
  </div>
</div>
<Footer/>
</>
  )
}

export default Blog