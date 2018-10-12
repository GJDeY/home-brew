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
    beerNote: {
        type: String,
        required: true
    },
    style: {
        type: String,
        enum: ['IPA', 'Pilsner', 'Stout', 'Saison'],
        required: true
    },
    imageURL: {
        type: String,
        required: true
    },
    hbcAddress: {
        type: String,
        required: true
    }
});


// comment
module.exports = Beer = mongoose.model('beer', BeerSchema);