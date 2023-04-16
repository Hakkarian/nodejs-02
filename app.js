// we're instanciating commonjs imports, in which we're...
// ...an express framework, which simplifies the process of buiding an app, by providing tools for http-requests, routing, middlewares and so on
const express = require("express");
// we're importing logger in order to monitore and debug successful and failed requests
const logger = require("morgan");
// Cross-Origin-Resourse-Sharing (CORS) allows to allow requests from another domain
const cors = require("cors");
require('dotenv').config();
const authRouter = require('./routes/api/auth');
// here we're importing a router for contacts in the specified path
const contactsRouter = require("./routes/api/contacts");
// we're declaring an app by calling an exress function
const app = express();
// here we're declaring if the environment equals to development format, the resulting format will include additional debugging information.
// otherwise short format will contain only essential information
const formatsLogger = app.get("env") === "development" ? "dev" : "short";

// app.use will be executed after every incoming request. 

// In this middleware function we're logging HTTP request using a specific format, whether it dev or short. 
// the request will be displayed in the console in the form of formatted string
app.use(logger(formatsLogger));
// we're allowed to use requests from another domain
app.use(cors());
// we will receive a data from the request in the json-format
app.use(express.json());
app.use(express.static('public'))

app.use("/users", authRouter)
// we're specifying a path and going for router for contacts
app.use("/api/contacts", contactsRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

// remember calling a function of next(error)? This is it. Here we're passing four arguments and... 
app.use((err, req, res, next) => {
  // ...destructuring the status and message from an error object
  const { status = 500, message = "Server error" } = err;
  // and passing to the status method status argument, and sending to the browser json-message
  console.log(err)
  if (err.name === 'ValidationError') {
    const errors = {};
    Object.keys(err.errors).forEach(key => {
      errors[key] = err.errors[key].message
    })
    res.status(400).json(errors)
  }

  res.status(status).json({message});
});

// commonjs app export
module.exports = app;
