import React from "react";

function Config() {
  return (
    <div id="config" className="content">
      <h2>Configuration file</h2>
      <div className="form-group">
        <span>{JSON.stringify(localStorage.getItem("data"))}</span>
      </div>
    </div>
  );
}

export default Config;
