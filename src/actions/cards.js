import uuid from "uuid/v4";
import db from "../db";

import { createActions } from "redux-actions";

import { updateDeck } from "./decks";

export const { savedCard, fetchedCards, newCardAdded } = createActions(
  "SAVED_CARD",
  "FETCHED_CARDS",
  "NEW_CARD_ADDED"
);

export const saveCard = (deckId, card) => {
  return async dispatch => {
    const doc = await db.get(deckId);
    const cardIndex = doc.cards.findIndex(x => x.id === card.id);
    if (cardIndex === -1) {
      // TODO: Handle the error condition
    } else {
      const newCard = {
        ...doc.cards[cardIndex],
        text: card.text
      };
      doc.cards[cardIndex] = newCard;
      dispatch(updateDeck(deckId, { cards: doc.cards }));
    }

    // const newCard = {
    //   _id: response.id,
    //   rev: response.rev,
    //   text: card.text
    // };
    // console.log(card);
    // dispatch(savedCard(newCard));
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

export const addCard = (deckId, newCard) => {
  return async (dispatch, getState) => {
    const currentDeck = getState().decks.find(x => x._id === deckId);
    if (currentDeck) {
      const { cards } = currentDeck;
      if (!newCard.id) {
        newCard.id = uuid();
      }
      cards.push(newCard);
      dispatch(updateDeck(deckId, { cards }));
    }
  };
};
