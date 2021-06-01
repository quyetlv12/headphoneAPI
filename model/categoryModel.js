import mongoose from "mongoose";
const Schema = mongoose.Schema;

const Categories = new Schema(
  {
    name: {
      type: String,
      require: true,
    },
    image: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Categories", Categories);
