import { Router } from 'express';
import {
  createContactController,
  deleteContactController,
  getAllContactsController,
  getContactByIdController,
  patchContactController,
  upsertContactController,
} from '../controllers/contacts-controllers.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import { validateBody } from '../middlewares/validateBody.js';
import {
  createContactsSchema,
  updateContactsSchema,
} from '../validation/contactValidation.js';

const router = Router();

router.get('/', ctrlWrapper(getAllContactsController));

router.get('/:contact_id', ctrlWrapper(getContactByIdController));

router.post(
  '/',
  validateBody(createContactsSchema),
  ctrlWrapper(createContactController),
);

router.delete('/:contact_id', ctrlWrapper(deleteContactController));

router.put(
  '/:contact_id',
  validateBody(updateContactsSchema),
  ctrlWrapper(upsertContactController),
);

router.patch('/:contact_id', ctrlWrapper(patchContactController));

export default router;
