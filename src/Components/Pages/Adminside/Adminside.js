

import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./admin.css"


const Listofproducts = () => {
    const [user, setUsers] = useState([]);
    const setUsersData = async() =>{
      let result = await fetch("https://homeessential-fdca5e469865.herokuapp.com/api/v1/data/user")
      result = await result.json()       
      setUsers(result)        
      console.log(result)
  }


    useEffect(()=>{
      setUsersData()
  },[])
    const deleteuser = async(id)=>{
        // console.log(id)
        try {
            let result= await fetch(`https://homeessential-fdca5e469865.herokuapp.com/api/v1/data/userid/${id}`,{
          method:"delete"
       
        })
        result= await result.json()
        if(result){
          setUsersData()
        }
        
       
    
        } catch (error) {
            alert("Error in deleting data")
        }
        
        
      }
    
  return (
    <>
       {/* <div>   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/adminsunday">SundayOffer</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/listpal">Palletdeals</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/listarr">New Arrivals</Link></li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Department
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link class="dropdown-item" to="#">Food&Drinks</Link></li>
            <li><Link class="dropdown-item" to="#">Action</Link></li>
            <li><Link class="dropdown-item" to="#">Action</Link></li>
            <li><Link class="dropdown-item" to="#">Action</Link></li>
            <li><Link class="dropdown-item" to="#">Action</Link></li>
            <li><Link class="dropdown-item" to="#">Action</Link></li>
            <li><Link class="dropdown-item" to="#">Action</Link></li>
            <li><Link class="dropdown-item" to="#">Action</Link></li>
            <li><Link class="dropdown-item" to="#">Action</Link></li>
            <li><Link class="dropdown-item" to="#">Action</Link></li>
            <li><Link class="dropdown-item" to="#">Action</Link></li>
            <li><Link class="dropdown-item" to="#">Action</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
   </nav>



    </div> */}
  
  

    
   
    <div>
     
     <div className='container w-75'>
           <h4 className='my-4 text-center text-warning display-4 fw-bold'>List of SundayOffer Products</h4>
           <Link to="/adminsunday" ><button className='btn btn-success mb-2 w-10'>+ Add New Product </button></Link> 
           <table class="table table-striped table-hover">
                 <thead>
                     <tr className='btn-dark text-light text-center'>
                         <th scope="col">#</th>
                         <th scope="col">Name</th>
                         <th scope="col">Title</th>
                         <th scope="col">Price</th>
                         <th scope="col">Image</th>
                         <th scope="col">Operations</th>
                     </tr>
                 </thead>
                 <tbody>
                     {
                         user.map((ele,ind)=>{
                             return(
                                 <>
                                     <tr>
                                         <th scope="row">{ind+1}</th>
                                         <td>{ele.name}</td>
                                         <td>{ele.title}</td>
                                         <td>{ele.price}</td>
                                         <td> {ele.image && (
                              <img 
                            src={`https://homeessential-fdca5e469865.herokuapp.com/${ele.image}`} 
                                     alt={ele.name} 
                                         className='img-fluid' 
                                    style={{ height: '70px', width: '100px' }}
                                          />
                               )}</td>
                                         <td>
                                             <Link to={`/list/${ele._id}`} className='btn btn-success'>Edit</Link>
                                             <a onClick={()=>deleteuser(ele._id)} className='btn btn-danger'>Delete</a>
                                         </td>
                                     </tr>
                                 </>
                             )
                         })
                     }
     
                 </tbody>
         </table>
     
     
         </div>
     
     
         </div>
         
         
</>
  )
}

export default Listofproducts