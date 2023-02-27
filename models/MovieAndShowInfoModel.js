const mongoose = require("mongoose");

const movieAndShowInfoSchema = new mongoose.Schema({
  // mkvLongPath is the full path to the movie or tv show mkv directory
  mkvLongPath: {
    type: String,
    required: true,
  },

  // mp4LongPath is the full path to the movie or tv show mp4 directory
  mp4LongPath: {
    type: String,
    required: true,
  },

  // name is the short name without the full path
  // used for compact presentation to the user
  movieOrShowName: {
    type: String,
    required: true,
  },

  // true if this movie or tv show is missing at least one mkv or mp4 file
  isMissingFile: {
    type: Boolean,
    required: true,
  },

  // Each correlatedFile should be an array of two entries:
  // mkv file and mp4 file.
  // Either may be empty, but not both
  correlatedFilesList: [
    {
      // The name of the file without full path
      fileName: {
        type: String,
        required: true,
      },

      // true if this mkv/mp4 pair is missing the mkv file
      missingMKVFile: {
        type: Boolean,
        required: true,
      },

      // true if this mkv/mp4 pair is missing the mp4 file
      missingMP4File: {
        type: Boolean,
        required: true,
      },

      // array of mkv files by name without path
      mkvFilesByName: [String],

      // array of mp4 files by name without path
      mp4FilesByName: [String],
    },
  ],
});

module.exports = mongoose.model("MovieAndShowInfo", movieAndShowInfoSchema);
