'use strict';

import { Router } from 'express';
import {
    createComment,
    getCommentsByPublication,
    updateComment,
    deleteComment
} from './comment.controller.js';

import {
    validateCommentFields,
    validateUpdateComment,
    validateGetCommentsByPublication,
    validateDeleteComment
} from '../../middlewares/comments-validator.js';

const router = Router();

router.post(
    '/',
    validateCommentFields,
    createComment
);

router.get(
    '/publication/:publicationId',
    validateGetCommentsByPublication,
    getCommentsByPublication
);

router.put(
    '/:commentId',
    validateUpdateComment,
    updateComment
);

router.delete(
    '/:commentId',
    validateDeleteComment,
    deleteComment
);

export default router;