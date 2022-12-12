import mongoose from "mongoose";
import request from "supertest";
import config from "../../config";
import User from "../../models/User";
import app from "../../server";

describe("auth handler", () => {
  beforeAll(() => {
    mongoose.connect(config.dbTest);
    User.collection.drop();
  });

  afterAll((done) => {
    mongoose.disconnect(done);
  });
  it("should create a new user", async () => {
    const res = await request(app)
      .post("/signup")
      .send({ email: "user@example.com", password: "password" });
    expect(res.status).toEqual(200);
    expect(res.body.token).toBeTruthy();
  });
});
