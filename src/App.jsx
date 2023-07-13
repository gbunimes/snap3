/******APP******/

/***GENERAL***/
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router";
import axios from "axios";

/***DATAS***/
import Data1 from "./data/data.json";
import Data2 from "./data/dataSite.json";
import Data3 from "./data/dataBooks.json";

/***COMPONENTS***/
import Header from "./components/Header";
import { DustAnim, MainAnim } from "./components/UniversAnim";
import { getAllTags } from "./components/Appendix";
import Data00 from "./data/data.json";

/***PAGES***/
import Homepage from "./pages/Homepage";
import StoryBrume from "./pages/StoryBrume";
import Team from "./pages/Team";
import Stories from "./pages/Stories";
import Createurs from "./pages/Createurs";
import ThisUniverse from "./pages/ThisUniverse";
import Univers from "./pages/Univers";
import Search from "./pages/Search";

/***APP***/
export default function App() {
      return (
      <Router>
        {/*BACKGROUND ANIMATION*/}
        {DustAnim()}
        {MainAnim()}
        
        <Header data1={Data1} data2={Data2} />
        <div className="app">
          {/*ROUTES*/}
          <Switch>
            {/*HOMEPAGE*/}
            <Route exact path="/accueil">
              <Homepage data1={Data1} data2={Data2} data3={Data3} />
            </Route>
            {/*CREATEURS*/}
            <Route exact path="/createurs">
              <Createurs data1={Data1} data2={Data2} />
            </Route>
            {/*UNIVERS HOMEPAGE*/}
            <Route exact path="/nos-univers">
              <Univers data1={Data1} data2={Data2} />
            </Route>
            {/*TEAM PAGE*/}
            <Route exact path="/actionnaires">
              <Team data={Data2} />
            </Route>
            {/*STORIES*/}
            <Route exact path="/nouvelles">
              <Stories data={Data2} />
            </Route>
            {/*STORY*/}
            <Route exact path={"/ma-brume"}>
              <StoryBrume />
            </Route>
            {/*UNIVERS*/}
            <Route
              exact
              path={[
                "/memoria",
                "/futuria",
                "/onyria",
                "/terra-urbana",
                "/rouge-d-absinthe",
                "/l-antre-de-la-folie",
                "/fleur-d-absinthe",
                "/chrysalis",
                "/pousse-d-absinthe",
                "/hors-collection",
              ]}
            >
              <ThisUniverse data1={Data1} data2={Data2} data3={Data3} />
            </Route>
            {/*SEARCH*/}
            <Route path="/recherche">
              <Search data1={Data1} data2={Data2} data3={Data3} />
            </Route>
            {/*REDIRECT*/}
            <Route>
              <Redirect to="/accueil" />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
