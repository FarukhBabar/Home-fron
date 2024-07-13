import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../App.css';

const Register = () => {
  const [Companynname, setCompanyName] = useState('');
  const [CompanyRegistration, setCompanyRegistration] = useState('');
  const [CompanyVat, setCompanyVat] = useState('');
  const [Address1, setAddress1] = useState('');
  const [Address2, setAddress2] = useState('');
  const [Address3, setAddress3] = useState('');
  const [Postcode, setPostcode] = useState('');
  const [City, setCity] = useState('');
  const [County, setCounty] = useState('');
  const [Country, setCountry] = useState('');
  const [Title, setTitle] = useState('');
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [PhoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const register = async (e) => {
    e.preventDefault();
    let result = await fetch('https://homeessential-fdca5e469865.herokuapp.com/register-user', {
      method: 'post',
      body: JSON.stringify({
        Companynname,
        CompanyRegistration,
        CompanyVat,
        Address1,
        Address2,
        Address3,
        Postcode,
        City,
        County,
        Country,
        Title,
        FirstName,
        LastName,
        PhoneNumber,
        email,
        password,
      }),
      headers: {
        'Content-type': 'application/json',
      },
    });
    result = await result.json();
    if (result) {
      alert('Account created successfully');
      navigate('/log');
    }
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-lg-8 col-md-10 col-sm-12">
          <h4 className="text-center">Register for an account</h4>
          <form onSubmit={register}>
            <div className="card">
              <div className="card-body">
               
                <h4>Billing Address Details</h4>
                <hr />
                <div className="form-group">
                  <label>
                    Address 1 <span title="This field must be fulfilled">*</span>
                  </label>
                  <input
                    type="text"
                    name="Address1"
                    value={Address1}
                    onChange={(e) => setAddress1(e.target.value)}
                    className="form-control"
                    placeholder="Enter Your Address" required
                  />
                </div>
                <div className="form-group">
                  <label>
                    Address 2 <span title="This field must be fulfilled">*</span>
                  </label>
                  <input
                    type="text"
                    name="Address2"
                    value={Address2}
                    onChange={(e) => setAddress2(e.target.value)}
                    className="form-control"
                    placeholder="Enter Your Address" required
                  />
                </div>
                <div className="form-group">
                  <label>
                    Address 3
                  </label>
                  <input
                    type="text"
                    name="Address3"
                    value={Address3}
                    onChange={(e) => setAddress3(e.target.value)}
                    className="form-control"
                    placeholder="Enter Your Address"
                  />
                </div>
                <div className="form-group">
                  <label>
                    Postcode <span title="This field must be fulfilled">*</span>
                  </label>
                  <input
                    type="text"
                    name="Postcode"
                    value={Postcode}
                    onChange={(e) => setPostcode(e.target.value)}
                    className="form-control"
                    placeholder="Enter Your Postcode" required
                  />
                </div>
                <div className="form-group">
                  <label>
                    City <span title="This field must be fulfilled">*</span>
                  </label>
                  <input
                    type="text"
                    name="City"
                    value={City}
                    onChange={(e) => setCity(e.target.value)}
                    className="form-control"
                    placeholder="Enter Your City" required
                  />
                </div>
               
                <div className="form-group">
                  <label>
                    Country <span title="This field must be fulfilled">*</span>
                  </label>
                  <input
                    type="text"
                    name="Country"
                    value={Country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="form-control"
                    placeholder="United Kingdom"
                    disabled // Assuming this is a static value
                  />
                </div>
                <hr />
                <h4>Sign Up Details</h4>
                <hr />
                <div className="form-group">
                  <label>
                    Title
                  </label>
                  <input
                    type="text"
                    name="Title"
                    value={Title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="form-control"
                    placeholder="Not Specified"
                  />
                </div>
                <div className="form-group">
                  <label>
                    First Name <span title="This field must be fulfilled">*</span>
                  </label>
                  <input
                    type="text"
                    name="FirstName"
                    value={FirstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="form-control"
                    placeholder="Enter Your First Name" required
                  />
                </div>
                <div className="form-group">
                  <label>
                    Last Name <span title="This field must be fulfilled">*</span>
                  </label>
                  <input
                    type="text"
                    name="LastName"
                    value={LastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="form-control"
                    placeholder="Enter Your Last Name" required
                  />
                </div>
                <div className="form-group">
                  <label>
                    Phone Number <span title="This field must be fulfilled">*</span>
                  </label>
                  <input
                    type="text"
                    name="PhoneNumber"
                    value={PhoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="form-control"
                    placeholder="Enter Your Phone Number" required
                  />
                </div>
                <div className="form-group">
                  <label>
                    Email <span title="Fields with * are mandatory  ">*</span>
                  </label>
                  <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                    placeholder="Enter Your Email" required
                  />
                </div>
                <div className="form-group">
                  <label>
                    Password <span title="This field must be fulfilled">*</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                    placeholder="Enter Your Password" required
                  />
                </div>
                
<div className='d-flex justify-content-center align-items-center mt-2'>
                <button type="submit" className="btn bt2 w-50 buy   ">Submit</button></div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
