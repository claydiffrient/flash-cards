import db from "../../src/db";

describe("Creating", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234");
  });

  afterEach(() => {
    return db.erase();
  });

  const createNewDeck = (deckName = "New Deck Yay") => {
    cy.contains("Start").click();
    cy.get('input[type="text"]').type(deckName);
    cy.contains("Save").click();
  };

  const editDeck = () => {
    cy.contains("More Actions").click();
    cy.contains("Edit").click();
  };

  it("should create a new deck", () => {
    createNewDeck();
    editDeck();
    const cardFront = cy.contains("New Card Front");
    cardFront.should("be.visible");
  });
});
