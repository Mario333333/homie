import React, { useContext } from "react";
import app_context from "../../app_context";
import { LicensesCertificationsData } from "../../utils/ts/componentTypes";
import Context from "../../utils/ts/contextType";

interface Props {
  item: LicensesCertificationsData;
  image: string;
}

const LicensesCertifications: React.FC<Props> = ({ item, image }) => {
  const context: Context = useContext(app_context);
  const { currentLanguage, labels } = context;
  return (
    <div className="licenses-certifications">
      <div className="information">
        <div className="document-container">
          <img data-testid="image-lc" src={image} alt="document" />
        </div>

        <div className="description">
          <h3 className="title">
            {currentLanguage === "es"
              ? item.description?.es
              : item.description?.en}
          </h3>
          <h4 className="title">
            {currentLanguage === "es" ? item.title?.es : item.title?.en}
          </h4>
          <p>{`${labels?.applied_on} ${new Date(item.registred).toLocaleString(
            "default",
            {
              month: "long",
            }
          )} ${new Date(item.registred).getFullYear()}`}</p>
          <p className="id-number">{`${labels?.id_credential} ${item.key}`}</p>
        </div>
      </div>
    </div>
  );
};

export default LicensesCertifications;
