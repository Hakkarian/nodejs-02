const { listContacts, getContactById, addContact, removeContact, updateContact, updateStatusContact } = require('./contactsControllers');
const {
    register
} = require("./authControllers");
module.exports = {
    listContacts, getContactById, addContact, removeContact, updateContact, updateStatusContact, register
}