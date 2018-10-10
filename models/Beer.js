const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const BeerSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});


// comment
module.exports = Beer = mongoose.model('beer', BeerSchema);