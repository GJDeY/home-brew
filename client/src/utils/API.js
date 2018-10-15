import axios from "axios";

export default {
  // define your front end API calls here, like so:
  // getArticles: function(params) {
  //   return axios.get("/api/nyt", {someDATA: data});
  // }
  //they can then be imported and used inside of your react components/pages

  createBeer: beer => {
    return axios.post("/api/beers", beer);
  },
  getBeers: () => {
    return axios.get("/api/beers");
  },
  deleteBeer: id => {
    return axios.delete("/api/beers/" + id)

  },
  updateBeer: (id, beerData) => {
    return axios.put("/api/beers/" + id, beerData)
  },

  getHBC: hbcAddress => {
    return axios.get("https://api-ropsten.etherscan.io/api?module=account&action=tokenbalance&contractaddress=0xCF86a1CFD63E26960A61B7F5Cbc521A189E2522f&address=" + hbcAddress + "&tag=latest&apikey=YourApiKeyToken")
  }

};