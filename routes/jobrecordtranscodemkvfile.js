const express = require("express");
const router = express.Router();
const {
  JobRecord_TranscodeMKVFileSchema,
} = require("../models/jobRecord_MakeFakeOrTranscodeMKVFileModel");

/**
 * Create a new job record to make a fake mkv file.
 */
router.post("/", async (req, res) => {
  //  console.log("jobrecordtranscodemkvfile.post(/)> req.body: " + req.body);
  //  console.log(req);
  try {
    const jobRecordTranscodeMKVFile = new JobRecord_TranscodeMKVFileSchema({
      mkvLongPath: req.body.mkvLongPath,
      mp4LongPath: req.body.mp4LongPath,
      movieOrShowName_id: req.body.movieOrShowName_id,
      movieOrShowName: req.body.movieOrShowName,
      mkvFileName: req.body.mkvFileName,
      fileName: req.body.fileName,
      missingMKVFile: req.body.missingMKVFile,
      missingMP4File: req.body.missingMP4File,
    });
    const newJobRecordTranscodeMKVFile = await jobRecordTranscodeMKVFile.save();
    console.log(
      "jobrecordtranscodemkvfile.post> newJobRecordTranscodeMKVFile: " +
        JSON.stringify(newJobRecordTranscodeMKVFile)
    );
    res.json(newJobRecordTranscodeMKVFile);
  } catch (err) {
    // 500 is server error code
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
