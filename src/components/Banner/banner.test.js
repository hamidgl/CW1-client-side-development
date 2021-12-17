import * as React from "react";
import { render } from "@testing-library/react";
import Banner from "./";

describe("<Banner />", () => {
  test("should render component", () => {
    const result = render(<Banner />);
    expect(result.container).toMatchSnapshot();
  });
});
