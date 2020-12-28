const sharedAttributes = {
    _isDeleted: {
        type: Boolean,
        default: false,
    },
    _createdAt: {
        type: Date,
        default: Date.now,
    },
    _updatedAt: {
        type: Date,
        default: Date.now,
    },
}

export default sharedAttributes
