import db from "../db";

import { createActions } from "redux-actions";

export const { savedCard, fetchedCards } = createActions(
  "SAVED_CARD",
  "FETCHED_CARDS"
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
