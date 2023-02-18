/**
 * Handle all routes that begin with /inventoryitems
 */
const express = require("express");
const router = express.Router();
const MovieAndShowInfo = require("../models/MovieAndShowInfoModel");

/**
 * Get all inventory items.
 */
router.get("/", async (req, res) => {
  console.log("missingfileinfo.get(/)> req.body: " + req.body);
  //  console.log(req);
  try {
    // Only retrieve MovieAndShowInfo records that
    // have a missing file.
    const missingFiles = await MovieAndShowInfo.find({ isMissingFile: true });
    console.log(
      "missingfileinfo.get> missingFiles.length: " + missingFiles.length
    );
    //    console.log(JSON.stringify(missingFiles));
    res.json(missingFiles);
  } catch (err) {
    // 500 is server error code
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
