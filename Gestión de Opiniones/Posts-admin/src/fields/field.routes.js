import { Router } from 'express';
import { createField, getFields } from './field.controller.js';
import { validateCreateField } from '../../middlewares/field-validator.js';
import { uploadFieldImage } from '../../middlewares/file-uploader.js';
import { cleanupUploaderFileOnFinish } from '../../middlewares/delete-file-on-error.js';

const router = Router();

router.get(
    '/',
    getFields);

router.post(
    '/',
    uploadFieldImage.single('image'),
    cleanupUploaderFileOnFinish,
    validateCreateField,
    createField
);

export default router;