const mongoose = require("mongoose");

const hdMoviesAndShowsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("HDMoviesAndShows", hdMoviesAndShowsSchema);
