// import "katex/dist/katex.min.css"; // `rehype-katex` does not import the CSS for you
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Home from "../components/Home";
import About from "../components/About";
import Words from "../components/Words";
import Projects from "../components/Projects";
import Art from "../components/Art";
import Dance from "../components/Dance";
import Resume from "../components/Resume";

import "../../public/styles.css";

export function App() {
  return (
    // <div style={{ height: "100%" }}>
    <Router>
      {/* <div className="body-wrapper clearfix"> */}
      <div className="main-content-wrapper">
        <div className="main-content">
          <nav>
            <div className="ul nav">
              <Link to="/">home</Link>
              <Link to="/about">about</Link>
              <Link to="/words">words</Link>
              <Link to="/projects">projects</Link>
              <Link to="/dance">dance</Link>
              {/* <Link to="/art">Art</Link> */}
              <Link to="/resume">resume</Link>
            </div>
          </nav>
          <div className="page-display">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/words" element={<Words />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/dance" element={<Dance />} />
              {/* <Route path="/art" element={<Art />} /> */}
              <Route path="/resume" element={<Resume />} />
            </Routes>
          </div>
        </div>
      </div>
      {/* </div> */}
    </Router>
    // </div>
  );
}
