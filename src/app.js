const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const routes = require("./routes/api");
const { NotFoundError, BadRequestError } = require("./helpers/errorHandler");
const app = express();
const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

/* -------------- routes ---------------- */
app.use("/api/restaurants", routes.restaurants);
app.use("/api/orders", routes.orders);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  if (err instanceof NotFoundError || err instanceof BadRequestError) {
    return res.status(err.code).json({
      status: err.status,
      message: err.message,
    });
  }
  res.status(500).json({ message: err.message });
});

module.exports = app;
