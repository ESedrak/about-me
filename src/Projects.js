import React from "react";
import cocktail from "./images/cocktail-thumbnail.JPG";
import dictionary from "./images/dictionary-thumbnail.JPG";
import weatherReact from "./images/weather-react-thumbnail.JPG";
import weather from "./images/weather-thumbnail.JPG";

function Projects() {
  return (
    <div className="Projects">
      <section>
        <h2>Projects</h2>
        <h3>Cocktail List</h3>
        <a
          href="https://zesty-alfajores-250e4e.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={cocktail} alt="cocktail list" width="100%"></img>
        </a>
        <h3>Dictionary App</h3>
        <a
          href="https://rainbow-medovik-98a151.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={dictionary}
            alt="dictionary word finding app"
            width="100%"
          ></img>
        </a>
        <h3>Weather App</h3>
        <p> Using React</p>
        <a
          href="https://charming-pika-1b949c.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          <img src={weatherReact} alt="weather react" width="100%"></img>
        </a>
        <h3>Weather App</h3>
        <p> Using Vanilla JS</p>
        <a
          href="https://wonderful-blackwell-a882e9.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src={weather}
            alt="weather vanilla javascript"
            width="100%"
          ></img>
        </a>
      </section>
    </div>
  );
}

export default Projects;
