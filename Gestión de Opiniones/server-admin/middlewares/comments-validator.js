'use strict';

import { body, param } from 'express-validator';
import { validateJWT } from './validate-JWT.js';
import { checkValidators } from './check-validators.js';

export const validateCommentFields = [
    validateJWT,

    body('content')
        .trim()
        .notEmpty()
        .withMessage('El contenido del comentario es requerido')
        .isLength({ min: 3, max: 1000 })
        .withMessage('El comentario debe tener entre 3 y 1000 caracteres'),

    body('publicationId')
        .notEmpty()
        .withMessage('El ID de la publicación es requerido')
        .isMongoId()
        .withMessage('El ID de la publicación no es válido'),

    checkValidators,
];

export const validateUpdateComment = [
    validateJWT,

    param('commentId')
        .isMongoId()
        .withMessage('El ID del comentario no es válido'),

    body('content')
        .trim()
        .notEmpty()
        .withMessage('El contenido del comentario es requerido')
        .isLength({ min: 3, max: 1000 })
        .withMessage('El comentario debe tener entre 3 y 1000 caracteres'),

    checkValidators,
];

export const validateGetCommentsByPublication = [

    param('publicationId')
        .isMongoId()
        .withMessage('El ID de la publicación no es válido'),

    checkValidators,
];

export const validateDeleteComment = [

    validateJWT,

    param('commentId')
        .isMongoId()
        .withMessage('El ID del comentario no es válido'),

    checkValidators,
];