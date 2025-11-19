import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { Users, Award, Star, Globe, Globe2, HeartHandshake } from "lucide-react";
import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import Testimonial from "../../components/Testimonial/Testimonial.jsx";
import Aboutimg from "../../assets/aboutbanner.jpg";

const About = () => {
  const navigate = useNavigate();

  const stats = [
    { value: 10, suffix: "+", label: "Years Experience", icon: Star },
    { value: 10000, suffix: "+", label: "Happy Travelers", icon: Users },
    { value: 100, suffix: "+", label: "Destinations", icon: Globe },
    { value: 98, suffix: "%", label: "Satisfaction Rate", icon: Award },
  ];

  const values = [
    {
      icon: Users,
      title: "Expert Team",
      description: "Experienced travel professionals dedicated to making every journey truly exceptional",
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized for excellence in travel services and customer satisfaction",
    },
    {
      icon: Globe2,
      title: "Global Reach",
      description: "Access to destinations worldwide with local expertise in every location",
    },
    {
      icon: HeartHandshake,
      title: "Customer First",
      description: "Your satisfaction and safety are at the heart of everything we do",
    },
  ];

  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />

      {/* About Section */}
      <Container fluid className="bg-light py-5" style={{ marginTop: "100px" }}>
        <motion.h1
          className="text-center fw-bold mb-5"
          style={{ fontSize: "70px", color: "#38b6ff", fontStyle: "italic", fontFamily: "Times" }}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Us
        </motion.h1>

        <Row className="align-items-center">
          <Col md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <h2 className="fw-bold mb-3 text-muted" style={{ fontSize: "50px", fontFamily: "Times" }}>
                Our Story
              </h2>
              <p>
                Founded in 2014, Travel Sign began with a simple mission: to make world-class travel experiences accessible to everyone. What started as a small team of passionate travelers has grown into a leading travel agency serving thousands of satisfied customers each year.
              </p>
              <p>
                Our founders believed that travel has the power to transform lives, broaden perspectives, and create lasting memories. This belief continues to drive everything we do today. We carefully curate each destination, partner with trusted local guides, and design experiences that go beyond the typical tourist path.
              </p>
              <p>
                Over the years, we've built relationships with hotels, tour operators, and local communities around the globe. These partnerships allow us to offer unique experiences while ensuring the highest standards of quality and safety for our travelers.
              </p>
            </motion.div>
          </Col>
          <Col md={6}>
            <motion.img
              src={Aboutimg}
              alt="About"
              className="img-fluid rounded shadow"
              style={{ height: "400px" }}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            />
          </Col>
        </Row>
      </Container>

      {/* Values Section */}
      <Container fluid className="py-5 bg-light">
        <motion.h2
          className="text-center mb-5 fw-bold"
          style={{ fontSize: "50px", fontFamily: "Times" }}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Our Values
        </motion.h2>

        <Row className="g-4 justify-content-center text-center">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <Col xs={12} md={6} lg={3} key={index}>
                <motion.div
                  className="bg-white p-4 rounded shadow-sm hover:shadow-lg transition-shadow"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div
                    className="mb-3 d-flex align-items-center justify-content-center rounded-circle mx-auto"
                    style={{
                      width: "64px",
                      height: "64px",
                      backgroundColor: "rgba(56, 182, 255, 0.1)",
                    }}
                  >
                    <Icon size={28} color="#38b6ff" />
                  </div>
                  <h5 className="fw-bold">{value.title}</h5>
                  <p className="text-muted">{value.description}</p>
                </motion.div>
              </Col>
            );
          })}
        </Row>
      </Container>

      {/* Stats Section */}
      <Container fluid className="bg-light py-5">
        <Row className="text-center g-4 justify-content-center">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Col xs={6} md={3} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="p-3 bg-white rounded shadow-sm hover:shadow-lg"
                  whileHover={{ scale: 1.05 }}
                >
                  <Icon className="mb-2" size={36} color="#38b6ff" />
                  <h3 className="fw-bold" style={{ color: "#38b6ff" }}>
                    <CountUp end={stat.value} suffix={stat.suffix} duration={2} />
                  </h3>
                  <p className="text-muted">{stat.label}</p>
                </motion.div>
              </Col>
            );
          })}
        </Row>
      </Container>

      <Testimonial />

      {/* CTA Section */}
      <motion.div
        className="bg-light py-5 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="fw-bold mb-3">Ready To Start Your Adventure?</h1>
        <p className="mb-4">Let us help you plan the perfect trip. Contact our expert team today!</p>
        <Button size="lg" variant="primary" onClick={() => navigate("/contact")}>Get in Touch</Button>
      </motion.div>

      <Footer />
    </div>
  );
};

export default About;
