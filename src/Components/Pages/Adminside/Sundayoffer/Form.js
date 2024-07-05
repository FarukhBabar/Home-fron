import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import "../admin.css"
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import FroalaEditorComponent from 'react-froala-wysiwyg';

const Form = () => {
  const [Image , setImage]=useState(null)
  const [name , setname]=useState()
  const [title , setTitle] =useState()
  const [price , setprice] = useState()
  const [ImageError , setImageError]=useState()
  const [nameError, setNameError] = useState(false);
    const [titleError, settitlteError] = useState(false);
    const [priceError, setPriceError] = useState(false);
    const nevigate = useNavigate();
    
  const handleDescriptionChange = (model) => {
    setTitle(model);
  };
    const handlesubmit = async(e)=>{

      e.preventDefault();

      let formdata = new FormData()

      formdata.append('name', name)

      formdata.append('title', title)

      formdata.append('price', price)

      formdata.append('image', Image)

      if(!name || !title || !price){

      if (!name) setNameError(true);

      if (!title) settitlteError(true);

      if (!price) setPriceError(true);

      if(!Image) setImageError(true)
      
      return;
    }
    try {
      let result = await fetch("https://homeessential-fdca5e469865.herokuapp.com/api/v1/auth/freedel" , {
        method: "post",
        body :formdata
      
      })
      result = await result.json();
      
      if(result){
        nevigate("/adminsunday")
       alert("Product added sucessfully")
        }
        else{
          alert("Error in connection")
        }
    } catch (error) {
      console.log("ERROR IN DB")
    }
    
    }
  return (
    <div>
     
      <Link to="/list" className="btn btn-success mss" >Product-list</Link>
      <form className='marr '>
  <div className="mb-3 maa ">
    <label  className="form-label mt-2">ITem Name</label>
    <input type="text" className={`form-control ${nameError ? 'is-invalid' : ''}`}  name='name' value={name} onChange={(e)=>setname(e.target.value)}  placeholder='Enter your Item name' />
    {nameError && <div className="invalid-feedback">Please enter your name</div>}
    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  <div className="mb-3 maa">
          <label className="form-label">Description</label>
          <FroalaEditorComponent
            tag='textarea'
            model={title}
            onModelChange={handleDescriptionChange}
          />
          {titleError && <div className="invalid-feedback">Please enter your title</div>}
        </div>
  <div className="mb-3 maa ">
    <label  className="form-label">Price</label>
    <input type="text" className={`form-control form-control-lg ${priceError ? 'is-invalid' : ''}`} name='price' value={price} onChange={(e)=>setprice(e.target.value)} placeholder='Enter your Item title' />
    {priceError && <div className="invalid-feedback">Please enter your price</div>}
  </div>
  <div className="mb-3 maa ">
    <label  className="form-label">Image</label>
    <input type="file" className={`form-control form-control-lg ${ImageError ? 'is-invalid' : ''}`} name='Image'  onChange={(e)=>setImage(e.target.files[0])} placeholder='Enter your Item title' />
    {ImageError && <div className="invalid-feedback">Please enter your price</div>}
  </div>
  
  <button type="submit" className="btn btn-success mss" onClick={handlesubmit}>Add Product</button>
</form>

     
    </div>
  )
}

export default Form