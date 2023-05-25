const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const order = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
    },
    address: {
      type: String,
      required: [true, "Address for delivery is required"],
    },
    order: [
      {
        id: {
          type: mongoose.Types.ObjectId,
          ref: "restaurant",
        },
        count: {
          type: Number,
        },
      },
    ],
  },
  { versionKey: false, timestamps: true }
);

const Order = mongoose.model("order", order);
module.exports = Order;
