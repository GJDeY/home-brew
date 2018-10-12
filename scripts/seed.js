const mongoose = require("mongoose");
const db = require("../models");

// This file empties the beers collection and inserts the beers below
mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/home-brew"
);

const beerSeed = [
    {
        beerName: "Luke",
        brewer: "Crimson IPA",
        beerNote:
            "5.8% An American IPA with notes of cherry and cinnamon. Dark reddish-brown in color and perfect for fall festivities. This year, I used a mix of citra and mosiac hops. Can't wait for you all to try it out at our next event!",
        style: "",
        imageURL: "https://i.imgur.com/xvgmOCQ.jpg",
        hbcAddress: ""

    },
    {
        beerName: "Grande Porter",
        brewer: "Alex Mitz",
        beerNote:
            "6.7% Porter. This porter will blow your mind! I'm super stoked about it, might be my best ever! I created it with fuggle and willamette hops.",
        style: "",
        imageURL: "https://imgur.com/t/craft_beer/VFMcvhh",
        hbcAddress: ""

    },
    {
        beerName: "Whiny Wheat Mill",
        brewer: "Brad Johnson",
        beerNote:
            "5.0%. My second try at this witbeer, this one is better than my last batch and also has been getting better reviews from my friends who have tried it as well. Come out to the next event to try it, I'll be there with plenty of these to go around.",
        style: "",
        imageURL: "https://i.imgur.com/jwfUkeQb.jpg",
        hbcAddress: ""
    },
    {
        beerName: "Hopwave",
        brewer: "Rebecca Miner",
        beerNote:
            "6.7%. This IPA brings a rush of hops to the palate, is mildly bitter, and is sure to satisfy any hoppy IPA lovers. Trust me, I made it!",
        style: "",
        imageURL: "https://imgur.com/gallery/7ooe0",
        hbcAddress: ""
    },
    {
        beerName: "Atlantic Air Lager",
        brewer: "Melissa Lawson",
        beerNote:
            "4.3%. Lager. Inspired by a trip to the east coast in July, I wanted something I could enjoy year-round, it's distinct and only a trace of sweetness. Lighlty golden in color.",
        style: "",
        imageURL: "https://imgur.com/gallery/gyi154r",
        hbcAddress: ""
    },
    {
        beerName: "YellowDaze",
        brewer: "Nikki Shepard",
        beerNote:
            "5.6 Golden Ale. When I made this beer I wanted it to be mildly hoppy and I think I came up with a winner. It's deep golden in color and I used citra hops",
        style: "",
        imageURL: "https://i.imgur.com/e28jCPQb.jpg",
        hbcAddress: ""
    },
    {
        beerName: "Cranky Neighbor Amber Ale",
        brewer: "Frank Calvotti",
        beerNote:
            "4.8% Amber Ale. Inspired by my neighbor, who usually says my beers are too hoppy. I gave him one to try last week and he loved it.",
        style: "",
        imageURL: "https://imgur.com/t/craft_beer/zPsv2mn",
        hbcAddress: ""
    },
    {
        beerName: "Get Lost Blonde Ale",
        brewer: "Lucas Finch",
        beerNote:
            "4.3%. This refreshing blonde is just sweet enough. I made this one 2 weeks ago and used only nugget hops. Hope you guys like it and get a chance to try it before they are gone",
        style: "",
        imageURL: "https://i.imgur.com/HqisUS0b.jpg",
        hbcAddress: ""
    },
    {
        beerName: "Beery Wonder",
        brewer: "Bob Arnoldus",
        beerNote:
            "6.6% Fruit Ale. Simply wonderful. See you all soon!",
        style: "",
        imageURL: "https://i.imgur.com/SZ3CYCbb.jpg",
        hbcAddress: ""
    },
    {
        beerName: "Barn Door Down Home Ale",
        brewer: "Chris Ramirez",
        beerNote:
            "7.2% Farmhouse Ale. Brewed like it was meant to be brewed. Bold in character, easy mouthfeel, with hints of pepper and funk. Golden yellow and hazy, yet stronger than it looks. Have a pint and you'll know.",
        style: "",
        imageURL: "https://i.imgur.com/McljpTMb.jpg",
        hbcAddress: ""
    },
    {
        beerName: "Amberjack",
        author: "Will Knowles",
        beerNote:
            "5.1% Amber Ale. My 25th beer ever and I wanted to create something special. Before I made this brew, I realized that I have never created an amber ale, so I did! After extensive research and letting it ferment for 3 weeks, I am pretty sure I knocked it out of the park with this one. I hope you all feel the same way. I know I haven't been out to the last two events, but I'm ready for this next one. See you very soon -W.K.",
        style: "",
        imageURL: "https://i.imgur.com/yxe5eI7.jpg",
        hbcAddress: ""
    },
    {
        beerName: "Panda Time Vanilla Porter",
        brewer: "Keith Sampson",
        beerNote:
            "6.5% Vanilla Porter. Saaz Hops were the key in this Porter. Heavy vanilla undertones with a bit of chocolate in there as well. Great on a chilly Chicago evening. Bear Down!",
        style: "",
        imageURL: "https://i.imgur.com/OAGTjzA.jpg",
        hbcAddress: ""
    }
];

db.Beer
    .remove({})
    .then(() => db.Beer.collection.insertMany(beerSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
