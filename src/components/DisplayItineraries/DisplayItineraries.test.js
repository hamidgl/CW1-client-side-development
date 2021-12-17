import * as React from "react";
import { render } from "@testing-library/react";
import DisplayItineraries from "./";

describe("<DisplayItineraries />", () => {
  test("should render component", () => {
    const result = render(<DisplayItineraries />);
    expect(result.container).toMatchSnapshot();
  });
});
