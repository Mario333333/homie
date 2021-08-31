import empty_image from "../../assets/images/empty_image.png";
import { isNil } from "lodash";
import "@testing-library/jest-dom/extend-expect";
import { render, cleanup, waitFor } from "@testing-library/react";
import InformationElement from "./index";
import Context from "../../app_context";

describe("<InformationElement/>", () => {
  afterEach(cleanup);
  const index = 0;
  const schoolItem = {
    dateEnd: "Mon Nov 23 2015 07:30:16 GMT+0000",
    dateStart: "Sat Nov 26 2016 07:30:16 GMT+0000",
    description: {
      es: "Aute quis do culpa consequat fugiat esse ut cupidatat culpa enim.",
      en: "Laborum eu tempor do ad.",
    },
    id: 1,
    location: "Dubois, Ohio",
    school: "consequat voluptate aute",
  };

  const jobItem = {
    company: "Ecrater",
    dateEnd: "Thu Nov 24 2016 07:30:16 GMT+0000",
    dateStart: "Fri Nov 24 2017 07:30:16 GMT+0000",
    id: 2,
    title: { es: "Fullstack developer", en: "Desarrollador fullstack" },
  };

  const dateEndSchool = new Date(schoolItem.dateEnd).getFullYear();
  const dateStartSchool = new Date(schoolItem.dateStart).getFullYear();

  const dateEndJob = new Date(jobItem.dateEnd).getFullYear();
  const dateStartJob = new Date(jobItem.dateStart).getFullYear();
  const duration = `${Math.abs(
    Math.trunc(
      (new Date(new Date(jobItem.dateStart)).getTime() -
        new Date(
          isNil(jobItem.dateEnd) === false ? jobItem.dateEnd : new Date()
        ).getTime()) /
        2.628e9
    )
  )} meses`;

  test("Validate school type", async () => {
    let component = render(
      <Context.Provider value={{ currentLanguage: "es" }}>
        <InformationElement
          icon={index > 0 ? empty_image : empty_image}
          item={schoolItem}
          type="school"
        />
      </Context.Provider>
    );

    await waitFor(() => {
      expect(
        component.getByText(`${dateStartSchool}-${dateEndSchool}`)
      ).toBeDefined();
      expect(component.getByText(schoolItem.school)).toBeDefined();
      expect(component.getByText(schoolItem.location)).toBeDefined();
      expect(component.getByText(schoolItem.description.es)).toBeDefined();
      const logoImg = component.getByTestId("image-info");
      expect(logoImg).toHaveAttribute("src", empty_image);
    });
  });

  test("Validate job type", () => {
    let component = render(
      <Context.Provider value={{ currentLanguage: "es" }}>
        <InformationElement
          icon={index > 0 ? empty_image : empty_image}
          item={jobItem}
          type="job"
        />
      </Context.Provider>
    );

    expect(component.getByText(`${dateStartJob}-${dateEndJob}`)).toBeDefined();
    expect(component.getByText(jobItem.title.es)).toBeDefined();
    expect(component.getByText(duration)).toBeDefined();
    expect(component.getAllByText(jobItem.company)).toBeDefined();
    const logoImg = component.getByTestId("image-info");
    expect(logoImg).toHaveAttribute("src", empty_image);
  });
});
