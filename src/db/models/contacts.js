import { model, Schema } from 'mongoose';
import { emailRegex } from '../../constants/contactsConstants.js';
import { mongooseSaveError, setUpdateOptions } from './hooks.js';

const contactsSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required!'],
    },
    phoneNumber: {
      type: String,
      required: [true, 'Phone number is required!'],
    },
    email: {
      type: String,
      required: false,
      match: [emailRegex, 'Please fill a valid email address!'],
    },
    isFavourite: {
      type: Boolean,
      default: false,
    },
    contactType: {
      type: String,
      enum: ['work', 'home', 'personal'],
      default: 'personal',
    },
  },
  {
    timestamps: true,
    versionKey: false,
  },
);

contactsSchema.pre('findOneAndUpdate', setUpdateOptions);
contactsSchema.post('findOneAndUpdate', mongooseSaveError);
contactsSchema.post('save', mongooseSaveError);

export const contactsCollection = model('contacts', contactsSchema);
