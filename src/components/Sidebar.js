import React, { useState } from "react";
import SidebarLink from "./SidebarLink";
import "../style/Sidebar.scss";

function Sidebar({ activePage, setActivePage }) {
  return (
    <div className="sidebar">
      <div className="runner">
        <SidebarLink
          activePage={activePage}
          setActivePage={setActivePage}
          linkName="Home"
          link="/"
        />
        <SidebarLink
          activePage={activePage}
          setActivePage={setActivePage}
          linkName="General"
          link="/General"
        />
        <SidebarLink
          activePage={activePage}
          setActivePage={setActivePage}
          linkName="Pages"
          link="/Pages"
        />
        <SidebarLink
          activePage={activePage}
          setActivePage={setActivePage}
          linkName="Colors"
          link="/Colors"
        />
        <SidebarLink
          activePage={activePage}
          setActivePage={setActivePage}
          linkName="Configuration"
          link="/Config"
        />
        <SidebarLink
          activePage={activePage}
          setActivePage={setActivePage}
          linkName="Preview"
          link="/Preview"
        />
      </div>
    </div>
  );
}

export default Sidebar;
