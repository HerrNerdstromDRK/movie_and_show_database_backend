const mongoose = require("mongoose");

const sdMoviesAndShowsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("SDMoviesAndShows", sdMoviesAndShowsSchema);
