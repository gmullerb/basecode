describe("module1 Tests", function () {
  it("shouldFitYourNeeds", function () {
    $env = { key2: "valueTest1"};

    expect(module.fitYourNeeds()).toBe("TheTitle valueTest1");
  });

  it("shouldShow", function () {
    var element = {};
    $env = { key2: "valueTest1"};
    spyOn(document, "getElementById").and.returnValue(element);

    module.show();

    expect(document.getElementById).toHaveBeenCalledWith("main");
    expect(element.innerHTML).toBe("<h1 id='result'>TheTitle valueTest1</h1>");
  });
});
