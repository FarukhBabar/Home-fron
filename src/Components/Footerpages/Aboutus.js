import React from 'react'
import Footer from '../Footer'

const Aboutus = () => {
  return (
    <div>
      <div className="container mt-3">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 ">
            <center> <u><h2 className="contact">About Us</h2></u></center>
          </div>
        </div>
        <div className="row mt-2">
          <div className="col-lg-6 col-md-6 col-sm-12 ">
            Welcome to Home Essentials Hive, a platform that provides home accessories at discounted rates. We have experience serving customers across the UK. We have established the trust of our clients by providing them with quality products. We make purchasing easy for our clients.<br/>
           
           <h4>Company History</h4> 

            Home Essentials Hive was founded 10 years ago by a young businessman to cater to the needs of the UK public.  We started with a small warehouse with only a few employees. Now, we operate from a huge warehouse with a large number of skilled staff, and we are planning to expand our team so that we can capture more markets and cater to the needs of our clients.
           <h4>What we offer</h4> 
            We offer 50,000 product lines from 1000 trusted brands. Our products include a wide range of home essentials, from D batteries to matchboxes, food to drink, and healthcare to washroom cleaning supplies. All the products are made of high-standard material. We are available 24/7 for your assistance.

          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 mt-3">
            <img src="./Images/Map.jpg" alt className="Map" />
            <h4 className="mt-2">Our warehouse opening times are as follows:</h4>
            <p>
              Monday: &nbsp;07:30 - 17:30</p>
            <p>Tuesday: &nbsp;07:30 - 17:30</p>
            <p>  Wednesday: &nbsp;07:30 - 17:30</p>
            <p>  Thursday: &nbsp;07:30 - 18:30</p>
            <p> Friday:&nbsp; 07:30 - 16:30</p>
            <p> Saturday: &nbsp;08:30 - 15:00</p>
            <p> Sunday: &nbsp;07:30 - 12:30
            </p>
            <p>
              <b>We are closed on ALL UK Bank Holidays, plus Easter Sunday.</b> </p>
            &nbsp;
            <p>
              Please note that we do not allow children under the age of 18 in the warehouse under any circumstances and we only
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12">
            <img src="./Images/Pic.jpg" alt className="About" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Aboutus