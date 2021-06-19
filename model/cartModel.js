import mongoose from "mongoose";
const Schema = mongoose.Schema;
const Cart = new Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    price: {
      type: Number,
    },
    quantity: {
      type: Number,
    },
    totalPrice: {
      type: Number,
    },
    products: {
      type: Array,
      default: [],
    },
    image: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", Cart);
