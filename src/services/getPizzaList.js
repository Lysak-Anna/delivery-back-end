const Restaurant = require("../schemas/restaurants");

const getPizzaList = async () => {
  const items = await Restaurant.find({ category: "pizza" });
  return items;
};

module.exports = getPizzaList;
