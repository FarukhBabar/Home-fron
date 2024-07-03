// import React from 'react';
// import { Link, useLocation } from 'react-router-dom';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import axios from 'axios';
// import './Checkout.css';

// const Checkout = () => {
//   const location = useLocation();
//   const { cartItems, quantities } = location.state || { cartItems: [], quantities: {} };

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
//         const response = await axios.post('https://homeessential-fdca5e469865.herokuapp.com/api/v1/auth/order', {
//           ...values,
//           cartItems,
//           quantities,
//           totalAmount
//         });
//         alert('Order placed successfully');
//         console.log(response.data);
//       } catch (error) {
//         console.error('Error placing order:');
//         alert('There was an error placing your order.');
//       }
//     },
//   });

//   const calculateTotal = () => {
//     let total = 0;
//     cartItems.forEach(item => {
//       total += (quantities[item.id] || item.qty) * item.price;
//     });
//     return total.toFixed(2);
//   };

//   return (
//     <div className="container mt-3">
//       <div className="row">
//         <div className="col-xl-8">
//           <div className="card">
//             <div className="card-body">
//               <ol className="activity-checkout mb-0 px-4 mt-3">
//                 <li className="checkout-item">
//                   <div className="avatar checkout-icon p-1">
//                     <div className="avatar-title rounded-circle bg-primary">
//                       <i className="bx bxs-receipt text-white font-size-20"></i>
//                     </div>
//                   </div>
//                   <div className="feed-item-list">
//                     <div>
//                       <h5 className="font-size-16 mb-1">Billing Info</h5>
//                       <p className="text-muted text-truncate mb-4">Sed ut perspiciatis unde omnis iste</p>
//                       <div className="mb-3">
//                         <form onSubmit={formik.handleSubmit}>
//                           <div className="row">
//                             <div className="col-lg-4">
//                               <div className="mb-3">
//                                 <label className="form-label" htmlFor="billing-name">Name</label>
//                                 <input
//                                   type="text"
//                                   className="form-control"
//                                   id="billing-name"
//                                   name="name"
//                                   value={formik.values.name}
//                                   onChange={formik.handleChange}
//                                   onBlur={formik.handleBlur}
//                                   placeholder="Enter name"
//                                 />
//                                 {formik.touched.name && formik.errors.name ? (
//                                   <div className="error">{formik.errors.name}</div>
//                                 ) : null}
//                               </div>
//                             </div>
//                             <div className="col-lg-4">
//                               <div className="mb3">
//                                 <label className="form-label" htmlFor="billing-email-address">Email Address</label>
//                                 <input
//                                   type="email"
//                                   className="form-control"
//                                   id="billing-email-address"
//                                   name="email"
//                                   value={formik.values.email}
//                                   onChange={formik.handleChange}
//                                   onBlur={formik.handleBlur}
//                                   placeholder="Enter email"
//                                 />
//                                 {formik.touched.email && formik.errors.email ? (
//                                   <div className="error">{formik.errors.email}</div>
//                                 ) : null}
//                               </div>
//                             </div>
//                             <div className="col-lg-4">
//                               <div className="mb-3">
//                                 <label className="form-label" htmlFor="billing-phone">Phone</label>
//                                 <input
//                                   type="text"
//                                   className="form-control"
//                                   id="billing-phone"
//                                   name="phone"
//                                   value={formik.values.phone}
//                                   onChange={formik.handleChange}
//                                   onBlur={formik.handleBlur}
//                                   placeholder="Enter Phone no."
//                                 />
//                                 {formik.touched.phone && formik.errors.phone ? (
//                                   <div className="error">{formik.errors.phone}</div>
//                                 ) : null}
//                               </div>
//                             </div>
//                           </div>

//                           <div className="mb-3">
//                             <label className="form-label" htmlFor="billing-address">Address</label>
//                             <textarea
//                               className="form-control"
//                               id="billing-address"
//                               name="address"
//                               rows="3"
//                               value={formik.values.address}
//                               onChange={formik.handleChange}
//                               onBlur={formik.handleBlur}
//                               placeholder="Enter full address"
//                             ></textarea>
//                             {formik.touched.address && formik.errors.address ? (
//                               <div className="error">{formik.errors.address}</div>
//                             ) : null}
//                           </div>

//                           <div className="row">
//                             <div className="col-lg-4">
//                               <div className="mb-4 mb-lg-0">
//                                 <label className="form-label">Country</label>
//                                 <input type='text' className="form-control" placeholder='Enter Country' name='country' value={formik.values.country} onChange={formik.handleChange} onBlur={formik.handleBlur} />
//                                 {formik.touched.country && formik.errors.country ? (
//                                   <div className="error">{formik.errors.country}</div>
//                                 ) : null}
//                               </div>
//                             </div>

//                             <div className="col-lg-4">
//                               <div className="mb-4 mb-lg-0">
//                                 <label className="form-label" htmlFor="billing-city">City</label>
//                                 <input
//                                   type="text"
//                                   className="form-control"
//                                   id="billing-city"
//                                   name="city"
//                                   value={formik.values.city}
//                                   onChange={formik.handleChange}
//                                   onBlur={formik.handleBlur}
//                                   placeholder="Enter City"
//                                 />
//                                 {formik.touched.city && formik.errors.city ? (
//                                   <div className="error">{formik.errors.city}</div>
//                                 ) : null}
//                               </div>
//                             </div>

//                             <div className="col-lg-4">
//                               <div className="mb-0">
//                                 <label className="form-label" htmlFor="zip-code">Zip / Postal code</label>
//                                 <input
//                                   type="text"
//                                   className="form-control"
//                                   id="zip-code"
//                                   name="zip"
//                                   value={formik.values.zip}
//                                   onChange={formik.handleChange}
//                                   onBlur={formik.handleBlur}
//                                   placeholder="Enter Postal code"
//                                 />
//                                 {formik.touched.zip && formik.errors.zip ? (
//                                   <div className="error">{formik.errors.zip}</div>
//                                 ) : null}
//                               </div>
//                             </div>
//                           </div>

//                           <div className="text-end mt-4">
//                             <button type="submit" className="btn btn-primary">Place Order</button>
//                           </div>
//                         </form>
//                       </div>
//                     </div>
//                   </div>
//                 </li>

//                 <li className="checkout-item">
//                   <div className="avatar checkout-icon p-1">
//                     <div className="avatar-title rounded-circle bg-primary">
//                       <i className="bx bxs-wallet-alt text-white font-size-20"></i>
//                     </div>
//                   </div>
//                   <div className="feed-item-list">
//                     <div>
//                       <h5 className="font-size-16 mb-1">Payment Info</h5>
//                     </div>
//                     <div>
//                       <h5 className="font-size-14 mb-3">Payment method :</h5>
//                       <div className="row">
//                         <div className="col-lg-3 col-sm-6">
//                           <div>
//                             <label className="card-radio-label">
//                               <input type="radio" name="pay-method" id="pay-methodoption2" className="card-radio-input" />
//                               <span className="card-radio py-3 text-center text-truncate">
//                                 <i className="bx bxl-paypal d-block h2 mb-3"></i>
//                                 Paypal
//                               </span>
//                             </label>
//                           </div>
//                         </div>

//                         <div className="col-lg-3 col-sm-6">
//                           <div>
//                             <label className="card-radio-label">
//                               <input type="radio" name="pay-method" id="pay-methodoption3" className="card-radio-input" defaultChecked />
//                               <span className="card-radio py-3 text-center text-truncate">
//                                 <i className="bx bx-money d-block h2 mb-3"></i>
//                                 <span>Cash on Delivery</span>
//                               </span>
//                             </label>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </li>
//               </ol>
//             </div>
//           </div>

//           <div className="row my-4">
//             <div className="col">
//               <Link to="/" className="btn btn-link text-muted">
//                 <i className="mdi mdi-arrow-left me-1"></i> Continue Shopping
//               </Link>
//             </div>
//             <div className="col">
//               <div className="text-end mt-2 mt-sm-0">
//                 <a href="#" className="btn btn-success">
//                   <i className="mdi mdi-cart-outline me-1"></i> Proceed
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="col-xl-4">
//           <div className="card checkout-order-summary">
//             <div className="card-body">
//               <div className="p-3 bg-light mb-3">
//                 <h5 className="font-size-16 float-center mb-0">Order Summary <span className="float-end ms-2"></span></h5>
//               </div>
//               <div className="table-responsive">
//                 <table className="table table-centered mb-0 table-nowrap">
//                   <thead>
//                     <tr>
//                       <th className="border-top-0" style={{ width: '110px' }} scope="col">Product</th>
//                       <th className="border-top-0" scope="col">Product Desc</th>
//                       <th className="border-top-0" scope="col">Price</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {cartItems.map(item => (
//                       <tr key={item.id}>
//                         <th scope="row">
//                           <img
//                             src={`https://homeessential-fdca5e469865.herokuapp.com/${item.image.replace(/\\/g, '/')}`}
//                             alt={item.name}
//                             className="singleimg"
//                             style={{ width: '80px', height: '80px' }}
//                           />
//                         </th>
//                         <td>
//                           <h5 className="font-size-16 text-truncate">
//                             <a href="#" className="text-dark">{item.name}</a>
//                           </h5>
//                           <p className="text-muted mb-0">
//                             <i className="bx bxs-star text-warning"></i>
//                             <i className="bx bxs-star text-warning"></i>
//                             <i className="bx bxs-star text-warning"></i>
//                             <i className="bx bxs-star text-warning"></i>
//                             <i className="bx bxs-star-half text-warning"></i>
//                           </p>
//                           <p className="text-muted mb-0 mt-1">$ {item.price} x {quantities[item.id] || item.qty}</p>
//                         </td>
//                         <td>$ {(item.price * (quantities[item.id] || item.qty)).toFixed(2)}</td>
//                       </tr>
//                     ))}
//                     <tr>
//                       <td colSpan="2">
//                         <h5 className="font-size-14 m-0">Sub Total :</h5>
//                       </td>
//                       <td>$ {calculateTotal()}</td>
//                     </tr>

//                     <tr>
//                       <td colSpan="2">
//                         <h5 className="font-size-14 m-0">Shipping Charge :</h5>
//                       </td>
//                       <td>$ 25</td>
//                     </tr>
//                     <tr>
//                       <td colSpan="2">
//                         <h5 className="font-size-14 m-0">Estimated Tax :</h5>
//                       </td>
//                       <td>$ 18.20</td>
//                     </tr>
//                     <tr className="bg-light">
//                       <td colSpan="2">
//                         <h5 className="font-size-14 m-0">Total:</h5>
//                       </td>
//                       <td>$ {(parseFloat(calculateTotal()) + 25 + 18.20).toFixed(2)}</td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Checkout;

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './Checkout.css';

const stripePromise = loadStripe('pk_test_51PYLCyRrKUSfNnmkEnMx3BB1lHJc1V9qAiXFMjFsha5jbN8rSKOFd1YJFb6wj88zPxY5VpZKzz4Re6rubztuSeCh00O0C7585R'); // Replace with your Stripe publishable key

const CheckoutForm = ({ cartItems, quantities, calculateTotal }) => {
  const stripe = useStripe();
  const elements = useElements();
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
        // Create payment intent on the server
        const paymentIntentResponse = await axios.post('https://homeessential-fdca5e469865.herokuapp.com/api/payment_intents', {
          amount: totalAmount
        });
        const { clientSecret } = paymentIntentResponse.data;

        // Confirm the payment on the client
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
          // Save the order in the database
          const orderResponse = await axios.post('https://homeessential-fdca5e469865.herokuapp.com/api/v1/auth/order', {
            ...values,
            cartItems,
            quantities,
            totalAmount
          });
          alert('Order placed successfully');
          console.log(orderResponse.data);
        }
      } catch (error) {
        console.error('Error placing order:', error);
        alert('There was an error placing your order.');
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="row">
        <div className="col-lg-4">
          <div className="mb-3">
            <label className="form-label" htmlFor="billing-name">Name</label>
            <input
              type="text"
              className="form-control"
              id="billing-name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter name"
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="error">{formik.errors.name}</div>
            ) : null}
          </div>
        </div>
        <div className="col-lg-4">
          <div className="mb3">
            <label className="form-label" htmlFor="billing-email-address">Email Address</label>
            <input
              type="email"
              className="form-control"
              id="billing-email-address"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter email"
            />
            {formik.touched.email && formik.errors.email ? (
              <div className="error">{formik.errors.email}</div>
            ) : null}
          </div>
        </div>
        <div className="col-lg-4">
          <div className="mb-3">
            <label className="form-label" htmlFor="billing-phone">Phone</label>
            <input
              type="text"
              className="form-control"
              id="billing-phone"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter Phone no."
            />
            {formik.touched.phone && formik.errors.phone ? (
              <div className="error">{formik.errors.phone}</div>
            ) : null}
          </div>
        </div>
      </div>

      <div className="mb-3">
        <label className="form-label" htmlFor="billing-address">Address</label>
        <textarea
          className="form-control"
          id="billing-address"
          name="address"
          rows="3"
          value={formik.values.address}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          placeholder="Enter full address"
        ></textarea>
        {formik.touched.address && formik.errors.address ? (
          <div className="error">{formik.errors.address}</div>
        ) : null}
      </div>

      <div className="row">
        <div className="col-lg-4">
          <div className="mb-4 mb-lg-0">
            <label className="form-label">Country</label>
            <input type='text' className="form-control" placeholder='Enter Country' name='country' value={formik.values.country} onChange={formik.handleChange} onBlur={formik.handleBlur} />
            {formik.touched.country && formik.errors.country ? (
              <div className="error">{formik.errors.country}</div>
            ) : null}
          </div>
        </div>

        <div className="col-lg-4">
          <div className="mb-4 mb-lg-0">
            <label className="form-label" htmlFor="billing-city">City</label>
            <input
              type="text"
              className="form-control"
              id="billing-city"
              name="city"
              value={formik.values.city}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter City"
            />
            {formik.touched.city && formik.errors.city ? (
              <div className="error">{formik.errors.city}</div>
            ) : null}
          </div>
        </div>
        <div className="col-lg-4">
          <div className="mb-4 mb-lg-0">
            <label className="form-label" htmlFor="zip-code">Postal code</label>
            <input
              type="text"
              className="form-control"
              id="zip-code"
              name="zip"
              value={formik.values.zip}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Enter Postal code"
            />
            {formik.touched.zip && formik.errors.zip ? (
              <div className="error">{formik.errors.zip}</div>
            ) : null}
          </div>
        </div>
      </div>

      <div className="text-end mt-4">
        <button type="submit" className="btn btn-primary">Place Order</button>
      </div>

      <div className="my-4">
        <label className="form-label">Card Details</label>
        <CardElement className="form-control" />
      </div>
    </form>
  );
};

const Checkout = () => {
  const location = useLocation();
  const { cartItems, quantities } = location.state;

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * (quantities[item.id] || item.qty), 0).toFixed(2);
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
                  <i className="mdi mdi-arrow-left me-1"></i> Continue Shopping
                </Link>
              </div>
              <div className="col">
                <div className="text-end mt-2 mt-sm-0">
                  <a href="#" className="btn btn-success">
                    <i className="mdi mdi-cart-outline me-1"></i> Proceed
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-4">
            <div className="card checkout-order-summary">
              <div className="card-body">
                <div className="p-3 bg-light mb-3">
                  <h5 className="font-size-16 float-center mb-0">Order Summary <span className="float-end ms-2"></span></h5>
                </div>
                <div className="table-responsive">
                  <table className="table table-centered mb-0 table-nowrap">
                    <thead>
                      <tr>
                        <th className="border-top-0" style={{ width: '110px' }} scope="col">Product</th>
                        <th className="border-top-0" scope="col">Product Desc</th>
                        <th className="border-top-0" scope="col">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      {cartItems.map(item => (
                        <tr key={item.id}>
                          <th scope="row">
                            <img
                              src={`https://homeessential-fdca5e469865.herokuapp.com/${item.image.replace(/\\/g, '/')}`}
                              alt={item.name}
                              className="singleimg"
                              style={{ width: '80px', height: '80px' }}
                            />
                          </th>
                          <td>
                            <h5 className="font-size-16 text-truncate">
                              <a href="#" className="text-dark">{item.name}</a>
                            </h5>
                            <p className="text-muted mb-0">
                              <i className="bx bxs-star text-warning"></i>
                              <i className="bx bxs-star text-warning"></i>
                              <i className="bx bxs-star text-warning"></i>
                              <i className="bx bxs-star text-warning"></i>
                              <i className="bx bxs-star-half text-warning"></i>
                            </p>
                            <p className="text-muted mb-0 mt-1">$ {item.price} x {quantities[item.id] || item.qty}</p>
                          </td>
                          <td>$ {(item.price * (quantities[item.id] || item.qty)).toFixed(2)}</td>
                        </tr>
                      ))}
                      <tr>
                        <td colSpan="2">
                          <h5 className="font-size-14 m-0">Sub Total :</h5>
                        </td>
                        <td>$ {calculateTotal()}</td>
                      </tr>

                      <tr>
                        <td colSpan="2">
                          <h5 className="font-size-14 m-0">Shipping Charge :</h5>
                        </td>
                        <td>$ 25</td>
                      </tr>
                      <tr>
                        <td colSpan="2">
                          <h5 className="font-size-14 m-0">Estimated Tax :</h5>
                        </td>
                        <td>$ 18.20</td>
                      </tr>
                      <tr className="bg-light">
                        <td colSpan="2">
                          <h5 className="font-size-14 m-0">Total:</h5>
                        </td>
                        <td>$ {(parseFloat(calculateTotal()) + 25 + 18.20).toFixed(2)}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Elements>
  );
};

export default Checkout;

