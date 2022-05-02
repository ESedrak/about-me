import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

const root = ReactDOM.createRoot(document.getElementById("root"));

// To help find the structure of this Page
// 1: App
// 2: Portfolio
//  3:(In Portfolio) Projects, Summary, Contact
// 4: (In Summary) Personal, Skills, Training, Professional
// 5:(In Contact) Details
root.render(
  <React.StrictMode>
    <Container>
      <App />
    </Container>
  </React.StrictMode>
);

reportWebVitals();
