import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


const Contactuser = () => {

const[usersData,setUsersData] = useState([])


const getUsersList = async() =>{
        let result = await fetch("http://srv577826.hstgr.cloud:8002/api/v1/data/userlist")
        result = await result.json()       
        setUsersData(result)        
        console.log(result)
    }
console.log("usres", usersData)

    useEffect(()=>{
        getUsersList()
    },[])

    const deleteUser = async(id) =>{
        // console.log(id)
     let result = await fetch(`http://srv577826.hstgr.cloud:8002/api/v1/data/deluser/${id}`,{
        method: 'delete'
     })
     result = await result.json()
     
     if(result){
        getUsersList()
     }


    }

  return (
    <div className='container w-75'>
      <h4 className='my-4 text-center text-warning display-4 fw-bold'>List of Users</h4>

      <table class="table table-striped table-hover">
            <thead>
                <tr className='btn-dark text-light text-center'>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Email</th>
                    <th scope="col">Message</th>
                    <th scope="col">Operations</th>
                </tr>
            </thead>
            <tbody>
                {
                    usersData.map((ele,ind)=>{
                        return(
                            <>
                                <tr>
                                    <th scope="row">{ind+1}</th>
                                    <td>{ele.name}</td>
                                    <td>{ele.email}</td>
                                    <td>{ele.phone}</td>
                                    <td>{ele.message}</td>
                                    <td>
                                        {/* <Link to={`/users/${ele._id}`} className='btn btn-success'>Edit</Link> */}
                                        <a onClick={()=>deleteUser(ele._id)} className='btn btn-danger'>Delete</a>
                                    </td>
                                </tr>
                            </>
                        )
                    })
                }

            </tbody>
    </table>


    </div>
  )
}

export default Contactuser
