import React, { useState } from 'react'
import Footer from '../Footer'
import { useNavigate } from 'react-router-dom'

const Contactus = () => {
  const[name, setName] = useState('')
    const[email, setEmail] = useState('')
    const[phone, setAddress] = useState('')
    const[message, setMessage] = useState('')

    const navigate= useNavigate()
    const registerUser = async(e) =>{
      e.preventDefault();
      
      let result = await fetch("http://srv577826.hstgr.cloud:8002/api/v1/auth/contact",{
          method: 'post',
          body: JSON.stringify({name,  phone,email, message}),
          headers:{
              "Content-Type": "application/json"
          }
      })
      result = await result.json();
      if(result){
          navigate('/')
          alert("Message Send Successfully ")
      }
      console.log(result)

      // console.log({name, email, password, address, phone})
  }
  return (
    <div>
        <div className="container">
  <div className="row  mt-3">
    <div className="col-lg-12 col-md-12 col-sm-12 ">
      <center> <u><h2 className="contact">Contact US</h2></u></center>
    </div>
  </div>
  <div className="row">
    <div className="col-lg-12 col-md-12 col-sm-12">
      <div>
        <p>  <b>ADDRESS:</b> 29 Mollison Avenue, Brimsdown, Enfield, EN3 7NL</p>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col-lg-12 col-md-12 col-sm-12">
      <div>
        <p>  <b> EMAIL : </b>enquiries@efghousewares.co.uk</p>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col-lg-12 col-md-12 col-sm-12">
      <div>
        <p>  <b> TELEPHONE:</b> 0208 805 5756</p>
      </div>
    </div>
  </div>
  <div className="row mt-3">
    <div className="col-lg-12 col-md-12 col-sm-12">
      <div>
        <p> Please Complete The Form Below</p>
        <hr />
      </div>
    </div>
  </div>
  <div className="row contactform">
    <div className="col-md-8">
      <form action="" method="">
        <input className="form-control" onChange={(e)=>setName(e.target.value)} type="text" value={name} name="name" placeholder="Name..." /><br />
        <input className="form-control" onChange={(e)=>setEmail(e.target.value)} value={email}  name="phone" placeholder="Phone..." /><br />
        <input className="form-control" onChange={(e)=>setAddress(e.target.value)} value={phone} name="email" placeholder="E-mail..." /><br />
        <textarea className="form-control" onChange={(e)=>setMessage(e.target.value)} value={message} name="text" placeholder="How can we help you?" style={{height: 150}} defaultValue={""} /><br />
        <input className="butto" onClick={registerUser} type="submit" /><br /><br />
      </form>
    </div>
  </div>
</div>
<Footer/>
    </div>
  )
}

export default Contactus