import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Footer from "./Footer";
import Personal from "./Personal";

const root = ReactDOM.createRoot(document.getElementById("root"));

// To help find the structure of this Page
// 1: App
// 2: Portfolio and Footer
//  3:(In Portfolio) Projects and Summary
// 4: (In Summary) Personal, Skills, Training, Professional
root.render(
  <React.StrictMode>
    <Container>
      <App />
    </Container>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
