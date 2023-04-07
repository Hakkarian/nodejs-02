// we're instanciating commonjs imports, in which we're...
// ...an express framework, which simplifies the process of buiding an app, by providing tools for http-requests, routing, middlewares and so on
const express = require("express");

const { listContacts, getContactById, addContact, removeContact, updateContact, updateStatusContact } = require("../../controllers");

const { validateAddSchema, validatePutSchema, validateFavoriteSchema, isValidId} = require("../../middlewares");

// we're instanciating the tool for defining routes and handling handling http-request (further on), also used to define a specific path
const router = express.Router();



router.get("/", listContacts);

router.get("/:contactId", isValidId, getContactById);

router.post("/", validateAddSchema, addContact);

router.delete("/:contactId", isValidId, removeContact);

router.put("/:contactId", isValidId, validatePutSchema, updateContact);

router.patch("/:contactId/favorite", isValidId, validateFavoriteSchema, updateStatusContact)

module.exports = router;
