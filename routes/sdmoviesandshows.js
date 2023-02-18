/**
 * Handle all routes that begin with /inventoryitems
 */
const express = require("express");
const router = express.Router();
const SDMoviesAndShows = require("../models/SDMoviesAndShowsModel");

/**
 * Get all inventory items.
 */
router.get("/", async (req, res) => {
  console.log("SDMoviesAndShows.get(/)> req.body: " + req.body);
  //  console.log(req);
  try {
    const sdMoviesAndShows = await SDMoviesAndShows.find();
    console.log(
      "SDMoviesAndShows.get(/)> sdMoviesAndShows.length: " +
        sdMoviesAndShows.length
    );
    res.json(sdMoviesAndShows);
  } catch (err) {
    // 500 is server error code
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
