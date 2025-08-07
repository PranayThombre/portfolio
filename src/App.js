import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Skill from "./pages/Skill";
import Navbar from "./componets/Navbar";
import Footer from "./componets/Footer";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar></Navbar>

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/skill" element={<Skill></Skill>}></Route>
          <Route path="/Projects" element={<Projects></Projects>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
        </Routes>
      </main>

      <Footer> </Footer>
    </div>
  );
};

export default App;
