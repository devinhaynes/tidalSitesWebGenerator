import React from "react";
import Page from "./Page";
import "../style/Page.scss";

function Pages({ pages, setPages, pageIndex, setPageIndex }) {
  return (
    <div id="pages" className="content">
      <h2>Modify your pages</h2>
      <div className="btn-group btn-float">
        <button
          className="btn-plus"
          onClick={e => {
            e.preventDefault();
            setPages([...pages, { id: pageIndex }]);
            setPageIndex(pageIndex + 1);
          }}
        >
          <i className="fa fa-plus fa-2x"></i>
        </button>
      </div>
      <form id="pageForm" className="innerContent">
        {pages.map(page => (
          <Page
            pages={pages}
            setPages={setPages}
            pageIndex={pageIndex}
            setPageIndex={setPageIndex}
            pageConfigs={page}
          />
        ))}
      </form>
    </div>
  );
}

export default Pages;
