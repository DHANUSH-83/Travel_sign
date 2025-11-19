import React, { useState } from 'react';
import MyNavbar from '../../components/Navbar/Navbar';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';
import { Domestic, International, Punyayathra } from './Data';
import Testimonial from '../../components/Testimonial/Testimonial';
import Footer from '../../components/Footer/Footer';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("International");
  const [clickedImageId, setClickedImageId] = useState(null);

  const getImages = () => {
    if (activeCategory === "Domestic") return Domestic;
    if (activeCategory === "Punyayathra") return Punyayathra;
    return International;
  };

  return (
    <>
      <MyNavbar />

      <Container fluid className="pt-5 mt-5">

        {/* HEADER */}
        <motion.h1
          className="text-center fw-bold"
          style={{ fontSize: "50px", color: "#38b6ff", fontStyle: "italic", fontFamily: "Times" }}
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1 }}
          viewport={{ once: true }}
        >
          Explore the World
        </motion.h1>

        <motion.p
          className="lead text-muted text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Discover breathtaking destinations across mountains, villages, cities, and beyond
        </motion.p>

        {/* CATEGORY BUTTONS */}
        <div className="d-flex justify-content-center gap-3 my-4">
          {["Domestic", "International", "Punyayathra"].map((cat) => (
            <Button
              key={cat}
              variant={activeCategory === cat ? "primary" : "outline-primary"}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </Button>
          ))}
        </div>

        {/* IMAGE GRID */}
        <Row className="g-4 p-4">
          {getImages().map((item) => (
            <Col key={item.id} xs={12} sm={6} md={4} lg={3}>
              <motion.div
                className="position-relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                whileHover={{ scale: 1.05 }}
                style={{
                  overflow: "hidden",
                  borderRadius: "12px",
                  cursor: "pointer",
                  height: "250px"
                }}
                onClick={() => setClickedImageId(item.id)}
              >
                <motion.img
                  src={item.image}
                  alt={item.name}
                  className="w-100 h-100"
                  style={{ objectFit: "cover" }}
                  whileHover={{ scale: 1.12 }}
                  transition={{ duration: 0.4 }}
                />

                {/* NAME */}
                {clickedImageId === item.id && (
                  <motion.div
                    className="position-absolute start-0 w-100"
                    style={{
                      bottom: 0,
                      padding: "10px",
                      background: "radial-gradient(circle at center, rgba(0,0,0,0.6), rgba(0,0,0,0))",
                      color: "white",
                      textAlign: "center",
                      fontWeight: "bold",
                      fontSize: "1rem",
                      borderRadius: "12px 12px 0 0"
                    }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.name}
                  </motion.div>
                )}
              </motion.div>
            </Col>
          ))}
        </Row>

      </Container>

      {/* CALL TO ACTION */}
      <Container className="text-center py-5 bg-light rounded-3">
        <motion.h2
          className="mb-3 fw-bold"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Ready to Book Your Adventure?
        </motion.h2>

        <motion.p
          className="mb-4 text-muted"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Contact us today and let our travel experts help you plan the perfect trip
        </motion.p>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Button as={Link} to="/contact" size="lg" className="px-4">
            Contact Us Now
          </Button>
        </motion.div>
      </Container>

      <Testimonial />
      <Footer />
    </>
  );
};

export default Gallery;
