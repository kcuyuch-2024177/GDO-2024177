'use strict';

import Comment from './comment.model.js';

export const createCommentRecord = async (data) => {
    const comment = new Comment(data);
    return await comment.save();
};

export const getCommentsByPublicationRecord = async (publicationId) => {
    return await Comment.find({ publicationId })
        .sort({ createdAt: -1 });
};

export const updateCommentRecord = async (commentId, data) => {
    return await Comment.findByIdAndUpdate(
        commentId,
        data,
        { new: true }
    );
};

export const deleteCommentRecord = async (commentId) => {
    return await Comment.findByIdAndDelete(commentId);
};