const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const restaurant = new Schema({
  category: {
    type: String,
  },
  name: {
    type: String,
  },
  price: {
    type: String,
  },
  image: {
    type: String,
  },
});

const Restaurant = mongoose.model("restaurant", restaurant);
module.exports = Restaurant;
