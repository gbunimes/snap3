/******UNIVERS******/
import ReactTooltip from "react-tooltip";

/***COMPONENTS***/
import {
  MainAnim,
  TerraAnim,
  FolieAnim,
  FleurRougeAnim,
  FuturiaAnim,
} from "../components/UniversAnim";

/***COMPONENT***/
export default function Univers(data) {
  /*DOM*/
  return (
    <div className="univers">
      <div className="container" >
        <div className="slideshow" >
          {/*Dynamic creation from Json data*/}
          {data.data2.univers.map(
            (univers, i) => (
              {
                /*Universe Slides*/
              },
              (
                <div
                  id={"-" + univers.link}
                  className="slide"
                  key={univers.name + "S"}
                >
                  {/*Universe Link Wrapper*/},
                  <a className="linkToU" href={univers.link}>
                    {/*Universe Title*/}
                    <h1 id={univers.link + "H1"}>{univers.name}</h1>
                    {/*Universe Description*/}
                    <p>{univers.description}</p>
                    {/*Universe invitation button*/}
                    <div className={univers.link + "H2"}>
                      <h2>{univers.accroche}</h2>
                    </div>
                  </a>
                  {/*Select Background Anim according to selected Universe*/}
                  {(() => {
                    if (
                      univers.name == "Mémoria" ||
                      univers.name == "Onyria" ||
                      univers.name == "Chrysalis" ||
                      univers.name == "Pousse d'Absinthe" ||
                      univers.name == "Hors Collection"
                    ) {
                      /*Firefly Anim*/
                      return MainAnim();
                    } else if (univers.name == "Terra Urbana") {
                      /*Rain Anim*/
                      return TerraAnim();
                    } else if (univers.name == "L'Antre de la Folie") {
                      /*Hypno spiral Anim*/
                      return FolieAnim();
                    } else if (
                      univers.name == "Fleur d'Absinthe" ||
                      univers.name == "Rouge d'Absinthe"
                    ) {
                      /*Bokeh Anim*/
                      return FleurRougeAnim();
                    } else if (univers.name == "Futuria") {
                      /*Sci-fy triangles Anim*/
                      return FuturiaAnim();
                    }
                  })()}
                  }{/*Universe Background*/},
                  <img
                    className="img-responsive imgU"
                    src={
                      data.data1.UimgLinks.IL1 +
                      univers.name +
                      data.data1.UimgLinks.IL1B
                    }
                    alt={"Image d'illustration de l'univers " + univers.name}
                  />
                </div>
              )
            )
          )}
        </div>
        {/*Universes selector*/},
        <div className="pagination">
          {/*Dynamic creation from Json data*/}
          {data.data2.univers.map(
            (univers, i) => (
              {
                /*Universe slideshow links*/
              },
              (
                <a
                  href={"#-" + univers.link}
                  key={univers.name + "a"}
                  data-tip
                  data-for={"Utip-" + univers.link}
                >
                  <div className="aAnim">
                    <span></span>
                  </div>
                </a>
              )
            )
          )}

          {/*Dynamic creation from Json data*/}
          {data.data2.univers.map(
            (univers, i) => (
              {
                /*Universe slideshow links tooltips*/
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
      </div>
    </div>
  );
}
