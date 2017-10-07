describe("main Tests", function () {
  it("shouldCreate", function () {
    $env = { key1: "valueTest"};
    spyOn(module, "fitYourNeeds").and.returnValue("text");

    expect(main.create()).toBe("<h1>text valueTest</h1>");
  });
});
