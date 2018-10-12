const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const BeerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    style: {
        type: String,
        enum: ['IPA', 'Pilsner', 'Stout', 'Saison'],
        required: true
    }
});


// comment
module.exports = Beer = mongoose.model('beer', BeerSchema);