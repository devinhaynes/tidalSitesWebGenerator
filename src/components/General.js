import React, { useState } from "react";

function General({ generalInfo, setGeneralInfo }) {
  const [info, setInfo] = useState({});
  return (
    <div id="general" className="content">
      <h2>Enter general information about the organization</h2>
      <div className="form-group">
        <label htmlFor="domain">Domain</label>
        <input
          id="domain"
          type="text"
          placeholder={generalInfo.domain || "www.example.com"}
          onChange={e => setInfo({ ...info, domain: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label htmlFor="businessName">Business Name</label>
        <input
          id="businessName"
          type="text"
          placeholder={generalInfo.businessName || "Business People, LLC"}
          onChange={e => setInfo({ ...info, businessName: e.target.value })}
        />
      </div>
      <div className="form-group">
        <label htmlFor="">Title</label>
        <input
          id="title"
          type="text"
          placeholder={generalInfo.businessName || "Business People"}
          onChange={e => setInfo({ ...info, title: e.target.value })}
        />
      </div>
      <div className="btn-group">
        <button
          onClick={e => {
            e.preventDefault();
            setGeneralInfo(info);
          }}
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default General;
