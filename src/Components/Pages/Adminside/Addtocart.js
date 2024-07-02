
// import React, { useState } from 'react';
// import { useCart } from './CartContext';

// const Addtocart = () => {
//   const { cartItems, clearCart } = useCart();
//   const [quantities, setQuantities] = useState({}); 

//   const handleClearCart = () => {
//     clearCart();
//   };

  
//   const updateQuantity = (itemId, newQuantity) => {
//     setQuantities(prevQuantities => ({
//       ...prevQuantities,
//       [itemId]: newQuantity
//     }));
//   };

//   const totalItems = cartItems.reduce((total, item) => total + (quantities[item.id] || item.qty), 0);

//   const totalAmount = cartItems.reduce((total, item) => total + ((quantities[item.id] || item.qty) * item.price), 0);

//   const incQty = (itemId) => {
//     updateQuantity(itemId, (quantities[itemId] || 1) + 1);
//   };

//   const decQty = (itemId) => {
//     if (quantities[itemId] && quantities[itemId] >= 2) {
//       updateQuantity(itemId, quantities[itemId] - 1);
//     }
//   };

//   return (
//     <div>
//       <h2>Cart Items</h2>
//       <div className=''>
//         {cartItems.map((item) => (
//           <div className='d-flex ' key={item.id}>
//             <img src={item.image} alt={item.name} className='ms-2 rounded-circle' style={{ width: '80px', height: '80px' }} />
//             <div>{item.name}</div>
//             <div className='ms-5'><h2>Price: ${item.price}</h2></div>
//             {/* <div>Quantity: {quantities[item.id] || item.qty}</div> */}
//             <div className='ms-5 d-flex'>
//               <div className='mt-1 ms-5'> <h5>Quantity:</h5></div>
//               <button onClick={() => decQty(item.id)} className='btn btn-dark inn btn-md ms-2 '>-</button>
//               <h4 className='ms-2'>{quantities[item.id] || item.qty}</h4>
//               <button onClick={() => incQty(item.id)} className='btn btn-dark inn btn-md ms-2 '>+</button>
//               <br /><br />
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className='mt-1 ms-5'><h3>Total Items: {totalItems}</h3></div>
//       <div className='mt-1 ms-5'> <h3>Total Amount: ${totalAmount.toFixed(2)}</h3></div>
//       <button  className='btn btn-dark in btn-md ms-2 ' onClick={handleClearCart}>Clear Cart</button>
//     </div>
//   );
// };

// export default Addtocart;

// import React, { useState } from 'react';
// import { useCart } from './CartContext';
// import { Link } from 'react-router-dom';

// const Addtocart = () => {
//   const { cartItems, clearCart } = useCart();
//   const [quantities, setQuantities] = useState({});

//   const handleClearCart = () => {
//     clearCart();
//   };

//   const updateQuantity = (itemId, newQuantity) => {
//     setQuantities(prevQuantities => ({
//       ...prevQuantities,
//       [itemId]: newQuantity
//     }));
//   };

//   const totalItems = cartItems.reduce((total, item) => total + (quantities[item.id] || item.qty), 0);

//   const totalAmount = cartItems.reduce((total, item) => total + ((quantities[item.id] || item.qty) * item.price), 0);

//   const incQty = (itemId) => {
//     updateQuantity(itemId, (quantities[itemId] || 1) + 1);
//   };

//   const decQty = (itemId) => {
//     if (quantities[itemId] && quantities[itemId] >= 2) {
//       updateQuantity(itemId, quantities[itemId] - 1);
//     }
//   };

//   return (
//     <div>
//       <h2>Cart Items</h2>
//       <div className=''>
//         {cartItems.map((item) => {
//         //   const imageUrl = item.image.startsWith('http') ? item.image : `https://your-backend-url.com/${item.image}`;

//           return (
//             <div className='ADDTOCART' key={item.id}>
//               {/* <img
//                 src={imageUrl}
//                 alt={item.name}
//                 className='ms-2 rounded-circle'
//                 style={{ width: '80px', height: '80px' }}
//                 onError={(e) => { e.target.onerror = null; e.target.src = 'fallback-image-url.jpg'; }}
//               /> */}
//                <img
//                     src={`https://homeessential-fdca5e469865.herokuapp.com/${item.image.replace(/\\/g, '/')}`}
//                     alt={item.name}
//                     className='singleimg'
//                     style={{ width: '80px', height: '80px' }}
//                   />
//               <div>{item.name}</div>
//               <div className='ms-5'><h2>Price: ${item.price}</h2></div>
//               <div className='ms-5 d-flex'>
//                 <div className='mt-1 ms-5'> <h5>Quantity:</h5></div>
//                 <button onClick={() => decQty(item.id)} className='btn btn-dark inn btn-md ms-2 '>-</button>
//                 <h4 className='ms-2'>{quantities[item.id] || item.qty}</h4>
//                 <button onClick={() => incQty(item.id)} className='btn btn-dark inn btn-md ms-2 '>+</button>
//                 <br /><br />
//               </div>
//             </div>
//           );
//         })}
//       </div>
//       <div className='mt-1 ms-5'><h3>Total Items: {totalItems}</h3></div>
//       <div className='mt-1 ms-5'> <h3>Total Amount: ${totalAmount.toFixed(2)}</h3></div>
//       <button className='btn btn-dark in btn-md ms-2 ' onClick={handleClearCart}>Clear Cart</button>
//      <Link to='/checkout'><button className='btn btn-dark in btn-md ms-2 ' >Check Out</button></Link> 
//     </div>
//   );
// };

// export default Addtocart;
import React, { useState } from 'react';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';

const Addtocart = () => {
  const { cartItems, clearCart } = useCart();
  const [quantities, setQuantities] = useState({});
  const navigate = useNavigate();

  const handleClearCart = () => {
    clearCart();
  };

  const updateQuantity = (itemId, newQuantity) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [itemId]: newQuantity
    }));
  };

  const totalItems = cartItems.reduce((total, item) => total + (quantities[item.id] || item.qty), 0);

  const totalAmount = cartItems.reduce((total, item) => total + ((quantities[item.id] || item.qty) * item.price), 0);

  const incQty = (itemId) => {
    updateQuantity(itemId, (quantities[itemId] || 1) + 1);
  };

  const decQty = (itemId) => {
    if (quantities[itemId] && quantities[itemId] >= 2) {
      updateQuantity(itemId, quantities[itemId] - 1);
    }
  };

  const handleCheckout = () => {
    navigate('/checkout', { state: { cartItems, quantities } });
  };

  return (
    <div className=''>
      <h2>Cart Items</h2>
      <div className=''>
        {cartItems.map((item) => (
          <div className='ADDTOCART' key={item.id}>
            <img
              src={`https://homeessential-fdca5e469865.herokuapp.com/${item.image.replace(/\\/g, '/')}`}
              alt={item.name}
              className='singleimg mt-2'
              style={{ width: '80px', height: '80px' }}
            />
            <div className='mt-3 ms-2'>{item.name}</div>
            <div className='ms-5 mt-2'><h2>Price: ${item.price}</h2></div>
            <div className='ms-5 mt-2 d-flex'>
              <div className='mt-2 ms-5'> <h5>Quantity:</h5></div>
              <button onClick={() => decQty(item.id)} className='btn btn-dark inn btn-md ms-2 '>-</button>
              <h4 className='ms-2 mt-2'>{quantities[item.id] || item.qty}</h4>
              <button onClick={() => incQty(item.id)} className='btn btn-dark inn btn-md ms-2 '>+</button>
              <br /><br />
            </div>
          </div>
        ))}
      </div>
      <div className='mt-1 ms-5'><h3>Total Items: {totalItems}</h3></div>
      <div className='mt-1 ms-5'> <h3>Total Amount: ${totalAmount.toFixed(2)}</h3></div>
      <button className='btn btn-dark in btn-md ms-2 ' onClick={handleClearCart}>Clear Cart</button>
      <button className='btn btn-dark in btn-md ms-2' onClick={handleCheckout}>Check Out</button>
    </div>
  );
};

export default Addtocart;
