import React, { useState } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { getURLByRouteName } from "./utils/routes";
import Education from "./views/Education/index";
import Experience from "./views/Experience/index";
import Portfolio from "./views/Portfolio/index";
import KnowledgeAndSkills from "./views/KnowledgeAndSkills/index";
import languages from "./utils/i18n/lang";
import AppContext from "./app_context";
import MainLayout from "./containers/MainLayout";
import { Language } from "./utils/ts/languages";

const App = () => {
  const [currentLanguage, setCurrentlanguage] = useState<string>("es");
  const [labels, setlabels] = useState<Language>(languages[currentLanguage]);

  const handleChange = (
    event: React.ChangeEvent<{
      name?: string | undefined;
      value: string;
    }>
  ) => {
    setCurrentlanguage(event.target.value);
    setlabels(languages[event.target.value]);
  };

  return (
    <AppContext.Provider
      value={{ labels, currentLanguage, setCurrentlanguage, handleChange }}
    >
      <BrowserRouter>
        <MainLayout>
          <Switch>
            <Route
              exact
              path={getURLByRouteName("education")}
              component={Education}
            />
            <Route
              exact
              path={getURLByRouteName("experience")}
              component={Experience}
            />
            <Route
              exact
              path={getURLByRouteName("portfolio")}
              component={Portfolio}
            />
            <Route
              exact
              path={getURLByRouteName("knowledgeAndSkills")}
              component={KnowledgeAndSkills}
            />
          </Switch>
        </MainLayout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
