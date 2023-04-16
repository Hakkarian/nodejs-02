// const app = require("../../app");

// describe("POST /login", () => {
//   it("should return a status code of 200 on successful login", async () => {
//     const mockUser = {
//       email: "test@example.com",
//       password: "testpassword",
//     };

//     const req = {
//       body: mockUser,
//     };
//     const res = {
//       json: jest.fn(),
//       status: jest.fn(() => res),
//     };
//     const next = jest.fn();

//     await app.get("login")(req, res, next);

//     expect(res.status).toHaveBeenCalledWith(201);
//   });
// });
