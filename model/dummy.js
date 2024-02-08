const mongoose = require("mongoose");

const Dummy = mongoose.model("dummy", {
  name: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
});

module.exports = Dummy;
