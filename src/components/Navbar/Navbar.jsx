import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "../../assets/logo.jpg";


const MyNavbar = () => {
  const expand = "lg";
  const [show, setShow] = useState(false);
  const location = useLocation();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // ✅ Close Offcanvas automatically on larger screens
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 992) setShow(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Close menu on route change
  useEffect(() => {
    handleClose();
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/service" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <Navbar
      key={expand}
      expand={expand}
      bg="light"
      fixed="top"
      className="shadow-sm"
      style={{
        height: "85px",
        fontFamily: "Times New Roman, serif",
        fontStyle: "italic",
      }}
    >
      <Container fluid>
        {/* ✅ Brand / Logo */}
        <Navbar.Brand
          as={Link}
          to="/"
          className="d-flex align-items-center ms-2"
        >
          <img
            src={logo}
            alt="Logo"
            width="120"
            height="55"
            className="d-inline-block align-top me-2 rounded"
          />
          <h4
            style={{
              fontStyle: "italic",
              fontWeight: "bold",
              color: "gray",
              fontFamily: "Times New Roman, Times, serif",
              marginBottom: "0",
            }}
          >
            Travel <span style={{ color: "#38b6ff" }}>Sign</span>
          </h4>
        </Navbar.Brand>

        {/* ✅ Toggle Button */}
        <Navbar.Toggle
          aria-controls="offcanvasNavbar"
          onClick={handleShow}
          className="me-3"
        />

        {/* ✅ Offcanvas Menu */}
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="start"
          show={show}
          onHide={handleClose}
          className="bg-light"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              <h5
                style={{
                  fontStyle: "italic",
                  fontWeight: "bold",
                  color: "gray",
                  fontFamily: "Times New Roman, Times, serif",
                }}
              >
                Travel <span style={{ color: "#38b6ff" }}>Sign</span>
              </h5>
            </Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 text-center gap-3 fs-5 fw-bold">
              {navLinks.map((link) => (
                <Nav.Link
                  as={Link}
                  to={link.path}
                  key={link.name}
                  className={`nav-link ${
                    location.pathname === link.path ? "active-link" : ""
                  }`}
                  style={{
                    color:
                      location.pathname === link.path ? "#38b6ff" : "gray",
                    transition: "color 0.3s ease",
                    fontFamily: "Times New Roman, Times, serif",
                    fontStyle: "italic",
                  }}
                >
                  {link.name}
                </Nav.Link>
              ))}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
