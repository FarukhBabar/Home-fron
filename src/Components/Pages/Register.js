import React, { useState } from 'react'
import "../../App.css"
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const[Companynname , setCompanyName]=useState()
  const[CompanyRegistration , setCompanyRegistration]=useState()
  const[CompanyVat , setCompanyVat]=useState()
  const[Address1 , setAddress1]=useState()
  const[Address2 , setAddress2]=useState()
  const[Address3 , setAddress3]=useState()
  const[Postcode , setPostcode]=useState()
  const[City , setCity]=useState()
  const[County , setCounty]=useState()
  const[Country , setCountry]=useState()
  const[Title , setTitle]=useState()
  const[FirstName , setFirstName]=useState()
  const[LastName , setLastName]=useState()
  const[PhoneNumber , setPhoneNumber]=useState()
    const[email , setEmail]=useState()
    const[password , setPassword]=useState()
    const navigate = useNavigate()

    const register = async (e)=>{
        e.preventDefault() 
        let result = await fetch("https://homeessential-fdca5e469865.herokuapp.com/register-user",{
            method:'post',
            body :JSON.stringify({Companynname , CompanyRegistration, CompanyVat,Address1,Address2,Address3,Postcode,City,County,Country,Title,FirstName,LastName,PhoneNumber, email , password }),
            headers:{
                'Content-type':'application/json'
            }
        })
        result=await result.json()
         if(result){
             alert("Account created sucessfully")
            navigate('/log')
         }

    }
  return (
    <div>
        <div className="container">
  <div className="row">
    <div className="col-lg-12 col-md-12 col-sm-12">
      <center><h4>Register for an account</h4></center>
      <center><p>Please complete the form below to register for a TRADE ACCOUNT</p></center>  
      <p>We are now offering a like-for-like substitute for any items you've ordered that may not be in stock at the time of picking. . Please note that this is a separate form.&nbsp;</p>
      <h4>My Details</h4>
      <hr />
      <form>
        <center>
         
            <label >Company Name</label>
            <input type="text" name='Companynname' onChange={(e)=>setCompanyName(e.target.value)} value={Companynname} placeholder="Enter Your Company Name " className="input21" /> <br />
          <label className='comp'>Company Registration  Number</label>
            <input type="text" name='CompanyRegistration' onChange={(e)=>setCompanyRegistration(e.target.value)} value={CompanyRegistration} placeholder="Enter Your Company Registration Number " className="input211" /> <br />
       <label  className='comp'>Company VAT Number </label>
            <input type="text" name='CompanyVat' onChange={(e)=>setCompanyVat(e.target.value)} value={CompanyVat} placeholder="Enter Your Company VAT Number " className="input2111" /><br />
        </center>
        <b><p>Billing Address Details</p></b>
        <hr />
        <center>
          <label >Address 1</label>
          <input type="text" name="Address1"  onChange={(e)=>setAddress1(e.target.value)} value={Address1} className="inpu" placeholder="Enter Your Address" id /><br />
          <label >Address 2</label>
          <input type="text" name="Address2" onChange={(e)=>setAddress2(e.target.value)} value={Address2} className="inpu" placeholder="Enter Your Address" id /><br />
          <label >Address 3</label>
          <input type="text" name="Address3" onChange={(e)=>setAddress3(e.target.value)} value={Address3} className="inpu" placeholder="Enter Your Address" id /><br />
          <label >Postcode </label>
          <input type="text" name="Postcode" onChange={(e)=>setPostcode(e.target.value)} value={Postcode} className="inpu" placeholder="Enter Your Postcode" id /><br />
          <label >City </label>
          <input type="text" name="City" onChange={(e)=>setCity(e.target.value)} value={City} className="inpu1" placeholder="Enter Your City" id /><br />
          <label >County</label>
          <input type="text" name="County" onChange={(e)=>setCounty(e.target.value)} value={County} className="inpu11" placeholder="Enter Your County" id /><br />
          <label >Country</label>
          <input type="text" name="Country" onChange={(e)=>setCountry(e.target.value)} value={Country}   className="inpu11" placeholder="United Kingdom" id /><br />
        </center>
        <b><p>Login Details</p></b>
        <hr />
        <center>
          <div className="ti">
            <label >Title</label>
            <input type="text" name="Title" onChange={(e)=>setTitle(e.target.value)} value={Title}  className="in" placeholder="Not Specified" id /><br /></div>
          <label  className="first">First Name</label>
          <input type="text" name="FirstName" onChange={(e)=>setFirstName(e.target.value)} value={FirstName}  className="input12" placeholder="Enter Your Name" id /><br />
          <label >Last Name</label>
          <input type="text" name="LastName" onChange={(e)=>setLastName(e.target.value)} value={LastName} className="inpu" placeholder="Enter Your Last Name" id /><br />
         
            <label className='pho' >Phone Number</label>
            <input type="text" name="PhoneNumber" onChange={(e)=>setPhoneNumber(e.target.value)} value={PhoneNumber} className="in1" placeholder="Enter Your Phone Number" id /><br />
          <div className="email">
            <label >Email</label>
            <input type="text" name="email" onChange={(e)=>setEmail(e.target.value)} value={email} className="in2" placeholder="Enter Your Email" id /><br /></div>
          <label >Password</label>
          <input type="password" name="password"  onChange={(e)=>setPassword(e.target.value)} value={password} className="input121 " placeholder="Enter Your Password" id /><br />
         
           
          <button className="buttom" onClick={register}>Submit</button>
        </center>
      </form>
    </div>
  </div>
</div>

    </div>
  )
}

export default Register