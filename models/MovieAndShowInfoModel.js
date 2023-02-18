const mongoose = require("mongoose");

const movieAndShowInfoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  //   pathToMovieOrShow: {
  //     type: String,
  //     required: true,
  //   },
  // Each correlatedFile should be an array of two entries:
  // mkv file and mp4 file.
  // Either may be empty, but not both
  correlatedFilesList: [
    {
      name: String,
      mkvFilesByName: [String],
      mp4FilesByName: [String],
    },
  ],
});

module.exports = mongoose.model("MovieAndShowInfo", movieAndShowInfoSchema);
