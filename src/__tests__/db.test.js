import db from "../db";

afterEach(() => {
  return db.destroy();
});

it("creates an card", () => {
  return db.rel
    .save("card", {
      front_text: "What test is this?",
      back_text: "a create card test",
      id: "test1"
    })
    .then(async () => {
      const result = await db.rel.find("card", "test1");
      expect(result).toMatchObject({
        cards: [
          {
            front_text: "What test is this?",
            back_text: "a create card test"
          }
        ]
      });
    });
});
