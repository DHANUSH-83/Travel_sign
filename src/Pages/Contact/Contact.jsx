import React, { useState } from 'react';
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from '../../components/Footer/Footer.jsx';
import Testimonial from '../../components/Testimonial/Testimonial.jsx'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "ded0ae7d-806b-4a52-b875-92a9834463da");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  // Animation variants for staggered input fields
  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.5 }
    })
  };

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />

      {/* Page Heading */}
      <motion.h1
        className="text-center fw-bold"
        style={{
          fontSize: "50px",
          color: "#FFCC00",
          marginTop: "90px",
          fontStyle: "italic",
          fontFamily: "Times"
        }}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Us
      </motion.h1>

      {/* Map */}
      <motion.div
        className="container my-4"
        style={{ width: "100%", height: "500px" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <iframe
          title="My Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3791.2776122589307!2d77.98522707487669!3d10.376106989749353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00aa6f294bf6fb%3A0xf1a35e0f7d157405!2sPleasant%20Plaza!5e1!3m2!1sen!2sin!4v1763532697000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.div>

      {/* Contact Form */}
      <Container className="my-5">
        <h2 className="text-center mb-4" style={{ fontFamily: 'Times' }}>Get In Touch</h2>
        <Form onSubmit={onSubmit}>
          <Row className="mb-3">
            <Col md={4}>
              <motion.div custom={0} variants={inputVariants} initial="hidden" animate="visible">
                <Form.Group controlId="formName">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" name="name" placeholder="Enter your name" required />
                </Form.Group>
              </motion.div>
            </Col>

            <Col md={4}>
              <motion.div custom={1} variants={inputVariants} initial="hidden" animate="visible">
                <Form.Group controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" name="email" placeholder="Enter your email" required />
                </Form.Group>
              </motion.div>
            </Col>

            <Col md={4}>
              <motion.div custom={2} variants={inputVariants} initial="hidden" animate="visible">
                <Form.Group controlId="formPhone">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control type="tel" name="phone" placeholder="Enter your phone number" required />
                </Form.Group>
              </motion.div>
            </Col>
          </Row>

          <motion.div custom={3} variants={inputVariants} initial="hidden" animate="visible">
            <Form.Group controlId="formMessage" className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" name="message" rows={5} placeholder="Type your message" required />
            </Form.Group>
          </motion.div>

          <motion.div custom={4} variants={inputVariants} initial="hidden" animate="visible" whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
            <Button type="submit" variant="primary" className="px-4 py-2">
              Submit Form
            </Button>
          </motion.div>

          <motion.div
            className="mt-3 text-success"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {result}
          </motion.div>
        </Form>
      </Container>
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Contact;
