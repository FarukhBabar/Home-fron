// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { Spinner } from 'react-bootstrap';
// import { useCart } from '../Pages/Adminside/CartContext';
// import '../Pages/Adminside/admin.css';
// import Footer from '../Footer';

// const SingleProductPage = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [qty, setQty] = useState(1);
//   const { addToCart } = useCart();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const response = await axios.get(`http://srv577826.hstgr.cloud:8002/api/products/most-selling/${id}`);
//         setProduct(response.data);
//       } catch (error) {
//         console.error('Error fetching product details:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProduct();
//   }, [id]);

//   if (loading) return <Spinner animation="border" variant="primary" className="d-block mx-auto mt-5" />;

//   if (!product) return <p className="text-center mt-5">Product not found</p>;

//   const incQty = () => {
//     setQty(qty + 1);
//   };

//   const decQty = () => {
//     if (qty > 1) {
//       setQty(qty - 1);
//     }
//   };

//   const goBack = () => {
//     navigate("/Supersunday");
//   };

//   const handleAddToCart = () => {
//     const user = localStorage.getItem('user');
//     if (user) {
//       const userData = JSON.parse(user);
//       if (userData.role === 'user') {
//         addToCart({ ...product, qty });
//         setQty(1); // Reset quantity to 1 after adding to cart
//         navigate('/addtocart');
//       } else {
//         alert("Invalid user role");
//       }
//     } else {
//       alert("You need to login first");
//       navigate('/log');
//     }
//   };

//   const handleBuyNow = () => {
//     const user = localStorage.getItem('user');
//     if (user) {
//       const userData = JSON.parse(user);
//       if (userData.role === 'user') {
//         navigate('/addtocart');
//       } else {
//         alert("Invalid user role");
//       }
//     } else {
//       alert("You need to login first");
//       navigate('/log');
//     }
//   };

//   return (
//     <>
//       <div className="container">
//         <div className="card mainn">
//           <div onClick={goBack} className="btn bt2 btn-lg mb-2 mt-2">Go to Product Page</div>
//           <div className="card-body">
//             <div className="row">
//               <div className="col-lg-5 col-md-5 col-sm-6">
//                 <div className="white-box text-center mt-3">
//                   {product.image && (
//                     <img
//                       src={`http://srv577826.hstgr.cloud:8002/${product.image.replace(/\\/g, '/')}`}
//                       alt={product.name}
//                       className='singleimg img-fluid rounded'
//                     />
//                   )}
//                 </div>
//               </div>
//               <div className="col-lg-7 col-md-7 col-sm-6">
//                 <h3 className="card-t">{product.name}</h3>
//                 <h4 className="mt-5">${product.price}</h4>
//                 <div className="ms-1 mt-4 Quabtity">
//                   <div className="mt-1"><h5>Quantity:</h5></div>
//                   <button onClick={decQty} className="btn btn-dark inn btn-md ms-2 h-25">-</button>
//                   <h4 className="ms-2">{qty}</h4>
//                   <button onClick={incQty} className="btn btn-dark inn btn-md ms-2 h-25">+</button>
//                 </div>
//                 <h3 className="text-danger mt-4">Total Amount: ${product.price * qty}</h3>
//                 <button
//                   className="btn btn1 btn-rounded mr-1 buy"
//                   onClick={handleAddToCart}
//                 >
//                   Add To Cart
//                 </button>
//                 <button className="btn bt2 btn-rounded ms-3 buy" onClick={handleBuyNow}>Buy Now</button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="container mt-5">
//         <div className="row">
//           <div className="col-lg-12">
//             <div className="card">
//               <div className="card-body">
//                 <h3 className="fw-bold">Product Description</h3>
//                 <p className="card-text" dangerouslySetInnerHTML={{ __html: product.description }}></p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default SingleProductPage;
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Spinner } from 'react-bootstrap';
import { useCart } from '../Pages/Adminside/CartContext'; // Adjust the import path as needed
import '../Pages/Adminside/admin.css'; // Adjust the import path as needed
import Footer from '../Footer'; // Adjust the import path as needed

const SingleProductPage = () => {
  const { name } = useParams(); // Extract product name from the URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [qty, setQty] = useState(1);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const formattedName = name
          .toLowerCase()
          .replace(/\s+/g, '-')
          .replace(/[^\w\-]+/g, '')
          .replace(/\-\-+/g, '-')
          .replace(/^-+/, '')
          .replace(/-+$/, '');
          
        const response = await axios.get(`http://srv577826.hstgr.cloud:8002/api/products/most-selling/${formattedName}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [name]);

  if (loading) return <Spinner animation="border" variant="primary" className="d-block mx-auto mt-5" />;

  if (!product) return <p className="text-center mt-5">Product not found</p>;

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

  const handleBuyNow = () => {
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
                      src={`http://srv577826.hstgr.cloud:8002/${product.image.replace(/\\/g, '/')}`}
                      alt={product.name}
                      className='singleimg img-fluid rounded'
                    />
                  )}
                </div>
              </div>
              <div className="col-lg-7 col-md-7 col-sm-6">
                <h3 className="card-t">{product.name}</h3>
                <h4 className="mt-5">${product.price}</h4>
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
                <button className="btn bt2 btn-rounded ms-3 buy" onClick={handleBuyNow}>Buy Now</button>
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

export default SingleProductPage;

