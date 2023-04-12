// we're instanciating commonjs imports, in which we're...
// ...an express framework, which simplifies the process of buiding an app, by providing tools for http-requests, routing, middlewares and so on
const express = require("express");

const { isValidId, authenticate } = require("../../middlewares");
const { validateFavoriteSchema, validatePutSchema, validateAddSchema } = require('../../middlewares/validateData');
const { listContacts, getContactById, addContact, removeContact, updateContact, updateStatusContact, filterContact } = require("../../controllers/contactsControllers");

// we're instanciating the tool for defining routes and handling handling http-request (further on), also used to define a specific path
const router = express.Router();



router.get("/", authenticate, listContacts);

router.get("/:contactId", authenticate, isValidId, getContactById);

router.get("/", authenticate, filterContact)

router.post("/", authenticate, validateAddSchema, addContact);

router.delete("/:contactId", authenticate, isValidId, removeContact);

router.put("/:contactId", authenticate, isValidId, validatePutSchema, updateContact);

router.patch("/:contactId/favorite", authenticate, isValidId, validateFavoriteSchema, updateStatusContact)

module.exports = router;
