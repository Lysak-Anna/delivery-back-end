const Restaurant = require("../schemas/restaurants");

const getSushiList = async () => {
  const items = await Restaurant.find({ category: "Sushi" });
  return items;
};

module.exports = getSushiList;
