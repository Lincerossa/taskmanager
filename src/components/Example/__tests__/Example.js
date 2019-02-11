import React from "react";
import { render } from "react-testing-library";
import "jest-dom/extend-expect";

import Example from "../Example";

describe("Example", () => {
  test("Has expected text", () => {
    const { container } = render(<Example message="Test message" />);
    expect(container).toHaveTextContent("Test message");
  });
});
