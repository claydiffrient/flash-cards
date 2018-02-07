import PouchDB from "pouchdb";
// import relationalPouch from "relational-pouch";
import pouchdbFind from "pouchdb-find";
import eraseDb from "pouchdb-erase";

// PouchDB.plugin(relationalPouch);
PouchDB.plugin(pouchdbFind);
PouchDB.plugin(eraseDb);

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
