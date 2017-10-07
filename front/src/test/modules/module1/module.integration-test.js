describe("module1 Integration Tests", function () {
  beforeEach(function () {
    loadFixtures("modules/module1/module.html");
  });

  it("shouldHaveH1WithTitle", function () {
    $j("#toggle").click();
    expect($j("#result")).toHaveText("TheTitle valueTest");
  });
});
