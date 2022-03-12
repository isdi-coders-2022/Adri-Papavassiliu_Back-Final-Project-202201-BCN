require("dotenv").config();
const express = require("express");
const { getAllVideogames } = require("../controllers/videogamesControllers");

const router = express.Router();

router.get("/", getAllVideogames);

module.exports = router;
