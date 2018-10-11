const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const BeerSchema = new Schema({
    beerName: {
        type: String,
        required: true
    },
    brewer: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    beerNote: {
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