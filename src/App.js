import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/NavBar";
import Resume from "./components/Resume";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Resume />
    </div>
  );
}

export default App;
