const express = require('express');
const router = express.Router();

// Item Model
const Beer = require('../../models/Beer');

// @route   GET api/items
// @desc    Get All Items
// @access  Public
router.get('/', (req, res) => {
    Beer.find()
        .then(beer => res.json(beer))
})

// @route   POST api/items
// @desc    Create an Item
// @access  Public
router.post('/', (req, res) => {
    const newBeer = new Beer({
        beerName: req.body.beerName,
        brewer: req.body.brewer,
        beerNote: req.body.beerNote,
        style: req.body.style,
        imageURL: req.body.imageURL,
        hbcAddress: req.body.hbcAddress
    });

    newBeer.save().then(beer => res.json(beer));
})

// @route   DELETE api/items/:id
// @desc    Delete an Item
// @access  Public
router.delete('/:id', (req, res) => {
    Beer.findById(req.params.id)
        .then(beer => beer.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }))
})


module.exports = router;
