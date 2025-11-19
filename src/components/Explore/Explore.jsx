import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import { HomeServiceData } from "../Explore/Data.jsx";
import { useNavigate } from "react-router-dom";

const ExploreSection = () => {
  const navigate = useNavigate();  // <-- ADD THIS

  return (
    <Container className="mt-5 mb-5">
      {/* Section Title */}
      <h2
        className="text-start mt-4 fw-bold fs-1"
        style={{
          fontStyle: "italic",
          fontFamily: "Times New Roman",
          color: "#38b6ff",
        }}
      >
        Explore The World with Us....
      </h2>

      {/* Horizontal Scroll Cards */}
      <div
        className="d-flex gap-4 mt-4 pb-3 hide-scrollbar"
        style={{
          overflowX: "auto",
          overflowY: "hidden",
          whiteSpace: "nowrap",
          paddingBottom: "10px",
        }}
      >
        {HomeServiceData.map((item, id) => (
          <div key={id} style={{ flex: "0 0 auto" }}>
            <Card
              className="shadow-sm border-0"
              style={{
                borderRadius: "15px",
                overflow: "hidden",
                width: "18rem",
                minWidth: "18rem",
                marginBottom: "10px",
              }}
            >
              <Card.Img
                variant="top"
                src={item.image}
                alt={item.title}
                style={{
                  height: "250px",
                  width: "100%",
                  objectFit: "cover",
                }}
              />
              <Card.Body className="text-center">
                <Card.Title
                  style={{
                    fontFamily: "Times New Roman",
                    fontWeight: "bold",
                    color: "#333",
                  }}
                >
                  {item.title}
                </Card.Title>

                {item.description && (
                  <Card.Text style={{ fontFamily: "serif", color: "#666" }}>
                    {item.description}
                  </Card.Text>
                )}
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      {/* Book Now Button */}
      <div className="text-center mt-4">
        <Button
          className="px-4 py-2 fw-semibold"
          onClick={() => navigate('/service')}
          style={{
            color: "white",
            fontFamily: "Times New Roman, serif",
            borderRadius: "30px",
            backgroundColor: "#38b6ff",
            border: "none",
            cursor: "pointer",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#2a93d5")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#38b6ff")}
        >
          Book Now
        </Button>
      </div>
    </Container>
  );
};

export default ExploreSection;
