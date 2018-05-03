import * as Actions from "../sessions";

beforeEach(() => {
  return Actions.db.erase();
});

describe("startSession", () => {
  it("creates a session based on the given id", async () => {
    const thunk = Actions.startSession("123abc");
    const fakeDispatch = jest.fn();
    await thunk(fakeDispatch);
    expect(fakeDispatch).toBeCalledWith(Actions.sessionStarted("123abc"));
  });
});

describe("endSession", () => {
  it("ends a session based on the given id", async () => {
    let sessionId;
    await Actions.startSession()(dispatchedVal => {
      sessionId = dispatchedVal.payload;
    });
    let dispatched;
    const fakeDispatch = dispatchedVal => {
      dispatched = dispatchedVal;
    };
    const thunk = Actions.endSession(sessionId);
    await thunk(fakeDispatch);
    expect(dispatched.active).toBeFalsy();
  });
});

describe("updateSession", () => {});
