import uuid from "uuid/v4";
import db from "../db";

import { createActions } from "redux-actions";

export const { savedCard, fetchedCards, newCardAdded } = createActions(
  "SAVED_CARD",
  "FETCHED_CARDS",
  "NEW_CARD_ADDED"
);

export const saveCard = card => {
  return async dispatch => {
    const newCard = await db.put(card);
    dispatch(savedCard(newCard));
    // db.rel.save("card", card).then(() => {
    //   dispatch(savedCard);
    // });
  };
};

export const fetchCards = () => {
  return async dispatch => {
    const response = await db.allDocs({
      include_docs: true
    });

    const cards = response.rows.map(c => ({
      text: {
        front: c.doc.front_text,
        back: c.doc.back_text
      },
      flipped: false
    }));

    dispatch(fetchedCards(cards));
  };
};

export const addCard = details => {
  return async dispatch => {
    const card = { _id: uuid(), ...details };
    const response = await db.put(card);
    if (response.ok) {
      const newCard = {
        _id: response._id,
        rev: response.rev,
        text: card.text
      };
      dispatch(newCardAdded(newCard));
    }
  };
};
