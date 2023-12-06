import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header";
import Hero from "./components/hero";
import About from "./components/about";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <main id="main">
        <About />
      </main>
    </div>
  );
}

export default App;
