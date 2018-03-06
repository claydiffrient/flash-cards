import uuid from "uuid/v4";
import db from "../db";

import { createActions } from "redux-actions";

export const { savedDeck, fetchedDecks, newDeckAdded } = createActions(
  "SAVED_DECK",
  "FETCHED_DECKS",
  "NEW_DECK_ADDED"
);

export const fetchDecks = () => {
  return async dispatch => {
    const response = await db.allDocs({
      include_docs: true
    });

    const decks = response.rows.map(d => ({
      _id: d.id,
      rev: d.value.rev,
      cards: d.doc.cards,
      name: d.doc.name
    }));

    dispatch(fetchedDecks(decks));
  };
};

export const addDeck = details => {
  return async dispatch => {
    const deck = {
      _id: uuid(),
      cards: [{ text: { front: "New Card Front", back: "New Card Back" } }],
      ...details
    };
    const response = await db.put(deck);

    if (response.ok) {
      const newDeck = await db.get(response.id);
      dispatch(newDeckAdded(newDeck));
    }
  };
};
