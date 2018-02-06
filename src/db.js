import PouchDB from "pouchdb";
// import relationalPouch from "relational-pouch";
import pouchdbFind from "pouchdb-find";
import memoryDb from "pouchdb-adapter-memory";

// PouchDB.plugin(relationalPouch);
PouchDB.plugin(pouchdbFind);

let db;
if (process.env.NODE_ENV === "test") {
  PouchDB.plugin(memoryDb);
  db = new PouchDB("flashcards", { adapter: "memory" });
} else {
  db = new PouchDB("flashcards");
}

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
