const mongoose = require("mongoose");

const peopleSchema = mongoose.Schema({
  name: { type: String, required: true },
  lastName: { type: String, required: true },
  age: { type: Number, required: true },
});

module.exports = mongoose.model("poeples", peopleSchema);
