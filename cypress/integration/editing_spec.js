import db from "../../src/db";

describe("Editing", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234");
    cy.contains("Start").click();
    cy.contains("Edit Mode").click();
    cy.wait(500);
    cy.contains("Add Card").click();
    cy.contains("Toggle Edit").click();
  });

  afterEach(() => {
    return db.erase();
  });
  it("should edit a card back and save the results", () => {
    cy.contains("Flip").click();
    cy
      .get(".ql-editor")
      .clear()
      .type("Updated Card Back");
    cy.contains("Save").click();
    cy.contains("Updated Card Back").should("be.visible");
    cy.reload();
    cy.wait(500);
    cy.contains("Flip").click();
    cy.contains("Updated Card Back").should("be.visible");
  });

  it("should edit a card front and save the results", () => {
    cy
      .get(".ql-editor")
      .clear()
      .type("Updated Card Front");
    cy.contains("Save").click();
    cy.contains("Updated Card Front").should("be.visible");
    cy.reload();
    cy.wait(500);
    cy.contains("Updated Card Front").should("be.visible");
  });
});
