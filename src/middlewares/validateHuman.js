const axios = require("axios");
const { BadRequestError } = require("../helpers/errorHandler");
require("dotenv").config();

const validateHuman = async (req, res, next) => {
  const { token } = req.body;
  const secret = process.env.CAPTCHA_SECRET_KEY;
  const { data } = await axios.post(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${token}`
  );

  if (!data.success) {
    throw new BadRequestError("You are not a human");
  }

  next();
};

module.exports = { validateHuman };
