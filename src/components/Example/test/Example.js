import React from "react";
import { render } from "react-testing-library";

import Example from "../Example";

describe("Example", () => {
  test("Test", () => {
    expect(render(<Example />));
  });
});
