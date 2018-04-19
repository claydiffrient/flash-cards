import db from "../../src/db";

const DECK_NAME = "Bio 101";

describe("Viewing", () => {
  beforeEach(() => {
    cy.visit("http://localhost:1234");
    createNewDeck(DECK_NAME);
  });

  afterEach(() => {
    return db.erase();
  });

  const createNewDeck = (deckName = "New Deck Yay") => {
    cy.contains("Start").click();
    cy.get('input[type="text"]').type(deckName);
    cy.contains("Save").click();
  };

  const viewDeck = deckName => {
    cy.contains(deckName).click();
  };

  const editDeck = () => {
    cy.contains("More Actions").click();
    cy.contains("Edit").click();
  };

  const addCard = cardDetails => {};

  it("should view a deck", () => {
    viewDeck(DECK_NAME);
    const cardFront = cy.contains("New Card Front");
    cardFront.should("be.visible");
  });

  describe("Card Navigation", () => {
    beforeEach(() => {
      editDeck();
      cy.contains("Add Card").click();
      cy.contains("Add Card").click();
      cy.contains("Go Home").click();
      cy.contains("Start").click();
      viewDeck(DECK_NAME);
    });

    it("should move between cards", () => {
      cy.contains("1 / 3").should("be.visible");
      cy.contains("Next").click();
      cy.contains("2 / 3").should("be.visible");
      cy.contains("Previous").click();
      cy.contains("1 / 3").should("be.visible");
    });

    it("should maintain the front side of the card when moving to a different card", () => {
      cy.contains("Next").click();
      cy.contains("Front").should("be.visible");
    });

    it("should flip to the front of the next card when moving to a different card", () => {
      cy.contains("Flip").click();
      cy.contains("Next").click();
      cy.contains("Front").should("be.visible");
    });

    it("should flip between cards automatically when a time is set", () => {
      cy.clock();
      cy.contains("1 / 3").should("be.visible");
      cy
        .get("input[type=range]")
        .invoke("val", 5)
        .trigger("change");
      cy.tick(5000);
      cy.contains("New Card Back").should("be.visible");
    });
  });

  describe("Stats Tracking", () => {
    beforeEach(() => {
      editDeck();
      cy.contains("Add Card").click();
      cy.contains("Add Card").click();
      cy.contains("Go Home").click();
      cy.contains("Start").click();
      viewDeck(DECK_NAME);
    });

    it("allows marking correct and incorrect only once per card", () => {
      cy.contains("Flip").click();
      cy.contains("Correct").click();
      cy.contains("Correct").should("be.disabled");
      cy.contains("Incorrect").should("be.disabled");
      cy.contains("Next").click();
      cy.contains("Flip").click();
      cy.contains("Incorrect").click();
      cy.contains("Correct").should("be.disabled");
      cy.contains("Incorrect").should("be.disabled");
      cy.contains("Previous").click();
      cy.contains("Flip").click();
      cy.contains("Correct").should("be.disabled");
      cy.contains("Incorrect").should("be.disabled");
    });
  });
});
