import React from "react";
import "./Banner.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
  faFacebook,
} from "@fortawesome/fontawesome-free-brands";

function Banner() {
  return (
    <section className="Banner">
      <span className="Banner-socialMedia">
        <a href="https://www.facebook.com/elizabeth.sedrak">
          <FontAwesomeIcon icon={faFacebook} />{" "}
        </a>
        <a href="https://www.linkedin.com/in/elizabeth-sedrak/">
          <FontAwesomeIcon icon={faLinkedin} />{" "}
        </a>
        <a href="https://github.com/ESedrak">
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </span>
      <a
        className="Banner-link"
        href="https://www.elizabeth-sedrak.com"
      >
        <h1>Elizabeth Sedrak</h1>
      </a>
    </section>
  );
}

export default Banner;
