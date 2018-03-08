/**
 * Exports a deck (or array of decks) object into our standard format
 *
 * {
 *   "decks": [
 *     {
 *       "name": "name of deck",
 *       "cards": [
 *         {
 *           "text": {
 *             "front": "Front of card",
 *             "back": "Back of card"
 *           }
 *         }
 *       ]
 *     }
 *   ]
 * }
 */
export default function exportDeck(deck) {
  const boxedDeck = Array.isArray(deck) ? deck : [deck];
  const decksExport = boxedDeck.map(deckObj => ({
    name: deckObj.name,
    cards: deckObj.cards
  }));
  const exportObj = { decks: decksExport };

  const dataStr = JSON.stringify(exportObj);
  const dataUri = `data:application/json;charset=utf-8,${encodeURIComponent(
    dataStr
  )}`;

  const linkElement = document.createElement("a");
  linkElement.setAttribute("href", dataUri);
  linkElement.setAttribute("download", "decks.json");
  linkElement.click();
}
