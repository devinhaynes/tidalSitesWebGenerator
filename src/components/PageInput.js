import React from "react";
import uppercase from "../util/Uppercase.js";

function PageInput({ errors, pageIndex, inputName, inputType, newConfigs }) {
  return (
    <div className="form-group">
      <div className="form-group-inputs">
        <label htmlFor={`${inputName}_${pageIndex}`}>
          {uppercase(inputName)}
        </label>
        <input
          onChange={e => (newConfigs[inputName] = e.target.value)}
          type={inputType}
          id={`${inputName}_${pageIndex}`}
          placeholder={
            inputName
              ? `Enter ${uppercase(inputName)} here`
              : "For doing things!"
          }
        />
      </div>
      <span className={errors[inputName] ? "error" : "hide"}>
        Please fill in {inputName} field
      </span>
    </div>
  );
}

export default PageInput;
