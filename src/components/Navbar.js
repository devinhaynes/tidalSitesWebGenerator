import React from "react";
import "../style/Navbar.scss";

function Navbar({ publish }) {
  return (
    <div className="navbar">
      <div className="logoBox">
        <div id="logo"></div>
      </div>
      <div className="title">
        <h1>Tidal Sites Website Generator</h1>
      </div>
      <div id="publish">
        <button onClick={() => publish()}>Publish</button>
      </div>
    </div>
  );
}

export default Navbar;
