// src/components/ThankYouPage.js
// src/components/ThankYouPage.js

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import 'animate.css';
 // Make sure to create this CSS file

const ThankYouPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  const handleShopMore = () => {
    navigate('/');
  };

  return (
    <Container className="thank-you-page text-center">
      <Row className="justify-content-center align-items-center">
        <Col md={8} className="content animate__animated animate__fadeIn">
          <h1 className="display-3 animate__animated animate__fadeInDown">Thank You!</h1>
          <p className="lead animate__animated animate__fadeInUp">Your order has been placed successfully.</p>
          <img src="/Images/Thankyou.png" alt="Thank You" className="img-fluid  animate__animated animate__zoomIn thankyou" />
          <p className="lead animate__animated animate__fadeInUp">We appreciate your business. You will receive an order confirmation email shortly.</p>
          <div className="buttons animate__animated animate__fadeInUp">
            <Button variant="light" onClick={handleGoHome} className="m-2">
              Go Back Home
            </Button>
            <Button variant="primary" onClick={handleShopMore} className="m-2">
              Continue Shopping
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ThankYouPage;

