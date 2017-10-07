describe("main Integration Tests", function () {
  it("shouldCreate", function () {
    expect(window.main.create()).toBe("<h1>TheTitle valueTest value1</h1>");
  });
});
