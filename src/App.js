import "./App.css";
import Portfolio from "./components/main/Portfolio";
import Contact from "./components/footer/Contact";
import Banner from "./components/header/Banner";

function App() {
  return (
    <div className="App">
      <header>
        <Banner />
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
