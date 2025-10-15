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
              organizing the first{" "}
              <a href="https://community-privacy.github.io/">
                Community Privacy Residency
              </a>{" "}
              in Taiwan
            </li>
            <li style={{ marginBottom: 0 }}>
              teaching at{" "}
              <a href="https://g2mathprogram.org/">G2 math program</a> as an
              instructor
            </li>
            <li style={{ marginBottom: 0 }}>
              dancing in NY, taking classes from house OGs, and entering my
              first dance battle
            </li>
            <li style={{ marginBottom: 0 }}>
              volunteering with{" "}
              <a href="https://justice4housing.org/">Justice 4 Housing (J4H)</a>
            </li>
            <li style={{ marginBottom: 0 }}>
              finally getting my driver's license and conquering the highway
            </li>
          </ul>
        </div>
        <div className="next">
          <h3>current quests</h3>
          <ul>
            <li style={{ marginBottom: 0 }}>
              thinking about real-world{" "}
              <a href="https://pse.dev/projects/zk-id">
                privacy-preserving digital ID systems
              </a>
            </li>
            <li style={{ marginBottom: 0 }}>
              dancing with Dance Revelasian (come to our upcoming{" "}
              <a href="https://www.dancerevelasian.com/tickets">show</a>!!!)
            </li>
            <li style={{ marginBottom: 0 }}>
              starting my math PhD at Harvard this fall (2025)
            </li>
          </ul>
        </div>
      </div>
      <p>
        in my research, i'm primarily interested in theoretical and applied
        cryptography, the mathematics behind cryptography, and privacy rights
        more broadly. i also have interests in urban planning and housing
        justice.
      </p>
      <p>
        i like to daydream about community-building and what it means to build a
        just community at various scales. i also love all kinds of art, from
        dance to music (i play piano and alto sax) to visual arts. things that
        i've been reading about can be found on my curius page (click the book
        icon on the left).
      </p>
      <p>
        in college, i spent my summers doing math research through
        nationally-funded REU (research experience for undergraduates) programs.
        in a past life, i also participated in math olympiads such as the USAMO
        and the <a href="https://www.egmo.org/people/person1512/">EGMO</a>.
        outside of academics, i spend most of my time dancing and choreographing
        (see <Link to="/dance">Dance</Link>).
      </p>
      <p>
        while my background is primarily in math research spaces, i'm always
        trying to explore as much as possible outside of my comfort zone. if any
        of this sounds interesting to you or you would like to collaborate,
        please reach out! i'd love to chat :)
      </p>
    </div>
  );
};

export default About;
