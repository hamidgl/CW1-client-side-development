import * as React from "react";
import { render } from "@testing-library/react";
import Footer from "./";

// npm run test (to run the test)
// npm run test -- -u (to update snapshot test failure)

describe("<Footer />", () => {
  test("should render component", () => {
    const result = render(<Footer />);
    expect(result.container).toMatchSnapshot();
  });

  test("should display footer text", () => {
    const { queryByText } = render(<Footer />);
    const footerText = queryByText(
      "© 2021 VisitScotland. All rights reserved."
    );

    expect(footerText).toBeInTheDocument();
  });
});
