import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useCart } from './Adminside/CartContext';
import './Adminside/admin.css';
import Footer from '../Footer';

const AllPRoductspage = () => {
  const { productName } = useParams(); // Get the product name from the URL
  const [product, setProduct] = useState(null);
  const [qty, setQty] = useState(1);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the product details based on the product name (slug)
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://api.homeessentialshive.co.uk/api/products/${productName}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product:', error);
        // Handle the error, e.g., navigate to a "Product Not Found" page
      }
    };

    fetchProduct();
  }, [productName]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const incQty = () => {
    setQty(qty + 1);
  };

  const decQty = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };

  const goBack = () => {
    navigate("/Supersunday");
  };

  const handleAddToCart = () => {
    const user = localStorage.getItem('user');
    if (user) {
      const userData = JSON.parse(user);
      if (userData.role === 'user') {
        addToCart({ ...product, qty });
        setQty(1); // Reset quantity to 1 after adding to cart
        navigate('/addtocart');
      } else {
        alert("Invalid user role");
      }
    } else {
      alert("You need to login first");
      navigate('/log');
    }
  };

  const buyNow = () => {
    const user = localStorage.getItem('user');
    if (user) {
      const userData = JSON.parse(user);
      if (userData.role === 'user') {
        navigate('/addtocart');
      } else {
        alert("Invalid user role");
      }
    } else {
      alert("You need to login first");
      navigate('/log');
    }
  };

  return (
    <>
      <div className="container">
        <div className="card mainn">
          <div onClick={goBack} className="btn bt2 btn-lg mb-2 mt-2">Go to Product Page</div>
          <div className="card-body">
            <div className="row">
              <div className="col-lg-5 col-md-5 col-sm-6">
                <div className="white-box text-center mt-3">
                  {product.image && (
                    <img
                      src={`https://api.homeessentialshive.co.uk/${product.image.replace(/\\/g, '/')}`}
                      alt={product.name}
                      className='singleimg'
                    />
                  )}
                </div>
              </div>
              <div className="col-lg-7 col-md-7 col-sm-6">
                <h3 className="card-t">{product.name}</h3>
                <h2 className="mt-5">${product.price}</h2>
                <div className="ms-1 mt-4 Quabtity">
                  <div className="mt-1"><h5>Quantity:</h5></div>
                  <button onClick={decQty} className="btn btn-dark inn btn-md ms-2 h-25">-</button>
                  <h4 className="ms-2">{qty}</h4>
                  <button onClick={incQty} className="btn btn-dark inn btn-md ms-2 h-25">+</button>
                </div>
                <h3 className="text-danger mt-4">Total Amount: ${product.price * qty}</h3>
                <button
                  className="btn btn1 btn-rounded mr-1 buy"
                  onClick={handleAddToCart}
                >
                  Add To Cart
                </button>
                <button className="btn bt2 btn-rounded ms-3 buy" onClick={buyNow}>Buy Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mt-5">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <h3 className="fw-bold">Product Description</h3>
                <p className="card-text" dangerouslySetInnerHTML={{ __html: product.title }}></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default AllPRoductspage;
