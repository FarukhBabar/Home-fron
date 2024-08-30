import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const AllProducts = ({ baseUrl }) => {
    const location = useLocation();
    const { products } = location.state || { products: [] };
    const navigate = useNavigate();

   const handleImageClick = (product) => {
        const productName = product.name.replace(/\s+/g, '-').replace(/[^a-zA-Z0-9-]/g, '').toLowerCase();
        navigate(`/product/${productName}`);
    };

    return (
        <div className="row">
            {products.map((product) => (
                <div className="col-6 col-sm-2 col-md-4 col-lg-3  mt-4" key={product._id}>
                    <div className="card11212">
                        <h5 className="image">
                            <div onClick={() => handleImageClick(product)} className="btn">
                                {product.image && (
                                    <img
                                       src={`https://api.homeessentialshive.co.uk/${product.image.replace(/\\/g, '/')}`}
                                        alt={product.name}
                                        className="img-fluid border"
                                        style={{ height: '55%', width: '90%' }}
                                    />
                                )}
                            </div>
                        </h5>
                        <h5 className="ms-2">{product.name.slice(0, 25)}</h5>
                        <p dangerouslySetInnerHTML={{ __html: product.title.slice(0, 25) }}></p>
                        <center>
                            <button className="btn btn-success mb-2 w-100">Shop now</button>
                        </center>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AllProducts;
