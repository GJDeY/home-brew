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
    return axios.post("/api/beers");
  },
  deleteBeer: id => {
    return axios.delete("/api/beers" + id)
  }
};
