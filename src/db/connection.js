const mongoose = require("mongoose");

mongoose.set("strictQuery", true);

const connection = async (url) =>
  await mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

module.exports = {
  connection,
};
