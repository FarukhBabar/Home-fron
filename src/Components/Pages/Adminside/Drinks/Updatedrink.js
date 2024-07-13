import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Updatedrink = () => {
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState(null);
    const [imagePreview, setImagePreview] = useState('');
    const params = useParams();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://homeessential-fdca5e469865.herokuapp.com/api/v1/auth/drisingle/${params.id}`);
                const result = await response.json();
                setName(result.name);
                setTitle(result.title);
                setPrice(result.price);
                setImage(result.image);
                setImagePreview(result.image); // Set initial image preview
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [params.id]);

    const handleImageChange = (e) => {
        const selectedImage = e.target.files[0];
        setImage(selectedImage);

        // Preview image
        const reader = new FileReader();
        reader.onloadend = () => {
            setImagePreview(reader.result);
        };
        reader.readAsDataURL(selectedImage);
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
            let result = await fetch(`https://homeessential-fdca5e469865.herokuapp.com/api/v1/auth/drisingle/${params.id}`, {
                method: "PUT",
                body: formData
            });
            result = await result.json();
            if (result) {
                alert("Product updated successfully");
            } else {
                alert("Error updating product");
            }
        } catch (error) {
            console.error("Error in connection:", error);
            alert("Error updating product");
        }
    };

    return (
        <div className="container mt-5">
            <form className="marr">
                <div className="mb-3 maa">
                    <label className="form-label mt-2">Item Name</label>
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Enter Item Name"
                    />
                </div>
                <div className="mb-3 maa">
                    <label className="form-label">Title</label>
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        name="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Enter Item Title"
                    />
                </div>
                <div className="mb-3 maa">
                    <label className="form-label">Price</label>
                    <input
                        type="text"
                        className="form-control form-control-lg"
                        name="price"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        placeholder="Enter Item Price"
                    />
                </div>
                <div className="mb-3 maa">
                    <label className="form-label">Image</label>
                    {imagePreview && (
                        <img src={imagePreview} alt="Preview" className="img-fluid mb-2" style={{ maxHeight: "200px" }} />
                    )}
                    <input
                        type="file"
                        className="form-control form-control-lg mb-2"
                        name="image"
                        onChange={handleImageChange}
                    />
                </div>
                <button type="submit" className="btn btn-success mss" onClick={updateProduct}>Update Product</button>
            </form>
        </div>
    );
}

export default Updatedrink;
