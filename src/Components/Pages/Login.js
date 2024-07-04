import React from 'react'
import { useState , useEffect } from 'react'
import {  Link, useNavigate, } from 'react-router-dom'
import Footer from '../Footer'

const Login = () => {
  const[email , setemail] = useState()
  const [ password  , setpassword]  = useState()
  const nevigate=useNavigate()
  
  useEffect(() => {
        const user = localStorage.getItem('user');
        if (user) {
          const userData = JSON.parse(user);
          if (userData.role === 'user') {
            nevigate('/');
          }
        }
      }, [nevigate]);
    // const role = user ? JSON.parse(user).role : null
  const registeruser = async (e) => {
    e.preventDefault();
    try {
      let result = await fetch('https://homeessential-fdca5e469865.herokuapp.com/login', {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          'Content-type': 'application/json'
        }
      });
      const data = await result.json();
      
      if (result.ok) {
        localStorage.setItem('user', JSON.stringify(data));
        if (data.role === "admin") {
          alert("Wellcome To Admin Panal");
          nevigate("/adminpanal"); // Navigate to the form page
        } else {
          alert("Account Login Sucessfully")
          nevigate('/');
        }
      } else {
        alert(data.Message);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
       <div className="container">
  <div className="row">
    <div className="col-lg-12 col-md-12 col-sm-6">
      <center>
        <h2 className="loginhead">Login or creat an account</h2>
        <hr className="under" />
      </center>
    </div>
  </div>
  <div className=" row ">
    <div className="col-lg-5 col-md-4 col-sm-12 formlogin">
      <form className="ms-4 mt-4">
        <div>
          <div className="mb-4"><u><center><p className="signhead mb-0">SIGN IN </p>
              </center></u>
          </div> 
          <p className="accountb">PLEASE SIGN IN YOUR ACCOUNT BELOW</p>
        </div>
        <div className="mb-3 forw ">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email"  name='email' value={email} onChange={(e)=>setemail(e.target.value)} className="form-control loginform" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3 forw">
          <label htmlFor="exampleInputPassword1" className="form-label ">Password</label>
          <input type="password"  name='password' value={password} onChange={(e)=>setpassword(e.target.value)} className="form-control loginform" id="exampleInputPassword1" />
        </div>
        <button type="submit" onClick={registeruser}  className="btn btn-primary forw loginbuton">Login To Your Account</button>
        <div className="mt-2 forgotpas ">
          <Link to="/forget">Forgot Password?</Link></div>
      </form>
    </div>
    <div className="col-lg-5 col-md-4 col-sm-12 creataccou ">
      <center><u> <p className="creatacc  ">CREATE AN ACCOUNT</p></u></center>
      <p className="ms-5 mt-4"> &nbsp;PLEASE CLICK ON THE REGISTER BUTTON <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; BELOW TO CREATE AN ACCOUNT</p>
      <p className="below " />
      <center><Link to="/Register"><button type="submit" className="btn btn-primary mt-3 registerbuton  form-control">REGISTER</button></Link></center>   
    </div>
  </div>
</div>
<Footer/>
    </div>
  )
}

export default Login


