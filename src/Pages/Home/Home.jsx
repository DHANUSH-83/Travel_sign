import React, { useEffect, useRef, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../../components/Navbar/Navbar.jsx";
import ExploreSection from "../../components/Explore/Explore.jsx";
import Testimonial from "../../components/Testimonial/Testimonial.jsx";
import Destination from "../../components/Popular_destination/destination.jsx";
import Footer from "../../components/Footer/Footer.jsx";

import HomeBanner2 from "../../assets/HomeBanner2.jpg";
import worldMap from "../../assets/world.jpg";
import { slides } from "./Data.jsx";

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
  const imageRefs = useRef([]);
  const textRefs = useRef([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % slides.length);
  const handlePrev = () =>
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);

  // ✅ Fade effect when banner changes
  useEffect(() => {
    gsap.fromTo(
      ".home-bg, .home-content",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.2, ease: "power2.out" }
    );
  }, [currentIndex]);

  // ✅ Scroll-trigger animations
  useEffect(() => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    // Text animation
    if (textRefs.current[0]) {
      gsap.fromTo(
        textRefs.current[0],
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRefs.current[0],
            start: "top 85%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    }

    // Card animations (Explore section)
    imageRefs.current.forEach((img, index) => {
      if (!img) return;
      gsap.fromTo(
        img,
        { y: 100, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.1,
          delay: index * 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: img,
            start: "top 90%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });

    ScrollTrigger.refresh();
    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);


  return (
    <div
      style={{
        fontFamily: "Georgia, 'Times New Roman', serif",
        overflowX: "hidden",
      }}
    >
      <Navbar />

      {/* ===== Hero Section ===== */}
      <section
        className="home-bg position-relative text-light"
        style={{
          height: "100vh",
          backgroundImage: `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${slides[currentIndex].image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          transition: "background-image 1s ease-in-out",
        }}
      >
        <Container
          fluid
          className="h-100 d-flex justify-content-center align-items-center text-center home-content"
        >
          <Row>
            <Col xs={12}>
              <motion.h1
                key={slides[currentIndex].title}
                className="fw-bold"
                style={{
                  fontSize: "clamp(2rem, 5vw, 3rem)",
                  lineHeight: "1.2",
                }}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                {slides[currentIndex].title.split(" ").slice(0, -1).join(" ")}{" "}
                <motion.span
                  style={{ color: "#cd800cff" }}
                  className="text-warning"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  {slides[currentIndex].title.split(" ").slice(-1)}
                </motion.span>
              </motion.h1>

              <h5 className="mt-3 text-warning fw-semibold">
                {slides[currentIndex].subtitle}
              </h5>

              <p
                className="fst-italic mt-3 mx-auto"
                style={{ maxWidth: "600px" }}
              >
                {slides[currentIndex].description}
              </p>

              {/* Navigation Buttons */}
              <div className="mt-4 d-flex justify-content-center gap-3 flex-wrap">
                <Button
                  variant="warning"
                  className="rounded-circle border-0"
                  style={{ width: "45px", height: "45px" }}
                  onClick={handlePrev}
                >
                  <FaArrowLeft className="text-light" />
                </Button>
                <Button
                  variant="warning"
                  className="rounded-circle border-0"
                  style={{ width: "45px", height: "45px" }}
                  onClick={handleNext}
                >
                  <FaArrowRight className="text-light" />
                </Button>
              </div>
            </Col>
          </Row>
        </Container>

        {/* Thumbnails */}
        <Container
          fluid
          className="position-absolute bottom-0 d-flex justify-content-center align-items-center flex-wrap py-3 gap-3"
          style={{
            background: "rgba(0,0,0,0.3)",
            backdropFilter: "blur(4px)",
          }}
        >
          {slides.map((thumb, i) => (
            <motion.img
              key={i}
              src={thumb.image}
              alt={`thumb-${i}`}
              onClick={() => setCurrentIndex(i)}
              whileHover={{ scale: 1.1 }}
              className="rounded shadow-sm"
              style={{
                width: "clamp(80px, 15vw, 150px)",
                height: "clamp(60px, 10vw, 100px)",
                objectFit: "cover",
                cursor: "pointer",
                border:
                  currentIndex === i
                    ? "3px solid #ff8c00"
                    : "2px solid rgba(255,255,255,0.7)",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </Container>
      </section>

      <ExploreSection />

      <Container fluid className="py-5 bg-light text-dark">
        <Row className="w-100 m-0 justify-content-end align-items-center">
          <Col xs={12} md={6} className="p-5 text-center text-md-end">
            <h2
              className="fw-bold mb-4"
              style={{
                color: "#FFCC00",
                fontFamily: "Times New Roman",
                fontStyle: "italic",
              }}
            >
              Your Journey Begins with Travel Sign
            </h2>
            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: "1.8",
                color: "#000",
              }}
            >
              "Your journey begins with Travel Sign, where every destination becomes a story.
              We craft unforgettable experiences filled with adventure, comfort, and discovery —
              turning your dreams into memorable journeys across Tamil Nadu and beyond."
            </p>
          </Col>

          <Col xs={12} md={6}>
            <motion.img
              src={HomeBanner2}
              alt="Travel Sign"
              className="img-fluid rounded shadow"
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              style={{
                border: "2px solid #38b6ff",
                width: "100%",
                maxHeight: "420px",
                objectFit: "cover",
              }}
            />
          </Col>
        </Row>
      </Container>

      {/* ===== World Map Section ===== */}
      <Container
        fluid
        className="bg-light text-center py-5"
        style={{ fontFamily: "Times New Roman, serif", marginBottom: "80px" }}
      >
        <Row className="align-items-center justify-content-center">
          <Col xs={12} md={6}>
            <motion.img
              src={worldMap}
              alt="World Map"
              className="img-fluid rounded shadow mb-4"
              initial={{ opacity: 0, y: 100 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              style={{
                maxWidth: "100%",
                border: "2px solid #38b6ff",
              }}
            />
          </Col>

          <Col xs={12} md={6}>
            <motion.h2
              className="fw-bold mb-3"
              style={{ fontStyle: "italic", color: "#FFCC00" }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              Select Your Next Trip by Continent
            </motion.h2>
            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: "1.8",
                color: "#333",
              }}
            >
              Discover breathtaking destinations across every continent — from Asia’s vibrant
              cultures to Europe’s timeless charm, Africa’s wild beauty, and the Americas’ adventure-filled landscapes.
              Your perfect journey awaits — explore today!
            </p>
          </Col>
        </Row>
      </Container>

      <Destination />
      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home; 