import React from "react";
import { Card, Container, Row, Col, Button } from "react-bootstrap";
import {
  Palmtree,
  Mountain,
  Building2,
  Camera,
  Users,
  Calendar,
  Check,
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import MainServices from "./MainServices";
import Footer from "../../Components/Footer/Footer";

const Services = () => {
  const services = [
    {
      icon: Palmtree,
      title: "Beach Vacations",
      description:
        "Relax on pristine beaches with luxury resort packages and water activities",
      features: [
        "5-star resorts",
        "Water sports",
        "Spa treatments",
        "Private beaches",
      ],
    },
    {
      icon: Mountain,
      title: "Adventure Tours",
      description:
        "Thrilling adventures for the bold, from mountain climbing to jungle expeditions",
      features: [
        "Expert guides",
        "Safety equipment",
        "Group or solo",
        "All skill levels",
      ],
    },
    {
      icon: Building2,
      title: "City Breaks",
      description:
        "Explore vibrant cities, historic landmarks, and local culture",
      features: ["City tours", "Museum passes", "Local cuisine", "Shopping guides"],
    },
    {
      icon: Camera,
      title: "Photography Tours",
      description:
        "Capture stunning landscapes with guidance from professional photographers",
      features: [
        "Pro guidance",
        "Best locations",
        "Timing tips",
        "Equipment advice",
      ],
    },
    {
      icon: Users,
      title: "Group Travel",
      description:
        "Perfect for families, friends, or corporate teams seeking shared experiences",
      features: [
        "Group discounts",
        "Team building",
        "Private transport",
        "Flexible groups",
      ],
    },
    {
      icon: Calendar,
      title: "Seasonal Packages",
      description:
        "Special seasonal offerings celebrating festivals and unique events worldwide",
      features: [
        "Festival access",
        "Cultural events",
        "Limited time",
        "Exclusive deals",
      ],
    },
  ];

  return (
    <div className="min-vh-100 d-flex flex-column">
      <Navbar />

      <main className="flex-grow-1 pt-5 pb-5">
        {/* Hero Section */}
        <Container className="text-center py-5">
          <motion.h1
            className="display-4 fw-bold mb-3"
            style={{ fontSize: "70px", color: "#38b6ff", fontStyle: "italic", fontFamily: "Times" }}
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Our Services
          </motion.h1>

          <MainServices />

          <motion.p
            className="lead text-muted"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            From relaxing beach getaways to thrilling adventures, we offer
            comprehensive travel services tailored to your dreams
          </motion.p>
        </Container>

        {/* Services Grid */}
        <Container className="py-5">
          <Row className="g-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Col key={index} xs={12} md={6} lg={4}>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-100 shadow-sm border-0">
                      <Card.Body className="text-center">
                        <div
                          className="mb-3 d-inline-flex align-items-center justify-content-center rounded-circle bg-primary bg-opacity-10"
                          style={{ width: "50px", height: "50px" }}
                        >
                          <Icon className="text-primary" size={24} />
                        </div>

                        <Card.Title className="fw-bold">
                          {service.title}
                        </Card.Title>

                        <Card.Text className="text-muted">
                          {service.description}
                        </Card.Text>

                        {/* Feature List with Tick Icons */}
                        <ul className="list-unstyled mt-3 text-start">
                          {service.features.map((feature, idx) => (
                            <li
                              key={idx}
                              className="mb-2 d-flex align-items-center"
                            >
                              <Check
                                size={16}
                                className="me-2 text-success fw-bold"
                              />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>
              );
            })}
          </Row>
        </Container>

        {/* CTA Section */}
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
            Contact us today and let our travel experts help you plan the
            perfect trip
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
      </main>

      <Footer />
    </div>
  );
};

export default Services;
