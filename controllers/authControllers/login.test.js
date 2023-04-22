// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcryptjs");
// const { ctrlWrapper, ErrorHandler } = require("../../helpers");
// const { User } = require("../../models");
// const { login } = require('./login');

// jest.mock("../../models");
// jest.mock("jsonwebtoken");
// jest.mock("bcryptjs");
// jest.mock("../../helpers");

// describe('login controller', () => {
//     let req, res, next;


//     beforeEach(() => {
//         req = {
//             body: {
//                 email: "blank1@gmail.com",
//                 password: "000000001"
//             },
//         };
//         res = {
//             status: jest.fn().mockReturnThis(),
//             json: jest.fn()
//         };
//         next = jest.fn();
//     });

//     afterEach(() => {
//         jest.clearAllMocks();
//     });
//     try {
//         it('should login a user succesfully', () => {
//             const user = {
//                 email: "blank1@gmail.com",
//                 password: "000000001",
//             };


//             User.findOne.mockResolvedValue(user);

//             console.log("req", req.body);
//             console.log("res", res);

//             ctrlWrapper(login(req, res, next))

//             expect(User.findOne).toHaveBeenCalledWith({ email: req.body.email })
//         })
//     } catch (error) {
//         console.log(error)
//     }
// })
    // it('should return an error if user is not found', async () => {
    //     User.findOne.mockResolvedValue(null);

    //     await login(req, res, next);


    //     expect(User.findOne).toHaveBeenCalledWith({ email: req.body.email });
    //     expect(bcrypt.compare).not.toHaveBeenCalled();
    //     expect(jwt.sign).not.toHaveBeenCalled();
    //     expect(ErrorHandler).toHaveBeenCalledWith(401, 'Email or password is wrong');
    //     expect(next).toHaveBeenCalledWith(ErrorHandler())
    // });
    // it('should return an error if password is wrong', async () => {
    //     const user = {
    //       email: "blank1@gmail.com",
    //       password: "000000001@gmail.com",
    //     };

    //     User.findOne.mockResolvedValue(user);
        
    //     await login(req, res);


    //     expect(User.findOne).toHaveBeenCalledWith({ email: req.body.email });
    //     expect(jwt.sign).not.toHaveBeenCalled();
    //     expect(res.status).toHaveBeenCalledWith(401);
    //     expect(ErrorHandler).toHaveBeenCalledWith(401, "Email or password is wrong")
    // })
// })

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
