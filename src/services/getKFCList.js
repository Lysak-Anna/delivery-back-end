const Restaurant = require("../schemas/restaurants");

const getKFCList = async () => {
  const items = await Restaurant.find({ category: "KFC" });
  return items;
};

module.exports = getKFCList;
