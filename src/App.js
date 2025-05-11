import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />

        <Route path="*" element={<Main />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
