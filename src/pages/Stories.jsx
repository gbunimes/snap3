/******STORY******/

/***COMPONENTS***/
import { DustAnim, MainAnim } from "../components/UniversAnim";
import story1 from "../data/story1.json";

/***COMPONENT***/
export default function Stories(data) {
  let thoseStories = [story1];

  /*DOM*/
  return (
    <div className="story0">
      <div className="storyWrap2" id="thisToggle">
        {DustAnim()}
        <div className="top1">
          <img
            fetchpriority="high"
            src="img/cog.webp"
            className=" cog img-responsive"
            alt="image d'onde musicale analogique"
          />{" "}
          <h1>{data.data.stories.titre}</h1>
          <img
            fetchpriority="high"
            src="img/wave.webp"
            className=" wave img-responsive"
            alt="image d'onde musicale analogique"
          />{" "}
        </div>
        <div className="top2">
          <h2>{data.data.stories.argu}</h2>
          <h2 className="argu2">{data.data.stories.argu2 + " "}</h2>
        </div>
        <div className="cardWrapper">
          {thoseStories.map((story, i) => {
            return (
              <a href={"/" + story.Link} key={story.Titre + "Link" + i}>
                <div className="StoryCard">
                  <p className="cardTitle">{story.Titre}</p>
                  <p className="cardAuthor">{story.Auteur}</p>
                  <p className="readingTime">{"🕑 " + story.Time}</p>
                  <div className="tagWrap">
                    {story.tags.map((tag, i) => {
                      return (
                        <p key={"tagStory" + i} className="newTag newTag2">
                          {tag}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
