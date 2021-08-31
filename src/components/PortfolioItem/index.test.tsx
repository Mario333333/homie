import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, cleanup } from "@testing-library/react";
import Context from "../../app_context";

import Portfolio from "./index";

describe("<Portfolio/>", () => {
  afterEach(cleanup);

  const item = {
    date: "Sat Dec 30 2017 07:45:51 GMT+0000 (UTC)",
    description: {
      es: "Laboris velit exercitation commodo esse laboris pr…lit cupidatat anim. Enim magna irure est eiusmod.",
      en: "Non fugiat esse sint ullamco. Lorem ea ut incididu… ad culpa nisi enim nostrud veniam enim pariatur.",
    },
    id: 3,
    image: "http://lorempixel.com/640/360/",
    title: { es: "tempor anim ad do in", en: "duis non amet adipisicing" },
  };

  test("Validate portfolio", () => {
    let component = render(
      <Context.Provider value={{ currentLanguage: "es" }}>
        <Portfolio item={item} />
      </Context.Provider>
    );

    const image = component.getByTestId("image-portfolio");
    expect(image).toHaveAttribute("src", item.image);
    expect(component.getByText(item.title.es)).toBeDefined();
    expect(component.getByText(item.date)).toBeDefined();
    expect(component.getByText(item.description.es)).toBeDefined();
  });
});
