import getDB from "../../src/db";

const db = getDB();

describe("Editing", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234");
    cy.contains("Start").click();
    cy.get('input[type="text"]').type("Spec Deck");
    cy.contains("Save").click();
    cy.contains("More Actions").click();
    cy.contains("Edit").click();

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

  it("should add a card", () => {
    cy.contains("Toggle Edit").click();
    cy.contains("1 / 1").should("be.visible");
    cy.contains("Add Card").click();
    cy.contains("2 / 2").should("be.visible");
  });
});
