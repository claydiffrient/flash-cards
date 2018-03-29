import exportDeck from "../export";

const getDeck = name => ({
  name: name,
  cards: [
    {
      text: {
        front: "front text",
        back: "back text"
      }
    }
  ]
});

it("takes a single deck and creates an json download", () => {
  const fakeLinkElement = {
    setAttribute: jest.fn()
  };
  exportDeck(getDeck("Bio 101"), fakeLinkElement, false);
  expect(fakeLinkElement.setAttribute).toHaveBeenCalledTimes(2);
  expect(fakeLinkElement.setAttribute).toHaveBeenCalledWith(
    "download",
    "decks.json"
  );
  expect(fakeLinkElement.setAttribute).toHaveBeenCalledWith(
    "href",
    "data:application/json;charset=utf-8,%7B%22decks%22%3A%5B%7B%" +
      "22name%22%3A%22Bio%20101%22%2C%22cards%22%3A%5B%7B%22text%" +
      "22%3A%7B%22front%22%3A%22front%20text%22%2C%22back%22%3A%2" +
      "2back%20text%22%7D%7D%5D%7D%5D%7D"
  );
});

it("takes multiple decks and creates a json download", () => {
  const fakeLinkElement = {
    setAttribute: jest.fn()
  };
  exportDeck([getDeck("Bio 101"), getDeck("Bio 200")], fakeLinkElement, false);
  expect(fakeLinkElement.setAttribute).toHaveBeenCalledTimes(2);
  expect(fakeLinkElement.setAttribute).toHaveBeenCalledWith(
    "download",
    "decks.json"
  );
  expect(fakeLinkElement.setAttribute).toHaveBeenCalledWith(
    "href",
    "data:application/json;charset=utf-8,%7B%22decks%22%3A%5B%7B%" +
      "22name%22%3A%22Bio%20101%22%2C%22cards%22%3A%5B%7B%22text%" +
      "22%3A%7B%22front%22%3A%22front%20text%22%2C%22back%22%3A%2" +
      "2back%20text%22%7D%7D%5D%7D%2C%7B%22name%22%3A%22Bio%20200" +
      "%22%2C%22cards%22%3A%5B%7B%22text%22%3A%7B%22front%22%3A%2" +
      "2front%20text%22%2C%22back%22%3A%22back%20text%22%7D%7D%5D" +
      "%7D%5D%7D"
  );
});

it("calls click by default", () => {
  const fakeLinkElement = {
    setAttribute: jest.fn(),
    click: jest.fn()
  };
  exportDeck(getDeck("Bio 101"), fakeLinkElement);
  expect(fakeLinkElement.click).toHaveBeenCalled();
});

it("uses a anchor element as the default linkElement", () => {
  exportDeck(getDeck("Bio 101"), undefined, false, false);
  expect(document.getElementsByTagName("a")[0].getAttribute("download")).toBe(
    "decks.json"
  );
});
