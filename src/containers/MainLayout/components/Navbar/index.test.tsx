import "@testing-library/jest-dom/extend-expect";
import { render, cleanup, fireEvent, waitFor } from "@testing-library/react";
import Navbar from "./index";
import Context from "../../../../app_context";
import { Router, Route, Switch } from "react-router-dom";
import { createMemoryHistory } from "history";
import { act } from "react-dom/test-utils";

describe("<Navbar/>", () => {
  const history = createMemoryHistory();
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

  test("Validate  navbar content", async () => {
    let component = render(
      <Context.Provider value={{ labels }}>
        <Router history={history}>
          <Switch>
            <Route exact path="/">
              <Navbar />
            </Route>
          </Switch>
        </Router>
      </Context.Provider>
    );
    const education = component.getByText(labels.education);
    const experience = component.getByText(labels.experience);
    expect(education).toBeDefined();
    expect(education).toHaveClass("active");
    expect(experience).toBeDefined();
    expect(component.getByText(labels.portfolio)).toBeDefined();
    expect(component.getByText(labels.knowledge_skills)).toBeDefined();
  });

  test("change route to experience", async () => {
    let component = render(
      <Context.Provider value={{ labels }}>
        <Navbar />
      </Context.Provider>
    );

    const experience = component.getByText(labels.experience);

    act(() => {
      fireEvent(
        experience,
        new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
        })
      );
    });
    expect(experience).toBeDefined();
    await waitFor(() => expect(experience).toHaveClass("active"));
  });

  test("change route to portfolio", async () => {
    let component = render(
      <Context.Provider value={{ labels }}>
        <Navbar />
      </Context.Provider>
    );
    const portfolio = component.getByText(labels.portfolio);
    act(() => {
      fireEvent(
        portfolio,
        new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
        })
      );
    });
    expect(portfolio).toBeDefined();
    await waitFor(() => expect(portfolio).toHaveClass("active"));
  });

  test("change route to knowledge_skills", async () => {
    let component = render(
      <Context.Provider value={{ labels }}>
        <Navbar />
      </Context.Provider>
    );
    const knowledgeSkills = component.getByText(labels.knowledge_skills);
    act(() => {
      fireEvent(
        knowledgeSkills,
        new MouseEvent("click", {
          bubbles: true,
          cancelable: true,
        })
      );
    });
    expect(knowledgeSkills).toBeDefined();
    await waitFor(() => expect(knowledgeSkills).toHaveClass("active"));
  });
});
