const { listContacts, getContactById, addContact, removeContact, updateContact, updateStatusContact, filterContact } = require('./contactsControllers');
const {
    register, login, getCurrent, updateSubscription, logout
} = require("./authControllers");
module.exports = {
    listContacts,
    getContactById,
    addContact,
    removeContact,
    updateContact,
    updateStatusContact,
    filterContact,
    register,
    login,
    getCurrent,
    logout,
    updateSubscription
};