import { useContext } from "react";
import Slider from "../../components/Slider";
import app_context from "../../app_context";
import useAxios from "../../hooks/useAxios";
import paint from "../../assets/svg/paint.svg";
import game from "../../assets/svg/game.svg";
import ball from "../../assets/svg/ball.svg";
import music from "../../assets/svg/music.svg";
import movies from "../../assets/svg/movies.svg";
import { SlideData } from "../../utils/ts/componentTypes";
import Context from "../../utils/ts/contextType";

const KnowledgeAndSkills = () => {
  const { data: languages, error: errorLanguages } =
    useAxios<Array<SlideData>>("languages");
  const { data: skills, error: errorSkills } =
    useAxios<Array<SlideData>>("skills");

  const context: Context = useContext(app_context);
  const { labels } = context;

  return (
    <div className="knowledge-skills-container">
      <div className="section">
        <h2 className="title-section">{labels?.languages}</h2>
        {errorLanguages === false &&
          languages !== null &&
          languages.map((item: SlideData, index: number) => {
            return <Slider item={item} key={`languages-${index}`} />;
          })}
      </div>
      <div className="section">
        <h2 className="title-section">{labels?.skills}</h2>
        {errorSkills === false &&
          skills !== null &&
          skills.map((item: SlideData, index: number) => {
            return <Slider item={item} key={`skills-${index}`} />;
          })}
      </div>
      <div className="section interests">
        <h2 className="title-section">{labels?.interests}</h2>
        <div>
          <img data-testid="paint" src={paint} alt="paint" />
          <img data-testid="game" src={game} alt="game" />
          <img data-testid="music" src={music} alt="music" />
          <img data-testid="ball" src={ball} alt="ball" />
          <img data-testid="movies" src={movies} alt="movies" />
        </div>
      </div>
    </div>
  );
};

export default KnowledgeAndSkills;
