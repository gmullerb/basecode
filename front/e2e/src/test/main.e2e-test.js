describe("Main test", () => {
  it("shouldHaveH1WithTitle", (done) => {
    e2e.browser.wait(e2e
      .until.titleContains("Basecode"), e2e.TIMEOUT_BROWSER)
      .catch((e) => done.fail(e));
    e2e.browser.findElement(e2e
      .by.css("h1"))
      .getText("title")
      .then((text) => {
        expect(text).toContain("TheTitle valueDev value1");
        done();
      }, () => {
        done.fail();
      });
  });
});
