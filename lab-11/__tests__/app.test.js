// __tests__/app.test.js
const request = require("supertest");
const app = require("../app");

describe("GET /student", () => {
  it("responds with JSON", async () => {
    const response = await request(app).get("/student");
    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      name: "John Doe",
      age: 20,
      major: "Computer Science",
    });
  });
});
