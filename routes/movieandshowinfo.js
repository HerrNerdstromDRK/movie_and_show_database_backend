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
  //  console.log("movieandshowinfos.get(/)> req.body: " + req.body);
  //  console.log(req);
  try {
    const movieAndShowInfoFiles = await MovieAndShowInfo.find();
    console.log(
      "moviesandshowinfos.get> movieAndShowInfoFiles.length: " +
        movieAndShowInfoFiles.length
    );
    //    console.log(JSON.stringify(movieAndShowInfoFiles));
    res.json(movieAndShowInfoFiles);
  } catch (err) {
    // 500 is server error code
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
