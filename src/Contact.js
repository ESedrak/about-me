import React, { useState } from "react";
import "./Contact.css";
import { Row, Col } from "react-bootstrap";
import emailjs from "emailjs-com";
import Details from "./Details";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // using emailJs to send receiving messages to my email
    emailjs
      .sendForm(
        "service_abatqf1",
        "template_yj4rhd8",
        e.target,
        "uGICWaDNC9BxPBlqn"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="Contact-submit">
        {/* Created Component just for contact details, to minimise repitition */}
        <Details />
        <h3>Thank you!</h3>
        <h4>Messages are responded to within 48 hours</h4>
      </div>
    );
  } else {
    return (
      <div className="Contact">
        <Details />
        <p>Or message below</p>
        <Row className="Contact-form">
          <form onSubmit={handleSubmit} className="Contact-form">
            <Col>
              <input
                type="text"
                placeholder="Your name"
                name="name"
                className="form-control"
                required
              ></input>
            </Col>
            <Col>
              <input
                type="email"
                placeholder="Email"
                name="user_email"
                className="form-control"
                required
              ></input>
            </Col>
            <Col>
              <textarea
                placeholder="Your message"
                className="form-control"
                name="message"
                required
              />
            </Col>
            <button type="submit">Send</button>
          </form>
        </Row>
      </div>
    );
  }
}

export default Contact;
