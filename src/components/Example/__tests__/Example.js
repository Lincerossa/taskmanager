import React from "react";
import { render } from "react-testing-library";
import "jest-dom/extend-expect";

import Example from "../Example";

describe("Example", () => {
  test("Test", () => {
    expect(render(<Example message="Test message" />));
  });
});
