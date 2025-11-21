// MainServicesPage.jsx
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  Palmtree,
  Heart,
  Home,
  MapPin,
  Globe,
  Camera,
  Check,
} from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar/Navbar.jsx";

import ser1 from "../../assets/Mainservice/ser1.avif";
import ser2 from "../../assets/Mainservice/ser2.avif";
import ser3 from "../../assets/Mainservice/ser3.jpg";
import ser4 from "../../assets/Mainservice/ser4.avif";
import ser5 from "../../assets/Mainservice/ser5.jpg";
import ser6 from "../../assets/Mainservice/ser6.avif";

const WHATSAPP_NUMBER = "9566243331";

// ---------------------- SERVICE DATA ----------------------
const servicesData = [
  {
    key: "visa",
    icon: Palmtree,
    title: "Visa & Passport Services",
    subtitle: "End-to-end documentation & embassy liaison",
    description:
      "Fast, reliable visa and passport services with documentation, submission, and follow-ups handled by experts.",
    features: [
      "Visa(Tourist / Business / Student Visas)",
      "World wide embessy attestation",
      "RMI Apply"," ticket booking(Train,Bus,Flight)",
    ],
    image: ser1,
    whatsappMsg: "Hi! I want info about Visa & Passport Services.",
  },
  {
    key: "honeymoon",
    icon: Heart,
    title: "Honeymoon Packages",
    subtitle: "Romantic getaways & tailor-made experiences",
    description:
      "Curated romantic itineraries — private transfers, candlelight dinners, and luxury stays for unforgettable honeymoons.",
    features: [
      "Romantic stays & excursions",
      "Private transfers",
      "Couple spa & activities",
      "Customizable itineraries",
    ],
    image: ser2,
    whatsappMsg: "Hi! I want info about Honeymoon Packages.",
  },
  {
    key: "pilgrimage",
    icon: Home,
    title: "PunyaYatra - Pilgrimages",
    subtitle: "Spiritual journeys across sacred sites",
    description:
      "Comfortable, well-planned pilgrimage tours covering major religious destinations with darshan arrangement support.",
    features: [
      "Darshan arrangements",
      "Experienced guides",
      "Comfort accommodations",
      "Group & private options",
    ],
    image: ser3,
    whatsappMsg: "Hi! I want info about PunyaYatra pilgrimage packages.",
  },
  {
    key: "domestic",
    icon: MapPin,
    title: "Domestic Trips",
    subtitle: "Explore the diversity across India",
    description:
      "From Himalayan escapes to Kerala backwaters — curated domestic tours showcasing culture, nature, and heritage.",
    features: [
      "Hill stations & wildlife",
      "Cultural & heritage tours",
      "Adventure activities",
      "Tailored group tours",
    ],
    image: ser4,
    whatsappMsg: "Hi! I want info about Domestic Trips.",
  },
  {
    key: "international",
    icon: Globe,
    title: "International Trips",
    subtitle: "Worldwide destinations & visa support",
    description:
      "Complete international packages with flights, hotels, transfers, sightseeing and visa assistance.",
    features: [
      "Europe, SE Asia, Middle East",
      "Flight + hotel packages",
      "Local guided tours",
      "Visa assistance",
    ],
    image: ser5,
    whatsappMsg: "Hi! I want info about International Trips.",
  },
  {
    key: "photography",
    icon: Camera,
    title: "Photography Tours",
    subtitle: "Photo-centric journeys with pro guidance",
    description:
      "Join photography-focused tours that target the best light, locations and local expertise to capture outstanding shots.",
    features: [
      "Pro photographers",
      "Unique golden hour spots",
      "Equipment tips",
      "Small groups",
    ],
    image: ser6,
    whatsappMsg: "Hi! I want info about Photography Tours.",
  },
];

// ---------------------- ANIMATION VARIANTS ----------------------
const imageVariants = {
  left: {
    hidden: { opacity: 0, x: -120 },
    show: { opacity: 1, x: 0, transition: { duration: 0.9, ease: "easeOut" } },
  },
  right: {
    hidden: { opacity: 0, x: 120 },
    show: { opacity: 1, x: 0, transition: { duration: 0.9, ease: "easeOut" } },
  },
};

const textVariants = {
  left: {
    hidden: { opacity: 0, x: -60 },
    show: { opacity: 1, x: 0, transition: { duration: 0.9, ease: "easeOut" } },
  },
  right: {
    hidden: { opacity: 0, x: 60 },
    show: { opacity: 1, x: 0, transition: { duration: 0.9, ease: "easeOut" } },
  },
};

// ---------------------- MAIN COMPONENT ----------------------
const MainServicesPage = () => {
  return (
    <div className="min-vh-100 d-flex flex-column">
      <Navbar />

      <main className="flex-grow-1">
        {/* Hero Section */}
        <Container className="py-5 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="lead text-muted mx-auto"
            style={{ maxWidth: 760 }}
          >
            Premium travel services — visas, honeymoons, pilgrimages, domestic
            & international trips, photography tours and more.
          </motion.p>
        </Container>

        {/* Services Section */}
        <Container>
          {servicesData.map((service, idx) => {
            const Icon = service.icon;
            const isReverse = idx % 2 === 1;

            return (
              <section key={service.key} className="py-5">
                <Row className="align-items-center gy-4">
                  {/* IMAGE SECTION */}
                  <Col lg={6} className={isReverse ? "order-lg-2" : ""}>
                    <motion.div
                      variants={imageVariants[isReverse ? "right" : "left"]}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                    >
                      <Card className="shadow-lg border-0 rounded-4 overflow-hidden">
                        <div style={{ height: 420 }}>
                          <img
                            src={service.image}
                            alt={service.title}
                            className="img-fluid w-100"
                            style={{ objectFit: "cover", height: "420px" }}
                          />
                        </div>
                      </Card>
                    </motion.div>
                  </Col>

                  {/* TEXT SECTION */}
                  <Col lg={6} className={isReverse ? "order-lg-1" : ""}>
                    <motion.div
                      variants={textVariants[isReverse ? "left" : "right"]}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.2 }}
                    >
                      <div style={{ maxWidth: 720 }}>
                        <div className="d-flex align-items-center mb-3">
                          <div
                            className="rounded-circle d-flex align-items-center justify-content-center me-3"
                            style={{
                              width: 60,
                              height: 60,
                              background:
                                "linear-gradient(135deg,#e6f5ff,#f0fbff)",
                            }}
                          >
                            <Icon size={28} className="text-primary" />
                          </div>

                          <div>
                            <h3 className="mb-0 fw-bold text-warning">{service.title}</h3>
                            <small className="text-muted">
                              {service.subtitle}
                            </small>
                          </div>
                        </div>

                        <p className="text-secondary">
                          {service.description}
                        </p>

                        <Row>
                          <Col md={6}>
                            <ul className="list-unstyled">
                              {service.features.slice(0, 2).map((f, i) => (
                                <li
                                  key={i}
                                  className="mb-2 d-flex align-items-center"
                                >
                                  <Check
                                    size={16}
                                    className="me-2 text-success"
                                  />{" "}
                                  {f}
                                </li>
                              ))}
                            </ul>
                          </Col>

                          <Col md={6}>
                            <ul className="list-unstyled">
                              {service.features.slice(2).map((f, i) => (
                                <li
                                  key={i}
                                  className="mb-2 d-flex align-items-center"
                                >
                                  <Check
                                    size={16}
                                    className="me-2 text-success"
                                  />{" "}
                                  {f}
                                </li>
                              ))}
                            </ul>
                          </Col>
                        </Row>

                        {/* WhatsApp Button */}
                        <a
                          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                            service.whatsappMsg
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-success px-4 mt-3"
                        >
                          Enquire via WhatsApp
                        </a>
                      </div>
                    </motion.div>
                  </Col>
                </Row>
              </section>
            );
          })}
        </Container>
      </main>
    </div>
  );
};

export default MainServicesPage;
