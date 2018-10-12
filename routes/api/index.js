const router = require("express").Router();
const beerRoutes = require("./beerAPI");

router.use("/beers", beerRoutes);

module.exports = router;
