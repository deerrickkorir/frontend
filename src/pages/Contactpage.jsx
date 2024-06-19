import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const ContactPage = () => {
  return (
    <Container fluid className="contact-page">
      <div style={{
        backgroundImage: `url("https://i.pinimg.com/564x/e9/53/51/e95351bbdaf31d1de16e5e304a3a87ad.jpg")`,
        backgroundSize: "cover",
        minHeight: "100vh", // Ensures the background covers the entire viewport height
      }}>
        <Row className="align-items-center justify-content-center">
          <Col xs={12} sm={8} md={6} lg={4} xl={3}>
            <div className="contact-info p-4" style={{
              backgroundColor: "rgba(255, 255, 255, 0.7)", // White background with transparency
              borderRadius: "10px", // Rounded corners
            }}>
              <h1 className="text-center mb-4">How to Find Us</h1>
              <h2 className="text-center mb-3">CarCare Conne</h2>
              <h3 className="text-center mb-3">Kenya/Nairobi Ngong road Junction mall</h3>
              <p className="text-center mb-4">
                Phone: (254) 723751325 <br />
                Email: <a href="mailto:derrickroz4227@gmail.com">derrickroz4227@gmail.com</a>
              </p>
              <h4 className="text-center mb-3">SHIPPING</h4>
              <p className="text-center mb-4">We offer SHIPPING for all our customers.</p>
              <h4 className="text-center mb-3">Hours of Operation:</h4>
              <p className="text-center mb-0">
                Monday - Friday: 9:00 AM - 7:00 PM <br />
                Saturday: 10:00 AM - 6:00 PM <br />
                Sunday: Closed
              </p>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default ContactPage;
