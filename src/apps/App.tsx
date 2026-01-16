// import "katex/dist/katex.min.css"; // `rehype-katex` does not import the CSS for you
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import FrontDoor from "../components/FrontDoor";
import About from "../components/About";
import Words from "../components/Words";
import Projects from "../components/Projects";
import Art from "../components/Art";
import Dance from "../components/Dance";
import Resume from "../components/Resume";

import "../../public/styles.css";
import Insta from "../../public/insta.png";
import Email from "../../public/email.png";
import Messenger from "../../public/msger.png";
import Twitter from "../../public/twitter.png";
import Curius from "../../public/curius.png";

export function App() {
  return (
    <div>
      <Router>
        <div className="main-content-wrapper">
          <div className="socials">
            {/* manually adjusting bc images handdrawn */}
            <a
              href="https://www.instagram.com/janabel.x/"
              style={{ paddingRight: "12px" }}
            >
              <img src={Insta} width={"55%"} className="social-image" />
            </a>
            <a
              href="mailto:janabeltxia@gmail.com"
              target="_blank"
              style={{ paddingRight: "16px" }}
            >
              <img src={Email} width={"50%"} className="social-image" />
            </a>
            <a
              href="https://www.messenger.com/t/janabelxia"
              style={{ paddingRight: "16px" }}
            >
              <img src={Messenger} width={"50%"} className="social-image" />
            </a>
            <a
              href="https://twitter.com/JanabelXia"
              style={{ paddingRight: "16px", paddingTop: "4px" }}
            >
              <img src={Twitter} width={"50%"} className="social-image" />
            </a>
            <a
              href="https://curius.app/janabel-xia"
              style={{ paddingRight: "16px", paddingTop: "8px" }}
            >
              <img src={Curius} width={"50%"} className="social-image" />
            </a>
          </div>
          <div className="main-content">
            <nav>
              <div className="ul nav">
                <Link to="/">about</Link>
                <Link to="/dance">dance</Link>
                <Link to="/words">words</Link>
                {/* <Link to="/projects">projects</Link> */}
                {/* <Link to="/art">Art</Link> */}
                <Link to="/resume">resume</Link>
                <Link to="/door">door</Link>
              </div>
            </nav>
            <div className="page-display">
              <Routes>
                <Route path="/" element={<About />} />
                <Route path="/dance" element={<Dance />} />
                <Route path="/words" element={<Words />} />
                {/* <Route path="/projects" element={<Projects />} /> */}
                {/* <Route path="/art" element={<Art />} /> */}
                <Route path="/resume" element={<Resume />} />
                <Route path="/door" element={<FrontDoor />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}
