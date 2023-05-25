const express = require("express");
const router = express.Router();

const { errorHandler } = require("../../helpers/errorHandler");

const {
  getSushi,
  getKFC,
  getPizza,
  getMcDon,
  getUkCuisine,
} = require("../../controllers");

router.get("/sushi", errorHandler(getSushi));
router.get("/kfc", errorHandler(getKFC));
router.get("/pizza", errorHandler(getPizza));
router.get("/mc-don", errorHandler(getMcDon));
router.get("/uk-cuisine", errorHandler(getUkCuisine));

module.exports = router;
