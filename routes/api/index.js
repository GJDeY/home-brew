const router = require("express").Router();
const beerRoutes = require("./beerApi");

router.use("/beers", beerRoutes);

module.exports = router;
