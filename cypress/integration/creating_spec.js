import db from "../../src/db";

describe("Creating", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234");
  });

  afterEach(() => {
    return db.erase();
  });

  it("should add a new card", () => {
    cy.contains("Start").click();
    cy.contains("Edit Mode").click();
    cy.wait(500);
    cy.contains("Add Card").click();
    const cardFront = cy.contains("New Card Front");
    cardFront.should("be.visible");
  });
});
