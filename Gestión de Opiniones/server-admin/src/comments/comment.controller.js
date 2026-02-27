'use strict';

import {
    createCommentRecord,
    getCommentsByPublicationRecord,
    updateCommentRecord,
    deleteCommentRecord
} from './comment.service.js';

export const createComment = async (req, res) => {
    try {
        const { content, publicationId } = req.body;

        const newComment = await createCommentRecord({
            content,
            publicationId,
            authorId: req.user.id,
            authorName: req.user.name
        });

        return res.status(201).json({
            success: true,
            comment: newComment
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: 'Error al crear el comentario'
        });
    }
};

export const getCommentsByPublication = async (req, res) => {
    try {
        const { publicationId } = req.params;

        const comments = await getCommentsByPublicationRecord(publicationId);

        return res.status(200).json({
            success: true,
            comments
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: 'Error al obtener comentarios'
        });
    }
};

export const updateComment = async (req, res) => {
    try {
        const { commentId } = req.params;
        const { content } = req.body;

        const updatedComment = await updateCommentRecord(commentId, { content });

        return res.status(200).json({
            success: true,
            comment: updatedComment
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: 'Error al actualizar el comentario'
        });
    }
};

export const deleteComment = async (req, res) => {
    try {
        const { commentId } = req.params;

        await deleteCommentRecord(commentId);

        return res.status(200).json({
            success: true,
            message: 'Comentario eliminado correctamente'
        });

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: 'Error al eliminar el comentario'
        });
    }
};