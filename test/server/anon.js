//Integration tests for the average anonymous user
const app = require("../../server/index.js");
const request = require("supertest")(app);

describe("GET /boards", () => {
  it("respond with json", (done) => {
    request
      .get("/boards")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200, done);
  });
});
