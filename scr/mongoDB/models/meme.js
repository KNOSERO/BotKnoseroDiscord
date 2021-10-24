const mongoose = require('mongoose');

const memeSchema = mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    group: {
        type: String,
        required: true,
    },
    random: {
        type: Boolean,
        required: true,
    }
});

module.exports = mongoose.model('Meme', memeSchema);