import React from "react";
import { Row, Col } from "react-bootstrap";
import Summary from "./Summary";
import Projects from "./Projects";
import "./Portfolio.css";
import Contact from "./Contact";

function Portfolio() {
  return (
    <div className="Portfolio">
      <Row>
        <Col sm={4}>
          <Projects />
        </Col>
        <Col>
          <Summary />
          <Contact />
        </Col>
      </Row>
    </div>
  );
}

export default Portfolio;
