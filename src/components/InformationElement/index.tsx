import { isNil } from "lodash";
import React, { useContext } from "react";
import app_context from "../../app_context";
import { InformationElementData } from "../../utils/ts/componentTypes";
import Context from "../../utils/ts/contextType";

interface Props {
  icon: string;
  item: InformationElementData;
  type: string;
}

const InformationElement: React.FC<Props> = ({ icon, item, type }) => {
  const context: Context = useContext(app_context);
  const { currentLanguage } = context;

  return (
    <div className="info-element">
      <img
        data-testid="image-info"
        className="info-icon"
        src={icon}
        alt="icon"
      />{" "}
      <h2>
        {`${
          isNil(item.dateStart) === false
            ? new Date(item.dateStart).getFullYear()
            : ""
        }-${
          isNil(item.dateEnd) === false
            ? new Date(item.dateEnd).getFullYear()
            : "Actual"
        }`}{" "}
        {type === "job" && (
          <span>
            {" "}
            {`${Math.abs(
              Math.trunc(
                (new Date(new Date(item.dateStart)).getTime() -
                  new Date(
                    isNil(item.dateEnd) === false ? item.dateEnd : new Date()
                  ).getTime()) /
                  2.628e9
              )
            )} meses`}
          </span>
        )}
      </h2>
      <div className="info">
        <h1>
          {type === "job"
            ? currentLanguage === "es"
              ? item.title?.es
              : item.title?.en
            : item.school}
        </h1>
        <h2>{type === "job" ? item.company : item.location}</h2>

        {type === "job" && <h3>{item.company}</h3>}
        <p>
          {currentLanguage === "es"
            ? item.description?.es
            : item.description?.en}
        </p>
      </div>
    </div>
  );
};

export default InformationElement;
