import React from "react";
import { Button, Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";
import Footerimg from "../../assets/Footer.jpg";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const menuItems = ["Home", "About", "Service", "Gallery", "Contact"];
  const navigate = useNavigate();

  return (
    <footer
      className="text-light"
      style={{
        width: "100%",
        minHeight: "70vh",
        backgroundImage: `linear-gradient(rgba(0,0,0,0.75), rgba(0,0,0,0.75)), url(${Footerimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        padding: "40px 20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Container>
        {/* Top Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-4"
        >
          <motion.h1
            className="fw-bold mb-3"
            style={{
              fontFamily: "Times New Roman, serif",
              fontStyle: "italic",
              color: "#38b6ff",
              textShadow: "2px 2px 6px rgba(0,0,0,0.6)",
            }}
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            Stay With Us
          </motion.h1>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Button
              variant="outline-light"
              className="mt-2 px-4 py-2"
              style={{ borderRadius: "30px", fontWeight: "bold" }}
              onClick={() => navigate("/service")}
            >
              Book Now
            </Button>
          </motion.div>
        </motion.div>

        <hr
          style={{
            width: "90%",
            margin: "25px auto",
            borderColor: "rgba(255,255,255,0.2)",
          }}
        />

        {/* Footer Info */}
        <Row className="justify-content-center">
          {/* About */}
          <Col
            xs={12}
            md={3}
            className="mb-4 text-center text-md-start text-lg-center"
          >
            <motion.h5
              className="fw-bold text-uppercase text-center"
              style={{ color: "#38b6ff" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              About Us
            </motion.h5>
            <motion.p
              className="text-center"
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontSize: "0.95rem",
                color: "#f5f5f5",
                lineHeight: "1.6",
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              At <strong>Travel Sign</strong>, we help you explore beautiful
              destinations all over the world — from stunning beaches to
              breathtaking mountains. Comfort, safety, and unforgettable
              memories are always guaranteed.
            </motion.p>
          </Col>

          {/* Menus */}
          <Col xs={12} md={2} className="mb-4 text-center text-md-start">
            <motion.h5
              className="fw-bold text-uppercase text-center"
              style={{ color: "#38b6ff" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Menus
            </motion.h5>
            {menuItems.map((item, idx) => (
              <motion.p
                key={idx}
                className="mb-1 text-center"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
              >
                <span
                  onClick={() =>
                    item === "Home"
                      ? navigate("/")
                      : navigate(`/${item.toLowerCase()}`)
                  }
                  className="text-light text-decoration-none"
                  style={{ fontSize: "0.95rem", cursor: "pointer" }}
                >
                  {item}
                </span>
              </motion.p>
            ))}
          </Col>

          {/* Contact */}
          <Col xs={12} md={3} className="mb-4 text-center text-md-start">
            <motion.h5
              className="fw-bold text-uppercase text-center"
              style={{ color: "#38b6ff" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Contact
            </motion.h5>
            {[
              "28, Pleasant Plaza Complex, Opp. Beschi College, Old Karur Road, Dindigul-624001",
              "+91 95662 43331",
              "+91 99407 93331",
              "+91 99407 23331",
              "travelsigncw@gmail.com",
            ].map((line, idx) => (
              <motion.p
                key={idx}
                className="mb-1 text-center"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + idx * 0.1 }}
              >
                {idx === 0 ? (
                  <>
                    <FaMapMarkerAlt className="me-2" />
                    {line}
                  </>
                ) : idx === 4 ? (
                  <>
                    <FaEnvelope className="me-2" />
                    {line}
                  </>
                ) : (
                  <>
                    <FaPhoneAlt className="me-2" />
                    {line}
                  </>
                )}
              </motion.p>
            ))}
          </Col>

          {/* Socials */}
          <Col xs={12} md={3} className="mb-4 text-center">
            <motion.h5
              className="fw-bold text-uppercase"
              style={{ color: "#38b6ff" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Follow Us
            </motion.h5>

            <div className="d-flex justify-content-center gap-3 mt-3">
              {/* Facebook */}
              <motion.a
                href="#"
                className="text-light fs-4"
                whileHover={{ scale: 1.3, color: "#38b6ff" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <FaFacebook />
              </motion.a>

              {/* Instagram (with real link) */}
              <motion.a
                href="https://www.instagram.com/travel_sign_333/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light fs-4"
                whileHover={{ scale: 1.3, color: "#38b6ff" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <FaInstagram />
              </motion.a>

              {/* YouTube added */}
              <motion.a
                href="#"
                className="text-light fs-4"
                whileHover={{ scale: 1.3, color: "#38b6ff" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <FaYoutube />
              </motion.a>
            </div>
          </Col>
        </Row>

        {/* Bottom Line */}
        <motion.div
          className="mt-4 pt-3 border-top border-light text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <p className="mb-0" style={{ fontSize: "0.9rem", color: "#bbb" }}>
            © {new Date().getFullYear()} Travel Sign. All Rights Reserved.
          </p>
        </motion.div>
      </Container>
    </footer>
  );
};

export default Footer;
