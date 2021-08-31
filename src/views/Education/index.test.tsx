import Education from "./index";
import "@testing-library/jest-dom/extend-expect";
import { render, cleanup, waitFor } from "@testing-library/react";
import { Router, Route, Switch } from "react-router-dom";
import { createMemoryHistory } from "history";
import Context from "../../app_context";

const history = createMemoryHistory();

describe("Education", () => {
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

  test("education snapshot", () => {
    const { asFragment } = render(<Education />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("education defined component and content", async () => {
    history.push("/");
    const component = render(
      <Context.Provider value={{ labels }}>
        <Router history={history}>
          <Switch>
            <Route exact path="/">
              <Education />
            </Route>
          </Switch>
        </Router>
      </Context.Provider>
    );

    await waitFor(() => {
      expect(component).toBeDefined();
      expect(component.getByText(labels.licenses_certifications)).toBeDefined();
    });
  });
});
