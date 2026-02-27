import Publication from './publication.model.js';

export const createPublicationRecord = async ({ publicationData }) => {
    const publication = new Publication(publicationData);
    await publication.save();
    return publication;
};

export const fetchPublications = async ({ page = 1, limit = 10, category, author }) => {
    const filter = {};
    if (category) filter.category = category;
    if (author) filter.author = author;

    const pageNumber = parseInt(page);
    const limitNumber = parseInt(limit);

    const publications = await Publication.find(filter)
        .limit(limitNumber)
        .skip((pageNumber - 1) * limitNumber)
        .sort({ publicationDate: -1 });

    const total = await Publication.countDocuments(filter);

    return {
        publications,
        pagination: {
            currentPage: pageNumber,
            totalPages: Math.ceil(total / limitNumber),
            totalRecords: total,
            limit: limitNumber,
        },
    };
};

export const fetchPublicationById = async (id) => {
    return Publication.findById(id);
};

export const updatePublicationById = async (id, updateData) => {
    return Publication.findByIdAndUpdate(id, updateData, { new: true });
};

export const deletePublicationById = async (id) => {
    return Publication.findByIdAndDelete(id);
};