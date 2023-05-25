const { getMcDonList } = require("../services");

const getMcDon = async (req, res) => {
  const mcDonList = await getMcDonList();

  res.json({
    status: "success",
    code: 200,
    data: {
      mcDonList,
    },
  });
};

module.exports = getMcDon;
