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
export default function exportDeck(
  deck,
  linkElement = document.createElement("a"),
  click = true,
  removeLink = true
) {
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

  attachHiddenLinkIfNecessary(linkElement);

  linkElement.setAttribute("href", dataUri);
  linkElement.setAttribute("download", "decks.json");
  if (click) {
    linkElement.click();
  }
  if (removeLink) {
    removeLinkIfNecessary(linkElement);
  }
}

const isAnchorElement = linkElement => linkElement instanceof HTMLAnchorElement;

const attachHiddenLinkIfNecessary = linkElement => {
  if (!isAnchorElement(linkElement)) {
    return;
  } else {
    linkElement.style.display = "none";
    document.body.appendChild(linkElement);
  }
};

const removeLinkIfNecessary = linkElement => {
  if (!isAnchorElement(linkElement)) {
    return;
  } else {
    document.body.removeChild(linkElement);
  }
};
