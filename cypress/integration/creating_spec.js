describe("Creating", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234");
  });
  it("should add a new card", () => {
    cy.contains("Start").click();
    cy.contains("Edit Mode").click();
    cy.contains("Add Card").click();
    const cardFront = cy.contains("New Card Front");
    cardFront.should("be.visible");
  });
});
