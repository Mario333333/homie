import Experience from "./index";
import "@testing-library/jest-dom/extend-expect";
import { render, cleanup } from "@testing-library/react";
import { Router, Route, Switch } from "react-router-dom";
import { createMemoryHistory } from "history";
import Context from "../../app_context";

const history = createMemoryHistory();

describe("Experience", () => {
  afterEach(cleanup);
  const labels = {
    about_me: "Acerca de mi",
    contact: "Contacto",
    education: "Educación",
    experience: "Experiencia",
    portfolio: "Portafolio",
    knowledge_skills: "Conocimientos y habilidades",
    languages: "Idiomas",
    skills: "Habilidades",
    licenses_certifications: "Licencias y certificaciones",
    interests: "Intereses",
  };

  test("experience snapshot", () => {
    const { asFragment } = render(<Experience />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("experience defined component", () => {
    history.push("/experience");
    const {} = render(
      <Context.Provider value={{ labels }}>
        <Router history={history}>
          <Switch>
            <Route exact path="/experience">
              <Experience />
            </Route>
          </Switch>
        </Router>
      </Context.Provider>
    );
  });
});
