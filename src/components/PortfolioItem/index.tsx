import React, { useContext } from "react";
import app_context from "../../app_context";
import { PortfolioData } from "../../utils/ts/componentTypes";
import Context from "../../utils/ts/contextType";

interface Props {
  item: PortfolioData;
}

const PortfolioItem: React.FC<Props> = ({ item }) => {
  const context: Context = useContext(app_context);
  const { currentLanguage } = context;

  return (
    <div className="potfolio-element">
      <div className="image-container ">
        <img data-testid="image-portfolio" src={item.image} alt="info-img" />
      </div>

      <h2>{currentLanguage === "es" ? item.title?.es : item.title?.en}</h2>
      <span>{item.date}</span>
      <p>
        {currentLanguage === "es" ? item.description?.es : item.description?.en}
      </p>
    </div>
  );
};

export default PortfolioItem;
