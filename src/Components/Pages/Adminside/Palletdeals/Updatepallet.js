import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Update = () => {
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState('');
    const params = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://homeessential-fdca5e469865.herokuapp.com/api/v1/auth/palletsingle/${params.id}`);
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

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
        setImagePreview(URL.createObjectURL(file));
    };

    const updateProduct = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('name', name);
        formData.append('title', title);
        formData.append('price', price);
        if (image) {
            formData.append('image', image);
        }

        try {
            let result = await fetch(`https://homeessential-fdca5e469865.herokuapp.com/api/v1/auth/palletsingle/${params.id}`, {
                method: "PUT",
                body: formData
            });
            result = await result.json();
            if (result) {
                alert("Product updated successfully");
            } else {
                alert("Error in connection");
            }
        } catch (error) {
            console.error("Error updating product:", error);
            alert("Error in connection");
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4">Update Product</h2>
            <form onSubmit={updateProduct} className="shadow-lg p-4 bg-white rounded">
                <div className="mb-3">
                    <label className="form-label">Item Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name='name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder='Enter Item Name'
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        name='title'
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder='Enter Item Title'
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Price</label>
                    <input
                        type="text"
                        className="form-control"
                        name='price'
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder='Enter Item Price'
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Image</label>
                    {imagePreview && (
                        <img
                            src={imagePreview}
                            alt="Preview"
                            className="img-fluid mb-2"
                            style={{ maxHeight: '200px' }}
                        />
                    )}
                    <input
                        type="file"
                        className="form-control mb-2"
                        name='image'
                        onChange={handleImageChange}
                    />
                </div>
                <button type="submit" className="btn btn-success w-100">Update Product</button>
            </form>
        </div>
    );
}

export default Update;
