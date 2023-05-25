const { create } = require("../services");

const createOrder = async (req, res) => {
  const orderData = req.body;

  const order = await create(orderData);
  res.json({
    code: 201,
    status: "Created",
    data: {
      order,
    },
  });
};

module.exports = createOrder;
