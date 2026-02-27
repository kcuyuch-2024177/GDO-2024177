'use strict';

import {
    createPublicationRecord,
    fetchPublications,
    fetchPublicationById,
    updatePublicationById,
    deletePublicationById
} from './publication.service.js';

export const createPublication = async (req, res) => {
    try {
        const publication = await createPublicationRecord({
            publicationData: { ...req.body, authorId: req.user.id, authorName: req.user.name }
        });

        res.status(201).json({
            success: true,
            message: 'Publicación creada exitosamente',
            data: publication
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Error al crear la publicación',
            error: err.message
        });
    }
};

export const getPublications = async (req, res) => {
    try {
        const { page, limit, category, author } = req.query;
        const { publications, pagination } = await fetchPublications({ page, limit, category, author });
        res.status(200).json({
            success: true,
            message: 'Publicaciones listadas exitosamente',
            data: publications,
            pagination
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Error al listar publicaciones',
            error: err.message
        });
    }
};

export const getPublicationById = async (req, res) => {
    try {
        const publication = await fetchPublicationById(req.params.id);
        if (!publication) {
            return res.status(404).json({
                success: false,
                message: 'Publicación no encontrada'
            });
        }
        res.status(200).json({
            success: true,
            data: publication
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Error al obtener la publicación',
            error: err.message
        });
    }
};

export const updatePublication = async (req, res) => {
    try {
        const publication = await fetchPublicationById(req.params.id);
        if (!publication) {
            return res.status(404).json({ success: false, message: 'Publicación no encontrada' });
        }

        const updated = await updatePublicationById(req.params.id, req.body);

        res.status(200).json({
            success: true,
            message: 'Publicación actualizada exitosamente',
            data: updated
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Error al actualizar la publicación',
            error: err.message
        });
    }
};

export const deletePublication = async (req, res) => {
    try {
        const publication = await fetchPublicationById(req.params.id);
        if (!publication) {
            return res.status(404).json({ success: false, message: 'Publicación no encontrada' });
        }

        await deletePublicationById(req.params.id);

        res.status(200).json({
            success: true,
            message: 'Publicación eliminada exitosamente'
        });
    } catch (err) {
        res.status(500).json({
            success: false,
            message: 'Error al eliminar la publicación',
            error: err.message
        });
    }
};