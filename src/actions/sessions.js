import uuid from "uuid/v4";
import getDB from "../db";

import { createActions } from "redux-actions";

export const db = getDB("flashcards-sessions");

export const { sessionStarted, sessionEnded, sessionUpdated } = createActions(
  "SESSION_STARTED",
  "SESSION_ENDED",
  "SESSION_UPDATED"
);

export function startSession(id = uuid()) {
  return async dispatch => {
    const session = {
      _id: id,
      active: true,
      incorrect: [],
      correct: []
    };

    const response = await db.put(session);
    if (response.ok) {
      const newSession = await db.get(response.id);
      dispatch(sessionStarted(newSession));
    }
  };
}

export function endSession(id) {
  return async dispatch => {
    const session = await db.get(id);
    session.active = false;

    const response = await db.put(session);
    if (response.ok) {
      const newSession = await db.get(response.id);
      dispatch(sessionEnded(newSession));
    }
  };
}

export function updateSession(id, { incorrect, correct }) {
  return async dispatch => {
    const session = await db.get(id);
    session.incorrect = session.incorrect.concat(incorrect || []);
    session.correct = session.correct.concat(correct || []);
    const response = await db.put(session);
    if (response.ok) {
      const newSession = await db.get(response.id);
      dispatch(sessionUpdated(newSession));
    }
  };
}
