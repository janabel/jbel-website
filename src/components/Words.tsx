import React from "react";

const Words = () => {
  return (
    <div className="page-text fade-in-text">
      <p>
        i started writing (for the public) recently at{" "}
        <a href="https://janabel.substack.com/">jbel's substack</a>! offloading
        some refactored journal entries soon.
      </p>
      <p>
        here are my favorite posts right now (hopefully this section actually
        makes sense one day):
      </p>
      <ul>
        <li style={{ marginBottom: 0 }}>
          <a href="https://janabel.substack.com/p/an-ode-to-dance">
            mosaic | Sep 2, 2024
          </a>
        </li>
        <li style={{ marginBottom: 0 }}>
          <a href="https://janabel.substack.com/p/an-ode-to-dance">
            an ode to dance | Jun 14, 2024
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Words;
