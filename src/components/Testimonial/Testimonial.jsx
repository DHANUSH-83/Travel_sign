import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { motion } from "framer-motion";
import testimonialimg from "../../assets/testimonial.png";
import { testimonials } from "./Data"; // ✅ Named export

const Testimonial = () => {
  return (
    <div className="bg-light text-center py-5">
      <Container>
        {/* Headings */}
        <motion.h1
          className="fw-bold mb-3"
          style={{
            fontStyle: "italic",
            color: "#FFCC00",
            textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
            fontFamily: "Times New Roman, serif",
          }}
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          What Our Travelers Say
        </motion.h1>

        <motion.h4
          className="text-secondary fw-bold mb-5"
          style={{
            fontFamily: "Times New Roman, serif",
            fontStyle: "italic",
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Real experiences from real travelers who explored the world with us
        </motion.h4>

        {/* Content Section */}
        <Row className="align-items-center text-center text-lg-start">
          {/* Image Section */}
          <Col
            xs={12}
            lg={6}
            className="mb-4 mb-lg-0 d-flex justify-content-center"
          >
            <motion.img
              src={testimonialimg}
              alt="Happy traveler"
              className="img-fluid rounded shadow"
              style={{
                maxWidth: "100%",
                height: "auto",
              }}
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            />
          </Col>

          {/* Carousel Section */}
          <Col xs={12} lg={6}>
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Carousel indicators={false} controls={true} fade interval={2000}>
                {testimonials.map((testimonial, index) => (
                  <Carousel.Item key={index}>
                    <div className="p-4 bg-white shadow-sm rounded">
                      <p
                        className="text-muted mb-3"
                        style={{
                          fontFamily: "Georgia, 'Times New Roman', serif",
                          fontStyle: "italic",
                          lineHeight: "1.8",
                        }}
                      >
                        “{testimonial.message}”
                      </p>
                      <h5 className="fw-bold mb-0" style={{ color: "#333" }}>
                        {testimonial.name}
                      </h5>
                      <small className="text-secondary d-block">
                        {testimonial.location} — ⭐ {testimonial.rating}
                      </small>
                      <small
                        className="text-primary"
                        style={{ fontStyle: "italic" }}
                      >
                        {testimonial.tour}
                      </small>
                    </div>
                  </Carousel.Item>
                ))}
              </Carousel>
            </motion.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Testimonial;
