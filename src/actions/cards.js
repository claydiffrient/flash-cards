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
    console.log(card);
    const doc = await db.get(card._id);
    const newCard = {
      ...doc,
      text: card.text
    };
    const response = await db.put(newCard);
    newCard.rev = response.rev;
    // const newCard = {
    //   _id: response.id,
    //   rev: response.rev,
    //   text: card.text
    // };
    // console.log(card);
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
      _id: c.id,
      rev: c.value.rev,
      text: c.doc.text,
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
      const newCard = await db.get(response.id);
      dispatch(newCardAdded(newCard));
    }
  };
};
