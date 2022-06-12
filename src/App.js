import "./App.css";
import Portfolio from "./components/main/Portfolio";
import Contact from "./components/footer/Contact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Elizabeth Sedrak</h1>
        <h4>
          <a
            className="App-link"
            href="https://sparkling-pasca-b70e55.netlify.app/"
          >
            {" "}
            My Portfolio
            <FontAwesomeIcon icon={faThumbsUp} />
          </a>
        </h4>
      </header>
      <main>
        <Portfolio />
      </main>
      <footer>
        <Contact />
      </footer>
    </div>
  );
}

export default App;
