import React from "react";
import * as ReactDOM from "react-dom/client";
import { App } from "./App";

const div = document.createElement("div");
document.body.appendChild(div);

const root = ReactDOM.createRoot(div);
root.render(<App />);

function Test() {
  return <div>hello this is a test</div>;
}
