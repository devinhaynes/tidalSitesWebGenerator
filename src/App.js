import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Config from "./components/Config";
import Pages from "./components/Pages";
import General from "./components/General";
import Colors from "./components/Colors";
import Preview from "./components/Preview";
import "./style/App.scss";
import "./style/Preview.scss";
import "./style/Page.scss";

function App() {
  if (!JSON.parse(localStorage.getItem("data"))) {
    localStorage.setItem(
      "data",
      JSON.stringify({ color: {}, pages: [], generalInfo: {} })
    );
  }

  const [activePage, setActivePage] = useState(
    JSON.parse(localStorage.getItem("activePage")) || "/"
  );

  const [colors, setColors] = useState(
    JSON.parse(localStorage.getItem("data")).colors || {}
  );
  const [pages, setPages] = useState(
    JSON.parse(localStorage.getItem("data")).pages || []
  );
  const [pageIndex, setPageIndex] = useState(
    JSON.parse(localStorage.getItem("pageIndex")) || 0
  );

  const [generalInfo, setGeneralInfo] = useState(
    JSON.parse(localStorage.getItem("data")).generalInfo || {}
  );

  async function publish() {
    let data = JSON.parse(localStorage.getItem("data"));

    if (data.pages[0]) {
      await fetch("http://localhost:3002/api/build", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: localStorage.getItem("data")
      }).catch(e => console.log(e));
    } else {
      console.error("There are no pages to publish");
    }
  }

  useEffect(() => {
    localStorage.setItem(
      "data",
      JSON.stringify({ colors, pages, generalInfo })
    );
    localStorage.setItem("pageIndex", JSON.stringify(pageIndex));
    localStorage.setItem("activePage", JSON.stringify(activePage));
  });

  return (
    <Router>
      <div className="App">
        <Navbar publish={publish} />
        <section id="bodyContent">
          <Sidebar activePage={activePage} setActivePage={setActivePage} />
          <Switch>
            <Route path="/General">
              <General
                generalInfo={generalInfo}
                setGeneralInfo={setGeneralInfo}
              />
            </Route>
            <Route path="/Pages">
              <Pages
                pageIndex={pageIndex}
                setPageIndex={setPageIndex}
                pages={pages}
                setPages={setPages}
              />
            </Route>
            <Route path="/Config">
              <Config colors={colors} />
            </Route>
            <Route path="/Colors">
              <Colors colors={colors} setColors={setColors} />
            </Route>
            <Route path="/Preview">
              <Preview />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </section>
      </div>
    </Router>
  );
}

export default App;
