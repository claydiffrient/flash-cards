import db from "../db";
import uuid from "uuid/v4";

afterEach(async () => {
  await db.destroy();
});

it("creates an card", async () => {
  const response = await db.put({
    front_text: "What test is this?",
    back_text: "a create card test",
    _id: uuid()
  });

  const getResponse = await db.get(response.id);
  expect(response.id).toEqual(getResponse._id);

  // return db.rel
  //   .save("card", {
  //     front_text: "What test is this?",
  //     back_text: "a create card test",
  //     id: "test1"
  //   })
  //   .then(async () => {
  //     const result = await db.rel.find("card", "test1");
  //     expect(result).toMatchObject({
  //       cards: [
  //         {
  //           front_text: "What test is this?",
  //           back_text: "a create card test"
  //         }
  //       ]
  //     });
  //   });
});
