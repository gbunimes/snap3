/******APP******/

/***GENERAL***/
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Redirect } from "react-router";
import axios from "axios";

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
  /*Get datas*/
  const [Loading, setLoading] = useState(true);
  const [Data1, setData1] = useState({});
  const [Data2, setData2] = useState({});
  const [Data3, setData3] = useState({});
  const [allDatas, setAllDatas] = useState({});
  const [allDatas2, setAllDatas2] = useState({});
  const [allDatas3, setAllDatas3] = useState({});

  /*Json file urls*/
  let Json1 =
    "https://raw.githubusercontent.com/NoirDAbsinthe/NDAAPI/master/dataSite.json";
  let Json2 =
    "https://raw.githubusercontent.com/NoirDAbsinthe/NDAAPI/master/dataBooks.json";

  /*axios config*/
  const requestOne = axios.get(Json1);
  const requestTwo = axios.get(Json2);

  useEffect(() => {
    async function getDatas() {
      axios.all([requestOne, requestTwo]).then(
        axios.spread((...responses) => {
          const responseOne = responses[0];
          const responseTwo = responses[1];
          setData1(Data00);
          setData2(responseOne.data);
          setData3(responseTwo.data);
          setLoading(false);
          setAllDatas(Data00);
          setAllDatas2(Data2);
          setAllDatas3(Data3);
        })
      );
    }
    getDatas();
  }, []);

  /**************** Get all books or book tags if needed******************************/
  /*console.log(Data3.Livres)*/
  /*getAllTags(Data3);*/
  /***************************************************************************/


  /*Check if loading is complete before rendering*/
  if (Loading) {
    return null;
  } else {
    /*DOM*/
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
}
