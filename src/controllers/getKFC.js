const { getKFCList } = require("../services");

const getKFC = async (req, res) => {
  const kfcList = await getKFCList();

  res.json({
    status: "success",
    code: 200,
    data: {
      kfcList,
    },
  });
};

module.exports = getKFC;
