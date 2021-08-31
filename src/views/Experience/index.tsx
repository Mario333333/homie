import briefcase from "../../assets/svg/briefcase.svg";
import ellipse from "../../assets/svg/ellipse.svg";
import InformationElement from "../../components/InformationElement";
import useAxios from "../../hooks/useAxios";
import { InformationElementData } from "../../utils/ts/componentTypes";

const Experience = () => {
  const { data, error } = useAxios<Array<InformationElementData>>("jobs");

  return (
    <div className="experience-container">
      {error === false &&
        data !== null &&
        data.map((item: InformationElementData, index: number) => {
          return (
            <InformationElement
              icon={index > 0 ? ellipse : briefcase}
              item={item}
              type={"job"}
              key={`job-${item.id}`}
            />
          );
        })}
    </div>
  );
};

export default Experience;
