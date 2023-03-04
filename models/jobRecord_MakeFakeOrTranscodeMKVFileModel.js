const mongoose = require("mongoose");

const jobRecord_MakeFakeOrTranscodeMKVFileSchema = new mongoose.Schema({
  mkvLongPath: {
    type: String,
    required: true,
  },
  mp4LongPath: {
    type: String,
    required: true,
  },
  movieOrShowName_id: {
    type: String,
    required: true,
  },
  movieOrShowName: {
    type: String,
    required: true,
  },
  mkvFileName: {
    type: String,
    required: true,
  },
  fileName: {
    type: String,
    required: true,
  },
  missingMKVFile: {
    type: String,
    required: true,
  },
  missingMP4File: {
    type: String,
    required: true,
  },
});

exports.JobRecord_MakeFakeMKVFileSchema = mongoose.model(
  "jobRecord_MakeFakeMKVFile",
  jobRecord_MakeFakeOrTranscodeMKVFileSchema
);
exports.JobRecord_TranscodeMKVFileSchema = mongoose.model(
  "jobRecord_TranscodeMKVFile",
  jobRecord_MakeFakeOrTranscodeMKVFileSchema
);

/*
module.exports = mongoose.model(
  "jobRecord_MakeFakeOrTranscodeFile",
  jobRecord_MakeFakeOrTranscodeFileSchema
);
*/
