import React from "react";
import cocktail from "./images/cocktail-thumbnail.JPG";
import dictionary from "./images/dictionary-thumbnail.JPG";

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
      </section>
    </div>
  );
}

export default Projects;
