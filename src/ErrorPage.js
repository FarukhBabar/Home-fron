// src/components/ErrorPage.js

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
// import './ErrorPage.css'; // Make sure to create this CSS file

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate('/');
  };

  return (
    <Container className="error-page text-center">
      <Row className="justify-content-center align-items-center">
        <Col md={6}>
          <h1 className="display-1">404</h1>
          <p className="lead">Oops! The page you're looking for doesn't exist.</p>
          <img src="/Images/errorpageimg.jpeg" alt="Error" className="img-fluid my-4" />
          <Button variant="primary" onClick={handleGoBack}>
            Go Back Home
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ErrorPage;
