const express = require("express");
const router = express.Router();
const {
  JobRecord_MakeFakeMKVFileSchema,
} = require("../models/jobRecord_MakeFakeOrTranscodeMKVFileModel");

/**
 * Create a new job record to make a fake mkv file.
 */
router.post("/", async (req, res) => {
  //  console.log("jobrecordmakefakeortranscodemkvfile.post(/)> req.body: " + req.body);
  //  console.log(req);
  try {
    const jobRecordMakeFakeMKVFile = new JobRecord_MakeFakeMKVFileSchema({
      mkvLongPath: req.body.mkvLongPath,
      mp4LongPath: req.body.mp4LongPath,
      movieOrShowName_id: req.body.movieOrShowName_id,
      movieOrShowName: req.body.movieOrShowName,
      mkvFileName: req.body.mkvFileName,
      fileName: req.body.fileName,
      missingMKVFile: req.body.missingMKVFile,
      missingMP4File: req.body.missingMP4File,
    });
    const newJobRecordMakeFakeMKVFile = await jobRecordMakeFakeMKVFile.save();
    console.log(
      "jobrecordmakefakeortranscodemkv.post> newJobRecordMakeFakeMKVFile: " +
        JSON.stringify(newJobRecordMakeFakeMKVFile)
    );
    //    console.log(JSON.stringify(newJobRecordMakeFakeMKVFile));
    res.json(newJobRecordMakeFakeMKVFile);
  } catch (err) {
    // 500 is server error code
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
