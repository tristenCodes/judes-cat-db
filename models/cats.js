const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const catSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  alternative_names: [
    {
      type: String,
    },
  ],
  description: {
    type: String,
  },
  categories: [
    {
      type: Schema.Types.ObjectId,
      ref: "Category",
    },
  ],
  colors: [
    {
      type: String,
    },
  ],
  quantity: {
    type: Number,
  },
  size: {
    type: String,
    enum: ["small", "medium", "large"],
    default: "small",
  },
  image_path: {
    type: String,
    required: true,
  },
});

const Cat = mongoose.model("Cat", catSchema);
module.exports = Cat;