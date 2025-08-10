import React from "react";

const Words = () => {
  return (
    <div className="page-text fade-in-text">
      <p>
        i started writing publicly at{" "}
        <a href="https://janabel.substack.com/">jbel's substack</a>!
      </p>
      <p>here are some of my posts:</p>
      <ul>
        <li style={{ marginBottom: 0 }}>
          <a href="https://janabel.substack.com/p/careful-optimism">
            careful optimism | Jul 10, 2025
          </a>
        </li>
        <li style={{ marginBottom: 0 }}>
          <a href="https://janabel.substack.com/p/cryptography-and-social-values">
            cryptography and social values | Dec 4, 2024
          </a>
        </li>
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
