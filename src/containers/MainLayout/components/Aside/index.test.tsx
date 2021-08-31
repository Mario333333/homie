import "@testing-library/jest-dom/extend-expect";
import { render, cleanup } from "@testing-library/react";
import Aside from "./index";
import Context from "../../../../app_context";

describe("<Aside/>", () => {
  afterEach(cleanup);

  const data = {
    aboutMe: {
      es: "Eiusmod nostrud consectetur qui nulla magna nulla …im exercitation consequat exercitation do mollit.",
      en: "Aliqua ea proident adipisicing exercitation esse d…lpa enim. Cupidatat amet labore laboris pariatur.",
    },
    birthDate: "Wed Jan 11 2006 09:06:17 GMT+0000 (UTC)",
    contact: {
      phone: "(954) 495-3327",
      email: "bruce.kaufman@test.test",
      linkedin: "https://www.linkedin.com/feed/",
    },
    firstName: "Bruce",
    lastName: "Kaufman",
    picture: "http://placehold.it/32x32",
  };

  test("Validate aside", async () => {
    let component = render(
      <Context.Provider value={{ currentLanguage: "es" }}>
        <Aside data={data} error={false} />
      </Context.Provider>
    );

    const image = component.getByTestId("image-profile");
    expect(image).toHaveAttribute("src", "sayo-garcia.png");
    expect(component.getByText(data.aboutMe.es)).toBeDefined();
    expect(component.getByText(data.contact.phone)).toBeDefined();
    expect(component.getByText(data.contact.email)).toBeDefined();
    expect(component.getByText(data.contact.linkedin)).toBeDefined();
    expect(
      component.getByText(`${data.firstName} ${data.lastName}`)
    ).toBeDefined();
  });
});
