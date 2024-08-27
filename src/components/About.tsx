import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

const About = () => {
  return (
    <div className="page-text">
      <div className="current-next">
        <div className="current">current</div>
        <div className="next">next</div>
      </div>
      <p>
        i'm a generalist with too many interests too easily summarize :'), but
        to list a couple in order of recency: i'm interested in applied
        cryptography, urban planning and design, and combinatorics and
        theoretical computer science. i like to daydream about
        community-building and what it means to build a just community at
        various scales. i also love love love all kinds of art - dance, music,
        and visual arts.
      </p>
      <p>
        in college, i did a good amount of math research through
        nationally-funded summer REU programs (research experience for
        undergraduates). in a past life, i also participated in math olympiads
        such as the USAMO and the{" "}
        <a href="https://www.egmo.org/people/person1512/">EGMO</a>. outside of
        academics, i spent most of my time choreographing and dancing (see{" "}
        <Link to="/dance">Dance</Link>).
      </p>
      <p>
        some logistical information: i'm currently on a gap year before going to
        Harvard in 2025 fall for my math PhD (back to my home!). in the
        meantime, i'm trying to explore as much as possible outside of my
        comfort zone.
      </p>
    </div>
  );
};

export default About;
