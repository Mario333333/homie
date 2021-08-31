import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import app_context from "../../../../app_context";
import Context from "../../../../utils/ts/contextType";

const Navbar = () => {
  let history = useHistory();
  const [route, setRoute] = useState(history?.location?.pathname);
  const context: Context = useContext(app_context);
  const { labels } = context;

  return (
    <nav className="menu">
      <ul>
        <li>
          <button
            onClick={() => {
              history?.push("/");
              setRoute("/");
            }}
            className={route === "/" ? "active" : ""}
          >
            {labels?.education}
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              history?.push("/experience");
              setRoute("/experience");
            }}
            className={route === "/experience" ? "active" : ""}
          >
            {labels?.experience}
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              history?.push("/portfolio");
              setRoute("/portfolio");
            }}
            className={route === "/portfolio" ? "active" : ""}
          >
            {labels?.portfolio}
          </button>
        </li>
        <li>
          <button
            onClick={() => {
              history?.push("/knowledgeAndSkills");
              setRoute("/knowledgeAndSkills");
            }}
            className={route === "/knowledgeAndSkills" ? "active" : ""}
          >
            {labels?.knowledge_skills}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
