import { useContext } from "react";
import image_font from "../../../../assets/svg/image_font.svg";
import profile from "../../../../assets/images/sayo-garcia.png";
import phone from "../../../../assets/svg/phone.svg";
import linkedin from "../../../../assets/svg/linkedin.svg";
import email from "../../../../assets/svg/email.svg";
import es from "../../../../assets/svg/es.svg";
import app_context from "../../../../app_context";
import { UserData } from "../../../../utils/ts/componentTypes";
import Context from "../../../../utils/ts/contextType";

interface Props {
  data: UserData | null;
  error: boolean;
}

const Aside: React.FC<Props> = ({ data, error }) => {
  const context: Context = useContext(app_context);
  const { labels, currentLanguage, handleChange } = context;

  return (
    <aside className="aside">
      {error === false && data !== null && (
        <>
          <div className="image-container">
            <img className="vector" alt="vector" src={image_font} />
            <img
              data-testid="image-profile"
              className="profile"
              alt="profile"
              src={profile}
            />
          </div>
          <div className="language aside-margin">
            <img src={es} alt="flag" />
            <select
              defaultValue="es"
              onChange={handleChange}
              className="language"
            >
              <option value={"es"} className="language">
                Es
              </option>
              <option value={"en"} className="language">
                En
              </option>
            </select>
          </div>
          <h1>{`${data.firstName} ${data.lastName}`}</h1>
          <div className="aside-margin">
            <h2>{labels?.about_me}</h2>
            <p>
              {currentLanguage === "es" ? data?.aboutMe?.es : data?.aboutMe?.en}
            </p>
          </div>
          <div className="aside-margin">
            <h2>{labels?.contact}</h2>
            <p>
              <img src={phone} alt="phone"></img>

              {data?.contact?.phone}
            </p>
            <p>
              <img src={email} alt="email"></img>

              {data?.contact?.email}
            </p>
            <p>
              <img src={linkedin} alt="linkedin"></img>

              {data?.contact?.linkedin}
            </p>
          </div>
        </>
      )}
    </aside>
  );
};

export default Aside;
