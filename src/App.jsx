import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experiance from "./components/Experiance";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <About />
        <Experiance />
        <Projects />
        <Contact />
        <Footer />
      </div>
      <Toaster />
    </>
  );
}

export default App;
