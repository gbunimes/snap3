/******CREATEURS******/
import ReactTooltip from "react-tooltip";
import Collapsible from "react-collapsible";

/***COMPONENTs***/
import { DustAnim, MainAnim } from "../components/UniversAnim";
import { alphabetical, checkWidth } from "../components/Appendix";

/***COMPONENT***/
export default function Createurs(data) {
  /*Toggle external links buttons for creators*/
  function GetLink(props) {
    if (props >= "1") {
      return (
        <a
          href={props}
          target="_blank"
          className="page-scroll extLink"
          data-tip
          data-for="UtipLink"
        ></a>
      );
    }
  }

  /*Create creator card*/
  function tryAuth(team, i) {
    /*creator card linked to books if creator is an author*/
    if (team.job.includes("aut")) {
      /*console.log(team.name + " " + team.name2)*/
      /*creator card template if creator lacks surname*/
      if (team.name2 != "") {
        return (
          <div
            key={`${team.name}-${i}`}
            className="col-sm-3 col-md-2 col-lg-2 creator "
          >
            <a
              href={"/recherche#" + team.name + " " + team.name2}
              key={team.name + "Link"}
            >
              <img
                className="img-responsive creatora"
                src={
                  data.data1.UimgLinks.IL2 +
                  team.name2 +
                  data.data1.UimgLinks.IL1B
                }
                alt={"photo de " + team.name + " " + team.name2}
              />
            </a>
            <p className="Names" id={team.name + "P1"}>
              {team.name + " " + team.name2}
            </p>
            <p className="Jobs" id={team.name + "P2"}>
              {team.job}
            </p>
            <p className="Credits" id={team.name + "P2"}>
              {team.credits}
            </p>
            {GetLink(team.Lien)}
          </div>
        );
      } else {
        /*creator card template if creator has name + surname*/
        return (
          <div
            key={`${team.name}-${i}`}
            className="col-sm-3 col-md-2 col-lg-2 creator "
          >
            <a
              href={"/recherche#" + team.name + " " + team.name2}
              key={team.name + "Link"}
            >
              <img
                className="img-responsive creatora"
                src={
                  data.data1.UimgLinks.IL2 +
                  team.name +
                  data.data1.UimgLinks.IL1B
                }
                alt={"photo de " + team.name + " " + team.name2}
              />
            </a>
            <p className="Names" id={team.name + "P1"}>
              {team.name + " " + team.name2}
            </p>
            <p className="Jobs" id={team.name + "P2"}>
              {team.job}
            </p>
            <p className="Credits" id={team.name + "P2"}>
              {team.credits}
            </p>
            {GetLink(team.Lien)}
          </div>
        );
      }
    } else {
      /*creator card template if creator isn't an author*/
      /*creator card template if creator lacks surname*/
      /*console.log(team.name + " " + team.name2)*/

      if (team.name2 != "") {
        return (
          <div
            key={`${team.name}-${i}`}
            className="col-sm-3 col-md-2 col-lg-2 creator"
          >
            <img
              className="img-responsive creatora"
              src={
                data.data1.UimgLinks.IL2 +
                team.name2 +
                data.data1.UimgLinks.IL1B
              }
              alt={"photo de " + team.name + " " + team.name2}
            />

            <p className="Names" id={team.name + "P1"}>
              {team.name + " " + team.name2}
            </p>
            <p className="Jobs" id={team.name + "P2"}>
              {team.job}
            </p>
            <p className="Credits" id={team.name + "P2"}>
              {team.credits}
            </p>
            {GetLink(team.Lien)}
          </div>
        );
      } else {
        /*creator card template if creator has name + surname*/
        return (
          <div
            key={`${team.name}-${i}`}
            className="col-sm-3 col-md-2 col-lg-2 creator"
          >
            <img
              className="img-responsive creatora"
              src={
                data.data1.UimgLinks.IL2 + team.name + data.data1.UimgLinks.IL1B
              }
              alt={"photo de " + team.name + " " + team.name2}
            />

            <p className="Names" id={team.name + "P1"}>
              {team.name + " " + team.name2}
            </p>
            <p className="Jobs" id={team.name + "P2"}>
              {team.job}
            </p>
            <p className="Credits" id={team.name + "P2"}>
              {team.credits}
            </p>
            {GetLink(team.Lien)}
          </div>
        );
      }
    }
  }

  /*DOM*/
  return (
    <div id="createurs" className="text-center">
      {/*Tooltips parameters for hover links*/}
      <ReactTooltip
        id="UtipLink"
        place="bottom"
        animation="FadeIn"
        effect="solid"
        textColor="#fff"
        arrowColor="#222020"
        /*border="true"*/
        borderColor="#2CC78E"
        effect="solid"
        backgroundColor="#222020"
        key="tipForLinks"
      >
        En savoir plus
      </ReactTooltip>
      <div className="container text-center" id="thisToggle">
        {/*BACKGROUND ANIMATION*/}
        {DustAnim()}
        {MainAnim()}
        {/*Editors Section*/}
        {/*Collapsible toggling according to window width*/}
        <Collapsible
          open={checkWidth()}
          transitionTime="550"
          overflowWhenOpen="visible"
          easing="ease-in-out"
          triggerWhenOpen={
            <h1 className="creaTitle">{data.data2.createurs.crea1}</h1>
          }
          trigger={
            <h1 className="creaTitle">{"⇓ " + data.data2.createurs.crea1}</h1>
          }
        >
          {/*Editors's cards creation from Json data*/}
          <div className="row text-center justify-content-center ediSection">
            {data.data2
              ? data.data2.teamEdi.map((team, i) => tryAuth(team, i))
              : "Loading..."}
          </div>
        </Collapsible>
        {/*Authors Section*/}
        {/*Collapsible toggling according to window width*/}
        <Collapsible
          open={checkWidth()}
          transitionTime="550"
          overflowWhenOpen="visible"
          easing="ease-in-out"
          triggerWhenOpen={
            <h1 className="creaTitle">{data.data2.createurs.crea2}</h1>
          }
          trigger={
            <h1 className="creaTitle">{"⇓ " + data.data2.createurs.crea2}</h1>
          }
        >
          {/*Authors's cards creation from Json data*/}
          <div className="row text-center teamAuth">
            {data.data2
              ? data.data2.teamAuth
                  .sort(alphabetical)
                  .map((team, i) => tryAuth(team, i))
              : "Loading..."}
          </div>
        </Collapsible>
        {/*Illustrators Section*/}
        {/*Collapsible toggling according to window width*/}
        <Collapsible
          open={checkWidth()}
          transitionTime="550"
          overflowWhenOpen="visible"
          easing="ease-in-out"
          triggerWhenOpen={
            <h1 className="creaTitle">{data.data2.createurs.crea3}</h1>
          }
          trigger={
            <h1 className="creaTitle">{"⇓ " + data.data2.createurs.crea3}</h1>
          }
        >
          {/*Illustrators's cards creation from Json data*/}
          <div className="row text-center teamAuth teamIllus">
            {data.data2
              ? data.data2.teamIllus
                  .sort(alphabetical)
                  .map((team, i) => tryAuth(team, i))
              : "Loading..."}
          </div>
        </Collapsible>
        {/*Support Section*/}
        {/*Collapsible toggling according to window width*/}
        <Collapsible
          open={checkWidth()}
          transitionTime="550"
          overflowWhenOpen="visible"
          easing="ease-in-out"
          triggerWhenOpen={
            <h1 className="creaTitle">{data.data2.createurs.crea4}</h1>
          }
          trigger={
            <h1 className="creaTitle">{"⇓ " + data.data2.createurs.crea4}</h1>
          }
        >
          {/*Supporters's cards creation from Json data*/}
          <div className="row text-center supSection">
            {data.data2
              ? data.data2.teamOmbre.sort(alphabetical).map((team, i) => (
                  <div
                    key={`${team.name}-${i}`}
                    className="col-sm-3 col-md-2 col-lg-2 creator "
                  >
                    <img
                      className="img-responsive creatora"
                      src={
                        data.data1.UimgLinks.IL2 +
                        team.name2 +
                        data.data1.UimgLinks.IL1B
                      }
                      alt={"photo de " + team.name + " " + team.name2}
                    />
                    <p className="Names" id={team.name + "P1"}>
                      {team.name + " " + team.name2}
                    </p>
                    <p className="Jobs" id={team.name + "P2"}>
                      {team.job}
                    </p>
                    {GetLink(team.Lien)}
                  </div>
                ))
              : "Loading..."}
            {/*</div>*/}
          </div>
        </Collapsible>
      </div>
    </div>
  );
}
