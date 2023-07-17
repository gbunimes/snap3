/******APP******/

/***GENERAL***/
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router";

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
      <Header data1={Data1} />
      <div className="app">
        {/*BACKGROUND ANIMATION*/}
        <video
          id="background-video"
          autoPlay
          loop
          muted
          poster="./img/bckVid.mp4"
        >
          <source src="./img/bckVid.mp4" type="video/mp4" />
        </video>
        {/*ROUTES*/}
        <Switch>
          {/*HOMEPAGE*/}
          {
            <Route exact path="/accueil">
              <Homepage data1={Data1} />
            </Route>
          }
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
