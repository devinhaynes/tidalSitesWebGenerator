import React from "react";

function Preview() {
  return (
    <iframe
      id="preview"
      src="http://127.0.0.1:5500/dist/test.html"
      style={{ width: "100%", minHeight: "100%" }}
      frameborder="0"
    ></iframe>
  );
}

export default Preview;
