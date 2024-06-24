import { contactsCollection } from '../db/models/contacts.js';

export const getAllContacts = async () => {
  const contacts = await contactsCollection.find();
  return contacts;
};

export const getContactById = async (contact_id) => {
  const contact = await contactsCollection.findById(contact_id);
  return contact;
};

export const createContact = async (payload) => {
  const contact = await contactsCollection.create(payload);
  return contact;
};

export const deleteContact = async (contact_id) => {
  const contact = await contactsCollection.findOneAndDelete({
    _id: contact_id,
  });
  return contact;
};

export const updateContact = async (contact_id, payload, options = {}) => {
  const rawResult = await contactsCollection.findOneAndUpdate(
    { _id: contact_id },
    payload,
    { new: true, includeResultMetadata: true, ...options },
  );

  if (!rawResult || !rawResult.value) return null;

  return {
    contact: rawResult,
    isNew: Boolean(rawResult?.lastErrorObject?.upserted),
  };
};
