// this is a commonjs import. The key of importing fs is to read and write the data from file
const fs = require('fs/promises');
const { nanoid } = require('nanoid');
// we need to know the path of the file
const path = require('path')

// we're creating a variable contactsPath, in which we're storing an absolute path to the file with contacts in JSON-format
const contactsPath = path.join(__dirname, "contacts.json");

// we're creating a function, in which...
const listContacts = async () => {
  // ...we're intanciating a variable, in which we're creating an asynchronic function, where we're reading a json-file in utf-8 format (which stands for reading any Unicode character, and thus our file)
  const result = await fs.readFile(contactsPath, 'utf-8');
  // ...we're parsing the result of async function
  return JSON.parse(result);
}

// in this asynchronic function with an id parameter...
const getContactById = async (contactId) => {
  // we're defining a result of calling an asynchronic function, ready-to-use parsed contacts
  const contacts = await listContacts();
  // here we're finding the unique element of the array of contacts
  const contact = contacts.find(item => item.id === contactId);
  // and returning this unique id (or nothing, if couldn't find)
  return contact || null;
}

const removeContact = async (contactId) => {
  // we're defining a result of calling an asynchronic function, ready-to-use parsed contacts
  const contacts = await listContacts();
  // here we're finding the unique element of the array of contacts
  const index = contacts.findIndex((item) => item.id === contactId);
  // here we're deleting a unique id from the array of contacts 
  contacts.splice(index, 1)
  // we're stringifying the array, with no special formatting options needed (null) as a second parameter, 
  // and the third parameter for indentation of 2 spaces to make output more readable
  const stringedContacts = JSON.stringify(contacts, null, 2);
  // here we're writing a file to path to the contacts.json. We're basically using PUT, rewriting our code to add a stringified object to the str array of objects
  await fs.writeFile(contactsPath, stringedContacts)
  // and return the array to display on browser
  return contacts;
}
// in asynchronic function with an object parameter...
const addContact = async (body) => {
  // ...we're destructuring a name, email and phone from the object-parameter;
  const { name, email, phone } = body;
  // we're declaring the asynchronic function of getting parsed contacts
  const contacts = await listContacts();
  // instanciating a new object with unique id from library, and destructured properties from the body object
  const payload = {
    id: nanoid(),
    name, email, phone
  }
  // ...and pushing the new object to the array of contacts
  contacts.push(payload);
  // we're stringifying contacts with no specific formatting options and an indentation of 2 spaces for a readable output
  const stringedContacts = JSON.stringify(contacts, null, 2);
  // we're calling an asynchronic function for rewriting our file to paste the new array with added contact
  await fs.writeFile(contactsPath, stringedContacts)
  // ...and returning a new object
  return payload;


}
// in asynchronic function with an id and an object parameter...
const updateContact = async (contactId, body) => {
  const { name, email, phone } = body;

  const contacts = await listContacts();
  // we're seeking for the desired contact in the array of contacts
  const contact = contacts.find(item => item.id === contactId);

  // and pasting new values into the properties of the old object
  contact.name = name;
  contact.email = email;
  contact.phone = phone;

  const stringedContacts = JSON.stringify(contacts, null, 2);
  await fs.writeFile(contactsPath, stringedContacts);
  // we're returning an old object with new values
  return contact;
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
}
