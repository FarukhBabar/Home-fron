import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import Accordion from 'react-bootstrap/Accordion';

export default function FAQPage() {
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/faqs") {
      document.title = "Frequently Asked Questions - Tyre Services in London";
      const ogTitleMeta = document.querySelector('meta[property="og:title"]');
      if (ogTitleMeta) {
        ogTitleMeta.setAttribute(
          "content",
          "Frequently Asked Questions - Tyre Services in London"
        );
      }
      const descriptionMeta = document.querySelector(
        'meta[name="description"]'
      );
      if (descriptionMeta) {
        descriptionMeta.setAttribute(
          "content",
          "Find answers to common queries about our tyre services in London. From fitting to repair, get all the information you need in our FAQs section."
        );
      }
    }
  }, [location]);

  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions - Tyre Services in London</title>
        <meta name="description" content="Find answers to common queries about our tyre services in London. From fitting to repair, get all the information you need in our FAQs section."/>
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Banner Section */}
      {/* <header className="headerStyle">
        <h1>Frequently Asked Questions</h1>
        <h5>
          <Link to="/" className="linkStyle">
            <i className="fa-solid fa-house"></i> Home{" "}
          </Link>{" "}
          | FAQ
        </h5>
      </header> */}

      {/* FAQ Section */}
      <section className="mt-5 mb-3">
        <div className="container" style={{ maxWidth: "1000px" }}>
          <h3 className="text-center mt-5">
            <strong className="text-success">Frequently Asked Questions</strong>
          </h3>

          {/* Accordion Component */}
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <strong className="text-success">
                  
                </strong>
              </Accordion.Header>
              <Accordion.Body>
               
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <strong className="text-success">
                
                </strong>
              </Accordion.Header>
              <Accordion.Body>
               
              </Accordion.Body>
            </Accordion.Item>
            {/* Add more Accordion.Item components as needed */}
          </Accordion>
          {/* End Accordion Component */}
        </div>
      </section>
    </>
  );
}
