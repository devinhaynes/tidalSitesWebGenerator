import React from "react";

function ConfigItem({ key, value }) {
  return (
    <div className="config-pair">
      <span>{key}</span>
      <span>{value}</span>
    </div>
  );
}

export default ConfigItem;
