'use strict';

import { Schema, model } from 'mongoose';

const publicationSchema = new Schema(
    {
        title: {
            type: String,
            required: [true, 'El título es requerido'],
            trim: true,
            maxLength: [150, 'El título no puede exceder 150 caracteres'],
        },
        category: {
            type: String,
            required: [true, 'La categoría es requerida'],
            trim: true,
            maxLength: [100, 'La categoría no puede exceder 100 caracteres'],
        },
        author: {
            type: String,
            required: [true, 'El autor es requerido'],
            trim: true,
            maxLength: [100, 'El nombre del autor no puede exceder 100 caracteres'],
        },
        text: {
            type: String,
            required: [true, 'El texto es requerido'],
            trim: true,
            maxLength: [5000, 'El texto no puede exceder 5000 caracteres'],
        },
        publicationDate: {
            type: Date,
            default: Date.now,
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);


publicationSchema.index({ category: 1 });
publicationSchema.index({ author: 1 });
publicationSchema.index({ publicationDate: -1 });

export default model('Publication', publicationSchema);