import PouchDB from "pouchdb";
// import relationalPouch from "relational-pouch";
import pouchdbFind from "pouchdb-find";

// PouchDB.plugin(relationalPouch);
PouchDB.plugin(pouchdbFind);

const db = new PouchDB("flashcards");

// db.setSchema([
//   {
//     singular: "deck",
//     plural: "decks",
//     relations: {
//       cards: { hasMany: { type: "card", options: { async: true } } }
//     }
//   },
//   {
//     singular: "card",
//     plural: "cards",
//     relations: {
//       deck: { belongsTo: "deck" }
//     }
//   }
// ]);

export default db;
