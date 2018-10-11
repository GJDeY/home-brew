var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var app = express();
var PORT = process.env.PORT || 8080;



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/home-brew";
mongoose.connect(MONGODB_URI);

var personModel = require('./models/Beer.js');

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});


app.post('/saveDude', function (req, res) {
  const newBeer = new Beer({
    name: req.body.name
  });

  newBeer.save().then(beer => res.json(beer));

})

app.get('/grabDude', function (req, res) {
  personModel.find({}).then(function (peopleFromDb) {
    res.json(peopleFromDb);
  })
})

app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});
