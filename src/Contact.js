import React, { useState } from "react";
import "./Contact.css";
import { Row, Col } from "react-bootstrap";
import emailjs from "emailjs-com";

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

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
        <h2>Contact me</h2>
        <hr />
        <h3>Thank you!</h3>
        <h4>Emails are responded to within 48 hours</h4>
      </div>
    );
  } else {
    return (
      <div className="Contact">
        <h2>Contact me</h2>
        <hr />
        <Row className="Contact-form">
          <form onSubmit={handleSubmit} className="Contact-form">
            <Col>
              <input
                type="text"
                placeholder="Your name"
                name="name"
                className="form-control"
              ></input>
            </Col>
            <Col>
              <input
                type="email"
                placeholder="Email"
                name="user_email"
                className="form-control"
              ></input>
            </Col>
            <Col>
              <textarea
                placeholder="Your message"
                className="form-control"
                name="message"
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
