const Restaurant = require("../schemas/restaurants");

const getUkCuisineList = async () => {
  const items = await Restaurant.find({ category: "Ukrainian cuisine" });
  return items;
};

module.exports = getUkCuisineList;
