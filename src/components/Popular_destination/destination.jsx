import React from "react";
import { Container, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import { destination } from "./Data";
import { useNavigate } from "react-router-dom";

const Destination = () => {
  const navigate = useNavigate(); 
  return (
    <Container
      fluid
      className="text-center py-5"
      style={{
        backgroundColor: "white",
        overflow: "hidden",
      }}
    >
      {/* Title */}
      <motion.h1
        className="fw-bold mb-5"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        style={{
          color: "#FFCC00",
          fontFamily: "Times New Roman, serif",
          fontStyle: "italic",
        }}
      >
        Popular Destinations...
      </motion.h1>

      {/* Destination Cards */}
      <Container>
        <div
          className="d-flex flex-wrap justify-content-center align-items-center gap-4"
          style={{
            overflow: "hidden",
            marginBottom: "40px",
          }}
        >
          {destination.map((item) => (
            <motion.div
              key={item.id}
              className="position-relative overflow-hidden rounded shadow"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.3 }}
              style={{
                width: "280px",
                height: "380px",
                cursor: "pointer",
                border: "2px solid #38b6ff",
                borderRadius: "15px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
                overflow: "hidden",
                backgroundColor: "#fff",
              }}
            >
              {/* Image */}
              <motion.img
                src={item.image}
                alt={item.name}
                className="img-fluid"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.5s ease",
                }}
                whileHover={{ scale: 1.15 }}
              />

              {/* Overlay Name */}
              <motion.div
                className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
                style={{
                  background: "rgba(0, 0, 0, 0.6)",
                  color: "white",
                  fontFamily: "Times New Roman, serif",
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  letterSpacing: "1px",
                }}
              >
                {item.name}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Button
            variant="info"
            className="px-4 py-2 fw-semibold"
            onClick={() => navigate('/service')}
            style={{
              color: "white",
              fontFamily: "Times New Roman, serif",
              borderRadius: "30px",
              backgroundColor: "#38b6ff",
              border: "none",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#2a93d5")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#38b6ff")}
          >
            Book Now
          </Button>
        </motion.div>
      </Container>
    </Container>
  );
};

export default Destination;
