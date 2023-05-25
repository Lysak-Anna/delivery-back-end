const { getSushiList } = require("../services");

const getSushi = async (req, res) => {
  const sushiList = await getSushiList();

  res.json({
    status: "success",
    code: 200,
    data: {
      sushiList,
    },
  });
};

module.exports = getSushi;
