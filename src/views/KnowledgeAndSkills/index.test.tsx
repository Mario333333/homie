import KnowledgeAndSkills from "./index";
import "@testing-library/jest-dom/extend-expect";
import { render, cleanup } from "@testing-library/react";
import { Router, Route, Switch } from "react-router-dom";
import { createMemoryHistory } from "history";
import Context from "../../app_context";

const history = createMemoryHistory();

describe("KnowledgeAndSkills", () => {
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

  test("knowledgeAndSkills snapshot", () => {
    const { asFragment } = render(<KnowledgeAndSkills />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("knowledgeAndSkills defined component and content", () => {
    history.push("/knowledgeAndSkills");
    const component = render(
      <Context.Provider value={{ labels }}>
        <Router history={history}>
          <Switch>
            <Route exact path="/knowledgeAndSkills">
              <KnowledgeAndSkills />
            </Route>
          </Switch>
        </Router>
      </Context.Provider>
    );
    expect(component).toBeDefined();
    expect(component.getByText(labels.languages)).toBeDefined();
    expect(component.getByText(labels.skills)).toBeDefined();
    expect(component.getByText(labels.interests)).toBeDefined();
    const paintImage = component.getByTestId("paint");
    expect(paintImage).toHaveAttribute("src", "paint.svg");

    const gameImage = component.getByTestId("game");
    expect(gameImage).toHaveAttribute("src", "game.svg");

    const musicImage = component.getByTestId("music");
    expect(musicImage).toHaveAttribute("src", "music.svg");

    const ballImage = component.getByTestId("ball");
    expect(ballImage).toHaveAttribute("src", "ball.svg");

    const moviesImage = component.getByTestId("movies");
    expect(moviesImage).toHaveAttribute("src", "movies.svg");
  });
});
