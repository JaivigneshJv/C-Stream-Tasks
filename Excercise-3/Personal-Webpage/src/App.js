import "./App.css";
// import Styledata from "./Styledata";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Footer from "./components/footer/Footer";
import Work from "./components/work/Work";


const App = () => {
  return (
    <div>
      <Header />

      <main className="main">
        <Home />
        <About />
        <Skills />
        <Work />
        <Footer />
      </main>
    </div>
  );
};

export default App;
