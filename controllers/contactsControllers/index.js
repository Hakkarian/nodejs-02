const { listContacts } = require('./listContacts');
const { getContactById } = require('./getContactById');
const { addContact } = require('./addContact');
const { removeContact } = require('./removeContact');
const { updateContact } = require('./updateContact');
const { updateStatusContact } = require('./updateStatusContact');
const { filterContact } = require('./filterContact');

module.exports = {
    listContacts, getContactById, addContact, removeContact, updateContact, updateStatusContact, filterContact
}