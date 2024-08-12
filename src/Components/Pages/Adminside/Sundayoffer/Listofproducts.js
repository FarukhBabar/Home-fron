import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Listofproducts.css'; // Import a custom CSS file for additional styles

const Listofproducts = () => {
    const [user, setUsers] = useState([]);
    const setUsersData = async () => {
        let result = await fetch("http://srv577826.hstgr.cloud:8001/api/v1/data/user")
        result = await result.json()
        setUsers(result)
        console.log(result)
    }

    useEffect(() => {
        setUsersData()
    }, [])

    const deleteuser = async (id) => {
        try {
            let result = await fetch(`http://srv577826.hstgr.cloud:8001/api/v1/data/userid/${id}`, {
                method: "delete"
            })
            result = await result.json()
            if (result) {
                setUsersData()
            }
        } catch (error) {
            alert("Error in deleting data")
        }
    }

    return (
        <div className="container w-75 my-5">
            <h4 className="my-4 text-center text-warning display-4 fw-bold">List of Sunday Offer Products</h4>
            <Link to="/adminsunday">
                <button className="btn btn-success mb-3 w-100">+ Add New Product</button>
            </Link>
            <table className="table table-striped table-hover">
                <thead>
                    <tr className="bg-dark text-light text-center">
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Title</th>
                        <th scope="col">Price</th>
                        <th scope="col">Image</th>
                        <th scope="col">Operations</th>
                    </tr>
                </thead>
                <tbody>
                    {user.map((ele, ind) => (
                        <tr key={ele._id} className="text-center">
                            <th scope="row">{ind + 1}</th>
                            <td>{ele.name}</td>
                            <td dangerouslySetInnerHTML={{ __html: ele.title }}></td>
                            <td>{ele.price}</td>
                            <td>
                                {ele.image && (
                                    <img 
                                        src={`http://srv577826.hstgr.cloud:8001/${ele.image}`} 
                                        alt={ele.name} 
                                        className="img-fluid product-image"
                                    />
                                )}
                            </td>
                            <td>
                                <Link to={`/list/${ele._id}`} className="btn btn-success me-2">Edit</Link>
                                <button onClick={() => deleteuser(ele._id)} className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Listofproducts;
