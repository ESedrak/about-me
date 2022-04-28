import React from "react";
import { Row, Col } from "react-bootstrap";
import Summary from "./Summary";
import Skill from "./Skill";
import "./Portfolio.css";

export default function Portfolio() {
  return (
    <div className="Portfolio">
      <Row>
        <Col sm={3}>
          <Skill />
        </Col>
        <Col>
          <Summary />
        </Col>
      </Row>
    </div>
  );
}
