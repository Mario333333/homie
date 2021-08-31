import React, { useContext } from "react";
import app_context from "../../app_context";
import { SlideData } from "../../utils/ts/componentTypes";
import Context from "../../utils/ts/contextType";

interface Props {
  item: SlideData;
}

const Slider: React.FC<Props> = ({ item }) => {
  const context: Context = useContext(app_context);
  const { currentLanguage = "es" } = context;
  return (
    <div className="ability-item">
      <h2 className="title">
        {currentLanguage === "es" ? item?.label?.es : item?.label?.en}
      </h2>
      <div className="total-range">
        <span
          data-testid="percentage"
          style={{ width: `${item?.percentage}%` }}
        />
      </div>
    </div>
  );
};

export default Slider;
