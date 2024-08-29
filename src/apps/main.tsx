import React from "react";
import * as ReactDOM from "react-dom/client";
import { App } from "./App";

const div = document.createElement("div");
div.style.height = "85%"; // Set the height of the root element
// div.style.width = "100%";  // Optionally set the width
document.body.appendChild(div);

const root = ReactDOM.createRoot(div);
root.render(<App />);

function Test() {
  return <div>hello this is a test</div>;
}
