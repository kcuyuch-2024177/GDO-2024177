'use strict';

import { Schema, model } from 'mongoose';

const commentSchema = new Schema(
    {
        content: {
            type: String,
            required: [true, 'El contenido del comentario es obligatorio'],
            trim: true
        },
        publicationId: {
            type: Schema.Types.ObjectId,
            ref: 'Publication',
            required: [true, 'La publicación es obligatoria']
        },
        authorId: {
            type: String,
            required: true
        },
        authorName: {
            type: String
        }
    },
    {
        timestamps: true
    }
);

export default model('Comment', commentSchema);