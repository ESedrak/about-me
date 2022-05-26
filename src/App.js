import "./App.css";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

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
