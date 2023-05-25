const { getUkCuisineList } = require("../services");

const getUkCuisine = async (req, res) => {
  const ukCuisineList = await getUkCuisineList();

  res.json({
    status: "success",
    code: 200,
    data: {
      ukCuisineList,
    },
  });
};

module.exports = getUkCuisine;
