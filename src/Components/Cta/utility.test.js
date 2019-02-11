const CC = require("./utility");

describe("test", () => {
  test("test before commit", () => {
    const a = "COMPOSELLO";
    expect(CC(a)).toEqual("COMPOSELLO");
  });
});
