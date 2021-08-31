import "@testing-library/jest-dom/extend-expect";
import { render, cleanup } from "@testing-library/react";
import Slider from "./index";

describe("<Slider/>", () => {
  afterEach(cleanup);

  const item = {
    id: 4,
    label: { es: "minim proident", en: "non" },
    percentage: 59,
  };

  test("Validate slider", () => {
    let component = render(<Slider item={item} />);

    expect(component.getByText(item.label.es)).toBeDefined();
    expect(component.getByTestId("percentage")).toHaveStyle(`width: 59%`);
  });
});
