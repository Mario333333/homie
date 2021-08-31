import { useContext } from "react";
import book from "../../assets/svg/book.svg";
import empty_image from "../../assets/images/empty_image.png";
import ellipse from "../../assets/svg/ellipse.svg";
import InformationElement from "../../components/InformationElement";
import LicensesCertifications from "../../components/LicensesCertifications";
import useAxios from "../../hooks/useAxios";
import app_context from "../../app_context";
import {
  InformationElementData,
  LicensesCertificationsData,
} from "../../utils/ts/componentTypes";
import Context from "../../utils/ts/contextType";

const Education = () => {
  const context: Context = useContext(app_context);
  const { labels } = context;
  const { data: informationElementData, error: educationError } =
    useAxios<Array<InformationElementData>>("education");
  const { data: certificationsData, error: certificationsError } =
    useAxios<Array<LicensesCertificationsData>>("certifications");

  return (
    <div className="education-container">
      {educationError === false &&
        informationElementData !== null &&
        informationElementData.map(
          (item: InformationElementData, index: number) => {
            return (
              <InformationElement
                icon={index > 0 ? ellipse : book}
                item={item}
                type="school"
                key={`school-${item.id}`}
              />
            );
          }
        )}
      <h2 className="title">{labels?.licenses_certifications}</h2>
      {certificationsError === false &&
        certificationsData !== null &&
        certificationsData.map(
          (item: LicensesCertificationsData, index: number) => {
            return (
              <LicensesCertifications
                key={`LC-${index}`}
                item={item}
                image={empty_image}
              />
            );
          }
        )}
    </div>
  );
};

export default Education;
