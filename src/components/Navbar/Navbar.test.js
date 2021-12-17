import * as React from "react";
import { render } from "@testing-library/react";
import Navbar from "./";

describe("<Navbar />", () => {
  test("should render component", () => {
    const result = render(<Navbar />);
    expect(result.container).toMatchSnapshot();
  });
});
