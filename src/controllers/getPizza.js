const { getPizzaList } = require("../services");

const getPizza = async (req, res) => {
  const pizzaList = await getPizzaList();

  res.json({
    status: "success",
    code: 200,
    data: {
      pizzaList,
    },
  });
};

module.exports = getPizza;
