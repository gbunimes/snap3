/******APP******/

/***GENERAL***/
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router";
import axios from "axios";

/***DATAS***/
import Data1 from "./data/data.json";
import Data3 from "./data/dataBooks.json";

/***COMPONENTS***/
import Header from "./components/Header";
import Footer from "./components/Footer";

import { MainAnim } from "./components/UniversAnim";

/***PAGES***/
import Homepage from "./pages/Homepage";

/***APP***/
export default function App() {
  return (
    <Router>
      {/*BACKGROUND ANIMATION*/}
      {MainAnim()}

      <Header data1={Data1} />
      <div className="app">
        {/*ROUTES*/}
        <Switch>
          {/*HOMEPAGE*/}
          { <Route exact path="/accueil">
                         <Homepage data1={Data1} />
                       </Route>  }
          {/*REDIRECT*/}
          {/*<Route>
                          <Redirect to="/accueil" />
                        </Route>*/}
        </Switch>
      </div>
      <Footer data1={Data1} />

    </Router>
  );
}
