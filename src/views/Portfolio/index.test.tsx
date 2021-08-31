import Portfolio from "./index";
import "@testing-library/jest-dom/extend-expect";
import { render, cleanup } from "@testing-library/react";
import { Router, Route, Switch } from "react-router-dom";
import { createMemoryHistory } from "history";
import { act } from "react-dom/test-utils";
const history = createMemoryHistory();

describe("Portfolio", () => {
  afterEach(cleanup);

  test("portfolio snapshot", () => {
    const { asFragment } = render(<Portfolio />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("portfolio defined component and content", () => {
    act(() => {
      history.push("/portfolio");
      const component = render(
        <Router history={history}>
          <Switch>
            <Route exact path="/portfolio">
              <Portfolio />
            </Route>
          </Switch>
        </Router>
      );
      expect(component).toBeDefined();
      component.debug();
    });
  });
});
