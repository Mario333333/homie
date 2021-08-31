interface Routes {
  education: {
    url: string;
  };
  portfolio: {
    url: string;
  };
  experience: {
    url: string;
  };
  knowledgeAndSkills: {
    url: string;
  };
}

const routes: Routes = {
  education: {
    url: "/",
  },
  portfolio: {
    url: "/portfolio",
  },
  experience: {
    url: "/experience",
  },
  knowledgeAndSkills: {
    url: "/knowledgeAndSkills",
  },
};

export const getURLByRouteName = (
  routeName: "education" | "portfolio" | "experience" | "knowledgeAndSkills"
) => {
  let route = routes[routeName],
    url = route ? route.url : "/";
  return url;
};
