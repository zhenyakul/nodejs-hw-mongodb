import { contactsCollection } from '../db/models/contacts.js';

export const getAllContacts = async () => {
  const contacts = await contactsCollection.find();
  return contacts;
};

export const getContactById = async (contact_id) => {
  const contact = await contactsCollection.findById(contact_id);
  return contact;
};
