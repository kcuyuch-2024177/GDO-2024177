'use strict';

import { Router } from 'express';
import {
    createPublication,
    getPublications,
    getPublicationById,
    updatePublication,
    deletePublication
} from './publication.controller.js';

import { validatePublicationFields } from '../../middlewares/publication-validator.js';
import { validateJWT } from '../../middlewares/validate-JWT.js';

const router = Router();

router.get(
    '/',
    getPublications
);

router.get(
    '/Listar',
    getPublications
);

router.get(
    '/:id',
    getPublicationById
);

router.post(
    '/',
    validatePublicationFields,
    createPublication
);

router.put(
    '/:id',
    validateJWT,
    updatePublication
);

router.delete(
    '/:id',
    validateJWT,
    deletePublication
);

export default router;