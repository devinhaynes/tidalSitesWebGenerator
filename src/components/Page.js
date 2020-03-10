import React, { useState } from "react";
import PageInput from "./PageInput";

function Page({ pageConfigs, setPages, pages, pageIndex }) {
  let [errors, setErrors] = useState({});
  let newConfigs = {
    id: pageConfigs.id
  };

  function savePage() {
    let newPages = pages.filter(page => page.id !== newConfigs.id);
    validatePage();
    if (!errors) {
      setPages([...newPages, newConfigs]);
    } else {
      alert("Missing data");
    }
  }

  function removePage() {
    let newPages = pages.filter(page => page.id !== pageConfigs.id);
    setPages(newPages);
  }

  function validatePage() {
    let checks = ["name", "image", "header", "subheader", "blurb"];
    let localErrors = {};
    checks.map(check =>
      newConfigs.hasOwnProperty(check) ? "" : (localErrors[check] = "empty")
    );

    setErrors(localErrors);
  }

  const { name, image, header, subheader, blurb } = pageConfigs;
  return (
    <div className="page">
      {/* <div className="form-group">
        <div className="form-group-inputs">
          <label htmlFor={`pageTitle_${pageIndex}`}>Page Name</label>
          <input
            onChange={e => (newConfigs.name = e.target.value)}
            type="text"
            placeholder={name || "Index"}
            id={`pageTitle_${pageIndex}`}
          />
        </div>
        <span className={errors.name ? "error" : "hide"}>
          Please fill in name field
        </span>
      </div> */}
      <PageInput
        errors={errors}
        pageIndex={pageIndex}
        inputName="name"
        inputType="text"
        newConfigs={newConfigs}
      />
      <div className="form-group">
        <div className="form-group-inputs">
          <label htmlFor={`pageImage_${pageIndex}`}>Image</label>
          <input
            onChange={e => (newConfigs.image = btoa(e.target.value))}
            type="file"
            accept="image/png, image/jpg, image/jpeg, image/gif"
            name="image"
            id={`pageImage_${pageIndex}`}
            placeholder={image}
          />
        </div>
        <span className={errors.image ? "error" : "hide"}>
          Please select an image
        </span>
      </div>
      {/* <div className="form-group">
        <div className="form-group-inputs">
          <label htmlFor={`header_${pageIndex}`}>Header</label>
          <input
            onChange={e => (newConfigs.header = e.target.value)}
            type="text"
            id={`header${pageIndex}`}
            placeholder={header || "Business, LLC"}
          />
        </div>
        <span className={errors.header ? "error" : "hide"}>
          Please fill in header field
        </span>
      </div> */}
      <PageInput
        errors={errors}
        pageIndex={pageIndex}
        inputName="header"
        inputType="text"
        newConfigs={newConfigs}
      />
      {/* <div className="form-group">
        <div className="form-group-inputs">
          <label htmlFor={`subheader_${pageIndex}`}>Sub-Header</label>
          <input
            onChange={e => (newConfigs.subheader = e.target.value)}
            type="text"
            id={`subheader_${pageIndex}`}
            placeholder={subheader || "For doing things!"}
          />
        </div>
        <span className={errors.subheader ? "error" : "hide"}>
          Please fill in subheader field
        </span>
      </div> */}
      <PageInput
        errors={errors}
        pageIndex={pageIndex}
        inputName="subheader"
        inputType="text"
        newConfigs={newConfigs}
      />
      <div className="form-group">
        <div className="form-group-inputs">
          <label htmlFor={`blurb_${pageIndex}`}>Blurb</label>
          <textarea
            onChange={e => (newConfigs.blurb = e.target.value)}
            name=""
            id={`blurb_${pageIndex}`}
            cols="30"
            rows="10"
            placeholder={blurb}
          ></textarea>
        </div>
        <span className={errors.blurb ? "error" : "hide"}>
          Please fill in blurb field
        </span>
      </div>
      <div className="btn-group">
        <button
          className="btn-remove"
          onClick={e => {
            e.preventDefault();
            removePage();
          }}
        >
          Remove Page
        </button>
        <button
          onClick={e => {
            e.preventDefault();
            savePage();
          }}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default Page;
