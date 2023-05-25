const Restaurant = require("../schemas/restaurants");

const getMcDonList = async () => {
  const items = await Restaurant.find({ category: "McDonald's" });
  return items;
};

module.exports = getMcDonList;
