import React from "react";

import "./App.css";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Contributor from "./components/Contributor";
import Functionl from "./components/Function";
import Foooter from "./components/Foooter";
import SavedUrls from "./components/Savedurl";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/savedurls" element={<SavedUrls />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Contributor />
      <Functionl />
      <Foooter />
    </>
  );
}

export default App;
