
// import React from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import axios from 'axios';
// import { loadStripe } from '@stripe/stripe-js';
// import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
// import './Checkout.css';

// const stripePromise = loadStripe('pk_test_51PYLCyRrKUSfNnmkEnMx3BB1lHJc1V9qAiXFMjFsha5jbN8rSKOFd1YJFb6wj88zPxY5VpZKzz4Re6rubztuSeCh00O0C7585R'); // Replace with your Stripe publishable key

// const CheckoutForm = ({ cartItems, quantities, calculateTotal }) => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const navigate=useNavigate()
//   const formik = useFormik({
//     initialValues: {
//       name: '',
//       email: '',
//       phone: '',
//       address: '',
//       city: '',
//       zip: '',
//       country: '',
//     },
//     validationSchema: Yup.object({
//       name: Yup.string().required('Required'),
//       email: Yup.string().email('Invalid email address').required('Required'),
//       phone: Yup.string().required('Required'),
//       address: Yup.string().required('Required'),
//       city: Yup.string().required('Required'),
//       zip: Yup.string().required('Required'),
//       country: Yup.string().required('Required'),
//     }),
//     onSubmit: async values => {
//       const totalAmount = parseFloat(calculateTotal()) + 25 + 18.20;
//       try {
//         // Create payment intent on the server
//         const paymentIntentResponse = await axios.post('http://srv577826.hstgr.cloud:8002/api/payment_intents', {
//           amount: totalAmount
//         });
//         const { clientSecret } = paymentIntentResponse.data;

//         // Confirm the payment on the client
//         const cardElement = elements.getElement(CardElement);
//         const paymentResult = await stripe.confirmCardPayment(clientSecret, {
//           payment_method: {
//             card: cardElement,
//             billing_details: {
//               name: values.name,
//               email: values.email,
//               phone: values.phone,
//               address: {
//                 line1: values.address,
//                 city: values.city,
//                 postal_code: values.zip,
//                 country: values.country,
//               },
//             },
//           },
//         });

//         if (paymentResult.error) {
//           alert(`Payment failed: ${paymentResult.error.message}`);
//         } else if (paymentResult.paymentIntent.status === 'succeeded') {
//           // Save the order in the database
//           const orderResponse = await axios.post('http://srv577826.hstgr.cloud:8002/api/orders', {
//             ...values,
//             cartItems,
//             quantities,
//             totalAmount
//           });
//           alert('Order placed successfully');
//           navigate("/thank-you")
//           console.log(orderResponse.data);
//         }
//       } catch (error) {
//         console.error('Error placing order:', error);
//         alert('There was an error placing your order.');
//       }
//     },
//   });

//   return (
//     <form onSubmit={formik.handleSubmit}>
//       <div className="row">
//         <div className="col-lg-4">
//           <div className="mb-3">
//             <label className="form-label" htmlFor="billing-name">Name</label>
//             <input
//               type="text"
//               className="form-control"
//               id="billing-name"
//               name="name"
//               value={formik.values.name}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               placeholder="Enter name"
//             />
//             {formik.touched.name && formik.errors.name ? (
//               <div className="error">{formik.errors.name}</div>
//             ) : null}
//           </div>
//         </div>
//         <div className="col-lg-4">
//           <div className="mb3">
//             <label className="form-label" htmlFor="billing-email-address">Email Address</label>
//             <input
//               type="email"
//               className="form-control"
//               id="billing-email-address"
//               name="email"
//               value={formik.values.email}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               placeholder="Enter email"
//             />
//             {formik.touched.email && formik.errors.email ? (
//               <div className="error">{formik.errors.email}</div>
//             ) : null}
//           </div>
//         </div>
//         <div className="col-lg-4">
//           <div className="mb-3">
//             <label className="form-label" htmlFor="billing-phone">Phone</label>
//             <input
//               type="text"
//               className="form-control"
//               id="billing-phone"
//               name="phone"
//               value={formik.values.phone}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               placeholder="Enter Phone no."
//             />
//             {formik.touched.phone && formik.errors.phone ? (
//               <div className="error">{formik.errors.phone}</div>
//             ) : null}
//           </div>
//         </div>
//       </div>

//       <div className="mb-3">
//         <label className="form-label" htmlFor="billing-address">Address</label>
//         <textarea
//           className="form-control"
//           id="billing-address"
//           name="address"
//           rows="3"
//           value={formik.values.address}
//           onChange={formik.handleChange}
//           onBlur={formik.handleBlur}
//           placeholder="Enter full address"
//         ></textarea>
//         {formik.touched.address && formik.errors.address ? (
//           <div className="error">{formik.errors.address}</div>
//         ) : null}
//       </div>

//       <div className="row">
//         <div className="col-lg-4">
//           <div className="mb-4 mb-lg-0">
//             <label className="form-label">Country</label>
//             <input type='text' className="form-control" placeholder='Enter Country' name='country' value={formik.values.country} onChange={formik.handleChange} onBlur={formik.handleBlur} />
//             {formik.touched.country && formik.errors.country ? (
//               <div className="error">{formik.errors.country}</div>
//             ) : null}
//           </div>
//         </div>

//         <div className="col-lg-4">
//           <div className="mb-4 mb-lg-0">
//             <label className="form-label" htmlFor="billing-city">City</label>
//             <input
//               type="text"
//               className="form-control"
//               id="billing-city"
//               name="city"
//               value={formik.values.city}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               placeholder="Enter City"
//             />
//             {formik.touched.city && formik.errors.city ? (
//               <div className="error">{formik.errors.city}</div>
//             ) : null}
//           </div>
//         </div>
//         <div className="col-lg-4">
//           <div className="mb-4 mb-lg-0">
//             <label className="form-label" htmlFor="zip-code">Postal code</label>
//             <input
//               type="text"
//               className="form-control"
//               id="zip-code"
//               name="zip"
//               value={formik.values.zip}
//               onChange={formik.handleChange}
//               onBlur={formik.handleBlur}
//               placeholder="Enter Postal code"
//             />
//             {formik.touched.zip && formik.errors.zip ? (
//               <div className="error">{formik.errors.zip}</div>
//             ) : null}
//           </div>
//         </div>
//       </div>

//       <div className="text-end mt-4">
//         <button type="submit" className="btn btn-primary">Place Order</button>
//       </div>

//       <div className="my-4">
//         <label className="form-label">Card Details</label>
//         <CardElement className="form-control" />
//       </div>
//     </form>
//   );
// };

// const Checkout = () => {
//   const location = useLocation();
//   const { cartItems, quantities } = location.state;

//   const calculateTotal = () => {
//     return cartItems.reduce((total, item) => total + item.price * (quantities[item.id] || item.qty), 0).toFixed(2);
//   };

//   return (
//     <Elements stripe={stripePromise}>
//       <div className="checkout">
//         <div className="row">
//           <div className="col-xl-8">
//             <div className="card">
//               <div className="card-body">
//                 <h4 className="card-title">Billing Information</h4>
//                 <CheckoutForm cartItems={cartItems} quantities={quantities} calculateTotal={calculateTotal} />
//               </div>
//             </div>

//             <div className="row my-4">
//               <div className="col">
//                 <Link to="/" className="btn btn-link text-muted">
//                   <i className="mdi mdi-arrow-left me-1"></i> Continue Shopping
//                 </Link>
//               </div>
             
//             </div>
//           </div>
//           <div className="col-xl-4">
//             <div className="card checkout-order-summary">
//               <div className="card-body">
//                 <div className="p-3 bg-light mb-3">
//                   <h5 className="font-size-16 float-center mb-0">Order Summary <span className="float-end ms-2"></span></h5>
//                 </div>
//                 <div className="table-responsive">
//                   <table className="table table-centered mb-0 table-nowrap">
//                     <thead>
//                       <tr>
//                         <th className="border-top-0" style={{ width: '110px' }} scope="col">Product</th>
//                         <th className="border-top-0" scope="col">Product Desc</th>
//                         <th className="border-top-0" scope="col">Price</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {cartItems.map(item => (
//                         <tr key={item.id}>
//                           <th scope="row">
//                             <img
//                               src={`http://srv577826.hstgr.cloud:8002/${item.image.replace(/\\/g, '/')}`}
//                               alt={item.name}
//                               className="singleimg"
//                               style={{ width: '80px', height: '80px' }}
//                             />
//                           </th>
//                           <td>
//                             <h5 className="font-size-16 text-truncate">
//                               <a href="#" className="text-dark">{item.name}</a>
//                             </h5>
//                             <p className="text-muted mb-0">
//                               <i className="bx bxs-star text-warning"></i>
//                               <i className="bx bxs-star text-warning"></i>
//                               <i className="bx bxs-star text-warning"></i>
//                               <i className="bx bxs-star text-warning"></i>
//                               <i className="bx bxs-star-half text-warning"></i>
//                             </p>
//                             <p className="text-muted mb-0 mt-1">$ {item.price} x {quantities[item.id] || item.qty}</p>
//                           </td>
//                           <td>$ {(item.price * (quantities[item.id] || item.qty)).toFixed(2)}</td>
//                         </tr>
//                       ))}
//                       <tr>
//                         <td colSpan="2">
//                           <h5 className="font-size-14 m-0">Sub Total :</h5>
//                         </td>
//                         <td>$ {calculateTotal()}</td>
//                       </tr>

//                       <tr>
//                         <td colSpan="2">
//                           <h5 className="font-size-14 m-0">Shipping Charge :</h5>
//                         </td>
//                         <td>$ 25</td>
//                       </tr>
//                       <tr>
//                         <td colSpan="2">
//                           <h5 className="font-size-14 m-0">Estimated Tax :</h5>
//                         </td>
//                         <td>$ 18.20</td>
//                       </tr>
//                       <tr className="bg-light">
//                         <td colSpan="2">
//                           <h5 className="font-size-14 m-0">Total:</h5>
//                         </td>
//                         <td>$ {(parseFloat(calculateTotal()) + 25 + 18.20).toFixed(2)}</td>
//                       </tr>
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </Elements>
//   );
// };

// export default Checkout;

// src/components/Checkout.js
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import './Checkout.css';

const stripePromise = loadStripe('pk_test_51PYLCyRrKUSfNnmkEnMx3BB1lHJc1V9qAiXFMjFsha5jbN8rSKOFd1YJFb6wj88zPxY5VpZKzz4Re6rubztuSeCh00O0C7585R'); // Replace with your Stripe publishable key

const CheckoutForm = ({ cartItems, quantities, calculateTotal }) => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      address: '',
      city: '',
      zip: '',
      country: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      phone: Yup.string().required('Required'),
      address: Yup.string().required('Required'),
      city: Yup.string().required('Required'),
      zip: Yup.string().required('Required'),
      country: Yup.string().required('Required'),
    }),
    onSubmit: async values => {
      const totalAmount = parseFloat(calculateTotal()) + 25 + 18.20;
      try {
        const paymentIntentResponse = await axios.post('http://srv577826.hstgr.cloud:8002/api/payment_intents', {
          amount: totalAmount
        });
        const { clientSecret } = paymentIntentResponse.data;

        const cardElement = elements.getElement(CardElement);
        const paymentResult = await stripe.confirmCardPayment(clientSecret, {
          payment_method: {
            card: cardElement,
            billing_details: {
              name: values.name,
              email: values.email,
              phone: values.phone,
              address: {
                line1: values.address,
                city: values.city,
                postal_code: values.zip,
                country: values.country,
              },
            },
          },
        });

        if (paymentResult.error) {
          alert(`Payment failed: ${paymentResult.error.message}`);
        } else if (paymentResult.paymentIntent.status === 'succeeded') {
          const orderResponse = await axios.post('http://srv577826.hstgr.cloud:8002/api/orders', {
            ...values,
            cartItems,
            quantities,
            totalAmount
          });
          alert('Order placed successfully');
          navigate("/thank-you");
          console.log(orderResponse.data);
        }
      } catch (error) {
        console.error('Error placing order:', error);
        alert('There was an error placing your order.');
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="checkout-form">
      <div className="row">
        {/* Form Fields */}
        <div className="col-12">
          <div className="mb-3">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              {...formik.getFieldProps('name')}
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-danger">{formik.errors.name}</div>
            ) : null}
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              {...formik.getFieldProps('email')}
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="text-danger">{formik.errors.email}</div>
            ) : null}
          </div>
          <div className="mb-3">
            <label className="form-label">Phone</label>
            <input
              type="text"
              className="form-control"
              name="phone"
              {...formik.getFieldProps('phone')}
            />
            {formik.touched.phone && formik.errors.phone ? (
              <div className="text-danger">{formik.errors.phone}</div>
            ) : null}
          </div>
          <div className="mb-3">
            <label className="form-label">Address</label>
            <input
              type="text"
              className="form-control"
              name="address"
              {...formik.getFieldProps('address')}
            />
            {formik.touched.address && formik.errors.address ? (
              <div className="text-danger">{formik.errors.address}</div>
            ) : null}
          </div>
          <div className="mb-3">
            <label className="form-label">City</label>
            <input
              type="text"
              className="form-control"
              name="city"
              {...formik.getFieldProps('city')}
            />
            {formik.touched.city && formik.errors.city ? (
              <div className="text-danger">{formik.errors.city}</div>
            ) : null}
          </div>
          <div className="mb-3">
            <label className="form-label">ZIP Code</label>
            <input
              type="text"
              className="form-control"
              name="zip"
              {...formik.getFieldProps('zip')}
            />
            {formik.touched.zip && formik.errors.zip ? (
              <div className="text-danger">{formik.errors.zip}</div>
            ) : null}
          </div>
          <div className="mb-3">
            <label className="form-label">Country</label>
            <input
              type="text"
              className="form-control"
              name="country"
              {...formik.getFieldProps('country')}
            />
            {formik.touched.country && formik.errors.country ? (
              <div className="text-danger">{formik.errors.country}</div>
            ) : null}
          </div>
        </div>
      </div>
      <div className="my-4">
        <label className="form-label">Card Details</label>
        <CardElement className="form-control card-element" />
      </div>
      <div className="text-end mt-4">
        <button type="submit" className="btn btn-primary">Place Order</button>
      </div>
    </form>
  );
};

const Checkout = () => {
  const location = useLocation();
  const { cartItems, quantities } = location.state;

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + (parseFloat(item.price) || 0) * (quantities[item.id] || item.qty),
      0
    ).toFixed(2);
  };

  return (
    <Elements stripe={stripePromise}>
      <div className="checkout">
        <div className="row">
          <div className="col-xl-8">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Billing Information</h4>
                <CheckoutForm cartItems={cartItems} quantities={quantities} calculateTotal={calculateTotal} />
              </div>
            </div>
            <div className="row my-4">
              <div className="col">
                <Link to="/" className="btn btn-link text-muted">
                  <i className="mdi mdi-arrow-left"></i> Continue Shopping
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Order Summary</h4>
                <ul className="list-group list-group-flush">
                  {cartItems.map(item => (
                    <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                      <div>
                        <img
                          src={`http://srv577826.hstgr.cloud:8002/${item.image.replace(/\\/g, '/')}`}
                          alt={item.name}
                          className="singleimg"
                          style={{ width: '80px', height: '80px' }}
                        />
                        <span>{item.name}</span>
                      </div>
                      <span>${parseFloat(item.price).toFixed(2)}</span>
                    </li>
                  ))}
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <span>Shipping</span>
                    <span>$25.00</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center">
                    <span>Tax</span>
                    <span>$18.20</span>
                  </li>
                  <li className="list-group-item d-flex justify-content-between align-items-center fw-bold">
                    <span>Total</span>
                    <span>${(parseFloat(calculateTotal()) + 25 + 18.20).toFixed(2)}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Elements>
  );
};

export default Checkout;

