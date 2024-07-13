import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "../admin.css";

const Updatesmokingess = () => {
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState(null);
    let formdata = new FormData();
    let params = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://homeessential-fdca5e469865.herokuapp.com/api/v1/auth/smokinsingle/${params.id}`);
                const result = await response.json();
                setName(result.name);
                setTitle(result.title);
                setPrice(result.price);
                setImage(result.image);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        
        fetchData();
    }, [params.id]);

    const updateUser = async (e) => {
        e.preventDefault();

        formdata.append('name', name);
        formdata.append('price', price);
        formdata.append('title', title);
        formdata.append('image', image);

        try {
            let result = await fetch(`https://homeessential-fdca5e469865.herokuapp.com/api/v1/auth/smokinsingle/${params.id}`, {
                method: "put",
                body: formdata
            });
            result = await result.json();
            if (result) {
                alert("Product updated successfully");
            } else {
                alert("Error in connection");
            }
        } catch (error) {
            console.error("Error updating data:", error);
        }
    };

    return (
        <div className="container mt-5">
            <form className="p-4 shadow-lg rounded bg-white" onSubmit={updateUser}>
                <h2 className="mb-4 text-center">Update Smoking Essentials Product</h2>
                <div className="mb-3">
                    <label className="form-label">Item Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter your Item name"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter your Item title"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Price</label>
                    <input
                        type="text"
                        className="form-control"
                        name="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder="Enter your Item price"
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Image</label>
                    <input
                        type="text"
                        className="form-control"
                        name="Image"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        placeholder="Enter your Item image path or name"
                    />
                    <input
                        type="file"
                        className="form-control mt-2"
                        name="Image"
                        onChange={(e) => setImage(e.target.files[0])}
                    />
                </div>
                <button type="submit" className="btn btn-success w-100">Update Product</button>
            </form>
        </div>
    );
}

export default Updatesmokingess;
