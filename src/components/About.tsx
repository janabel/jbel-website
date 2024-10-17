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
              applied cryptography with <a href="https://0xparc.org/">0xparc</a>
            </li>
            <li style={{ marginBottom: 0 }}>
              web development (new personal website woohoo!)
            </li>
            <li style={{ marginBottom: 0 }}>
              house dance at the lovely{" "}
              <a href="https://dancemissiontheater.org/">
                dance mission theatre
              </a>
            </li>
            <li style={{ marginBottom: 0 }}>
              volunteering at the{" "}
              <a href="https://www.thefoodprogram.org/">
                haight ashbury food program
              </a>
            </li>
          </ul>
        </div>
        <div className="next">
          <h3>current quests</h3>
          <ul>
            <li style={{ marginBottom: 0 }}>
              interning at Justice 4 Housing{" "}
              <a href="https://justice4housing.org/">Justice 4 Housing (J4H)</a>{" "}
              in Boston (my home)
            </li>
            <li style={{ marginBottom: 0 }}>
              a bit more web development + applied cryptography
            </li>
            <li style={{ marginBottom: 0 }}>thinking about civic tech</li>
            <li style={{ marginBottom: 0 }}>dancing and making art</li>
          </ul>
        </div>
      </div>
      <p>
        i'm a generalist with too many interests too easily summarize :').
        things that i've been reading about can be found on my curius page
        (click the book icon on the left), but just to list a couple in order of
        recency: i'm interested in applied cryptography, urban planning and
        design, and combinatorics and theoretical computer science. i like to
        daydream about community-building and what it means to build a just
        community at various scales. i also love love love all kinds of art,
        including dance, music (i play piano and alto sax!), and visual arts.
      </p>
      <p>
        in college, i did a good amount of math research through
        nationally-funded summer REU programs (research experience for
        undergraduates). in a past life, i also participated in math olympiads
        such as the USAMO and the{" "}
        <a href="https://www.egmo.org/people/person1512/">EGMO</a>. outside of
        academics, i've spent most of my time choreographing and dancing (see{" "}
        <Link to="/dance">Dance</Link>).
      </p>
      <p>
        while my background is primarily in theoretical math research spaces,
        i'm trying to explore as much as possible outside of my comfort zone. if
        any of this sounds interesting to you, please reach out! i'd love to
        chat :)
      </p>
    </div>
  );
};

export default About;
