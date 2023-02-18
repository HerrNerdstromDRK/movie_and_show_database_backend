/**
 * Handle all routes that begin with /inventoryitems
 */
const express = require("express");
const router = express.Router();
const HDMoviesAndShows = require("../models/HDMoviesAndShowsModel");

/**
 * Get all inventory items.
 */
router.get("/", async (req, res) => {
  console.log("HDMoviesAndShows.get(/)> req.body: " + req.body);
  //  console.log(req);
  try {
    const hdMoviesAndShows = await HDMoviesAndShows.find();
    console.log(
      "HDMoviesAndShows.get(/)> hdMoviesAndShows.length: " +
        hdMoviesAndShows.length
    );
    res.json(hdMoviesAndShows);
  } catch (err) {
    // 500 is server error code
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
