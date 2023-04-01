// we're instanciating commonjs imports, in which we're...
// ...an express framework, which simplifies the process of buiding an app, by providing tools for http-requests, routing, middlewares and so on
const express = require("express");

const { listContacts, getContactById, addContact, removeContact, updateContact } = require("../../controllers");

const { validateAddData, validatePutData } = require("../../middlewares");

// we're instanciating the tool for defining routes and handling handling http-request (further on), also used to define a specific path
const router = express.Router();



router.get("/", listContacts);

router.get("/:contactId", getContactById);

router.post("/", validateAddData, addContact);

router.delete("/:contactId", removeContact);

router.put("/:contactId", validatePutData, updateContact);

module.exports = router;
