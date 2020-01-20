import React from "react";
import ReactDOM from "react-dom";
import { Logo } from "./Logo";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Logo />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
