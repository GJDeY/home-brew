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
    let url = "https://api-ropsten.etherscan.io/api?module=account&action=tokenbalance&contractaddress=0xcf86a1cfd63e26960a61b7f5cbc521a189e2522f&address=" + hbcAddress + "&tag=latest&apikey=QCNME6B3SF5IJQMR4RA3S6NQ1UPI1AF66T"
    // let url = 'https://ballup-turned-hoopsgram-api.herokuapp.com/api/plus/courts'
    return axios.get(url)
  }

};