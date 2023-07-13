/******This Universe******/
import ReactTooltip from "react-tooltip";

/***COMPONENTS***/
import { SetUniverse, SetBackground } from "../components/Appendix";
import {
  SetReviews,
  SetBuyLinks,
  SetPrize,
  SetSample,
  SetTags,
  SortBooks,
  SortTargetedBooks,
  dateSort,
} from "../components/SortBooks";

/***COMPONENT***/
export default function ThisUniverse(data) {
  /***Check Selected Universe***/
  SetUniverse();

  /***DOM***/
  return (
    <div id="thisUniverse" className="text-center">
      {SetBackground()}
      {/*Select Title and Intro paragraph according to selected universe*/}
      <div className="container text-center" id="thisToggle">
        {(() => {
          let props = data.data2.univers;
          for (let i in props) {
            let thisUL = props[i].link;
            let thisUD = props[i].description;
            let targetU = window.location.pathname;
            if ("/" + thisUL === targetU) {
              let thisU = props[i].name;
              let thisTitle = thisU;
              let thisIntro = thisUD;
              return (
                <div>
                  <h1 className="UTitle">{thisTitle}</h1>
                  <p className="UP">{thisIntro}</p>
                </div>
              );
            }
          }
        })()}
        <div className="row text-center justify-content-center">
          {/*Dynamic creation from Json data*/}
          {data.data3.Livres.sort(dateSort).map((thatBook, i) =>
            SortBooks(thatBook, i, data)
          )}
        </div>{" "}
      </div>
      {/*Stylize Tooltips for Reviews*/}
      <ReactTooltip
        id={"UtipReview"}
        place="left"
        animation="FadeIn"
        effect="solid"
        textColor="var(--greenish)"
        arrowColor="var(--blackish)"
        borderColor="var(--greenish)"
        effect="solid"
        backgroundColor="black"
        key={"tipReview"}
      >
        Avis
      </ReactTooltip>
    </div>
  );
}
