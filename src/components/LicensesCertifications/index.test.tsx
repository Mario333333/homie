import empty_image from "../../assets/images/empty_image.png";
import "@testing-library/jest-dom/extend-expect";
import { render, cleanup, waitFor } from "@testing-library/react";
import LicensesCertifications from "./index";
import Context from "../../app_context";

describe("<LicensesCertifications/>", () => {
  afterEach(cleanup);

  const item = {
    description: {
      es: "Non dolore reprehenderit ex esse laborum velit pariatur voluptate laborum.",
      en: "Duis Lorem elit nisi pariatur velit.",
    },
    id: 3,
    key: "5fc74288db5900b8c650ef80",
    registred: "Tue Nov 22 2016 07:30:16 GMT+0000",
    title: {
      es: "proident eiusmod sunt commodo",
      en: "aliquip anim sunt deserunt in aliquip",
    },
  };

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
    applied_on: "Aplicado en",
    id_credential: "ID Credencial",
  };

  test("Validate Licenses and certifications", async () => {
    let component = render(
      <Context.Provider value={{ currentLanguage: "es", labels }}>
        <LicensesCertifications image={empty_image} item={item} />
      </Context.Provider>
    );

    await waitFor(() => {
      const logoImg = component.getByTestId("image-lc");
      expect(logoImg).toHaveAttribute("src", empty_image);
      expect(component.getByText(item.description.es)).toBeDefined();
      expect(component.getByText(item.title.es)).toBeDefined();
      expect(
        component.getByText(
          `${labels.applied_on} ${new Date(item.registred).toLocaleString(
            "default",
            {
              month: "long",
            }
          )} ${new Date(item.registred).getFullYear()}`
        )
      ).toBeDefined();
      expect(
        component.getByText(`${labels.id_credential} ${item.key}`)
      ).toBeDefined();
    });
  });
});
