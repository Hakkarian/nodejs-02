// we're instanciating commonjs imports, in which we're...
// ...an express framework, which simplifies the process of buiding an app, by providing tools for http-requests, routing, middlewares and so on
const express = require("express");

const { isValidId, authenticate } = require("../../middlewares");
const { validateFavoriteSchema, validatePutSchema, validateAddSchema } = require('../../middlewares/validateData');
const ctrl = require("../../controllers");

// we're instanciating the tool for defining routes and handling handling http-request (further on), also used to define a specific path
const router = express.Router();



router.get("/", authenticate, ctrl.listContacts);

router.get("/:contactId", authenticate, isValidId, ctrl.getContactById);

router.get("/", authenticate, ctrl.filterContact)

router.post("/", authenticate, validateAddSchema, ctrl.addContact);

router.delete("/:contactId", authenticate, isValidId, ctrl.removeContact);

router.put("/:contactId", authenticate, isValidId, validatePutSchema, ctrl.updateContact);

router.patch("/:contactId/favorite", authenticate, isValidId, validateFavoriteSchema, ctrl.updateStatusContact)

module.exports = router;
