const Order = require("../schemas/orders");

const create = async (data) => {
  const order = await Order.create(data);
  return order;
};

module.exports = create;
