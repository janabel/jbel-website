import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const About = () => {
  return (
    <div className="page-text fade-in-text">
      <div className="current-next">
        <div className="current">
          <h3>recent quests</h3>
          <ul>
            <li style={{ marginBottom: 0 }}>
              teaching at{" "}
              <a href="https://g2mathprogram.org/">G2 math program</a> as an
              instructor
            </li>
            <li style={{ marginBottom: 0 }}>
              entering my first dance battle in NY in house
            </li>
            <li style={{ marginBottom: 0 }}>
              volunteering with{" "}
              <a href="https://justice4housing.org/">Justice 4 Housing (J4H)</a>
            </li>
            <li style={{ marginBottom: 0 }}>
              thinking about real-world{" "}
              <a href="https://pse.dev/projects/zk-id">
                privacy-preserving digital ID systems
              </a>
            </li>
          </ul>
        </div>
        <div className="next">
          <h3>current quests</h3>
          <ul>
            <li style={{ marginBottom: 0 }}>
              organizing the second{" "}
              <a href="https://community-privacy.github.io/">
                Community Privacy Residency
              </a>{" "}
              in Berlin for 2026 summer
            </li>
            <li style={{ marginBottom: 0 }}>dancing with Dance Revelasian</li>
            <li style={{ marginBottom: 0 }}>
              pursuing my math PhD at Harvard since 2025 fall
            </li>
          </ul>
        </div>
      </div>
      <p>
        in my research, i'm primarily interested in theoretical and applied
        cryptography, the mathematics behind cryptography, and privacy rights
        more broadly.
      </p>
      <p>
        i like to daydream about community-building and what it means to build a
        just community at various scales. as part of this, i'm curious about
        urban planning and housing justice. i also love all kinds of art, from
        dance to music (i play piano and alto sax) to visual arts. outside of my
        academic life, i spend most of my time dancing and choreographing (see{" "}
        <Link to="/dance">Dance</Link>).
      </p>
      <p>
        in college, i spent my summers doing math research through REU (research
        experience for undergraduates) programs. in a past life, i also
        participated in math olympiads such as the USAMO and the{" "}
        <a href="https://www.egmo.org/people/person1512/">EGMO</a>.
      </p>
      <p>
        while my background is primarily in math research spaces, i'm always
        trying to explore as much as possible outside of my comfort zone. things
        that i've been curious about lately can be found on my curius page
        (click the book icon on the left). if you would like to collaborate on
        anything, please reach out! i'd love to chat :)
      </p>
    </div>
  );
};

export default About;
