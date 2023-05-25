const express = require("express");
const router = express.Router();

const { errorHandler } = require("../../helpers/errorHandler");
const { validateOrderData } = require("../../middlewares/validation");
const { validateHuman } = require("../../middlewares/validateHuman");
const { createOrder } = require("../../controllers");

router.get("/");
router.post("/", validateHuman, validateOrderData, errorHandler(createOrder));

module.exports = router;
