import uuid from "uuid/v4";
import getDB from "../db";

import { createActions } from "redux-actions";

const db = getDB();

export const {
  savedDeck,
  fetchedDecks,
  newDeckAdded,
  deckDeleted,
  deckUpdated
} = createActions(
  "SAVED_DECK",
  "FETCHED_DECKS",
  "NEW_DECK_ADDED",
  "DECK_DELETED",
  "DECK_UPDATED"
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
      cards: [
        {
          id: uuid(),
          text: { front: "New Card Front", back: "New Card Back" }
        }
      ],
      ...details
    };
    const response = await db.put(deck);

    if (response.ok) {
      const newDeck = await db.get(response.id);
      dispatch(newDeckAdded(newDeck));
    }
  };
};

export const deleteDeck = id => {
  return async dispatch => {
    const getResponse = await db.get(id);
    const response = await db.remove(getResponse._id, getResponse._rev);
    if (response.ok) {
      dispatch(deckDeleted(response.id));
    }
  };
};

export const updateDeck = (id, thingsToUpdate) => {
  return async dispatch => {
    const getResponse = await db.get(id);
    const newDeck = {
      ...getResponse,
      ...thingsToUpdate
    };
    const response = await db.put(newDeck);
    if (response.ok) {
      newDeck.rev = response.rev;
      dispatch(deckUpdated(newDeck));
    }
  };
};
