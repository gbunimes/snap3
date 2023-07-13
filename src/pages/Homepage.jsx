/******HOMEPAGE******/

/***COMPONENTS***/
import Intro from "../components/Intro";


/***COMPONENT***/
export default function Homepage(data) {
  /*DOM*/
  return (
    <div>
      <div className="homepage">
        <Intro data1={data.data1} data2={data.data2} data3={data.data3} />
      </div>
    </div>
  );
}
