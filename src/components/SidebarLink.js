import React from "react";
import { Link } from "react-router-dom";

function SidebarLink({ activePage, setActivePage, linkName, link }) {
  return (
    <div className={`sidebox ${activePage === link ? "active" : ""}`}>
      <Link to={link} onClick={() => setActivePage(link)}>
        {linkName}
      </Link>
    </div>
  );
}

export default SidebarLink;
