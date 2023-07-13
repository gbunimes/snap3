/******INTRO MODULE******/

import ReactTooltip from "react-tooltip";

/***COMPONENTS***/
import { checkWidth2 } from "../components/Appendix";

/***COMPONENT***/
export default function Intro(data) {
  /*DOM*/
  return (
    <section id="intro">
      <div className="intro" id="thisToggle">
        <div className="introLeft">
          {/*Large Animated Logo*/}
          <img
            fetchpriority="high"
            src={
              data.data1.UimgLinks.IL0 +
              data.data1.ressources.logo2 +
              data.data1.UimgLinks.IL1B
            }
            className="img-responsive logoFull"
            alt={"Logo de " + data.data1.nom}
          />{" "}
          {/*Introduction Text*/}
          <h1 className="text-center">
            {data.data2 ? data.data2.nda.description : "loading..."}
          </h1>
        </div>

        <div className="introRightWrapper">
          <a
            href={data.data1 ? data.data1.links.menu2L : "loading..."}
            className="page-scroll IntroLink"
          >
            <h2 className="firsth2">Nos Univers</h2>
          </a>
          {/*Universes selector*/}
          <div className="pagination2">
            {/*Dynamic creation from Json data*/}
            {data.data2.univers.map((univers, i) => (
              <a
                href={univers.link}
                key={univers.name + "a"}
                data-tip
                data-for={"Utip-" + univers.link}
              >
                <div className="aAnim">
                  <span></span>
                </div>
              </a>
            ))}
            {/*Universe slideshow links tooltips*/}
            {data.data2.univers.map(
              (univers, i) => (
                {
                  /*Dynamic creation from Json data*/
                },
                (
                  <ReactTooltip
                    id={"Utip-" + univers.link}
                    place="top"
                    animation="FadeIn"
                    data-offset="{'top':5}"
                    effect="solid"
                    textColor="#fff"
                    arrowColor="#222020"
                    /*border="true"*/
                    borderColor="#2CC78E"
                    effect="solid"
                    backgroundColor="#222020"
                    key={"tipFor-" + univers.link}
                  >
                    {univers.name}
                  </ReactTooltip>
                )
              )
            )}
          </div>
          {/*Display last books*/}
          <div className="introRight">
            {/*Number of books diplayed in intro component depending on window width*/}
            {checkWidth2(data)}
          </div>
        </div>
      </div>
    </section>
  );
}
