describe("bug", function () {
  it("gives an error in the cli", function () {
    cy.request({ url: "http://localhost:5005/file.txt", timeout: 3000 });
  });
});
