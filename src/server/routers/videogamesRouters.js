require("dotenv").config();
const express = require("express");
const multer = require("multer");
const {
  getAllVideogames,
  deleteVideogame,
  createVideogame,
} = require("../controllers/videogamesControllers");

const router = express.Router();
const upload = multer({ dest: "uploads/" });

router.get("/", getAllVideogames);
router.delete("/:videogameId", deleteVideogame);
router.post("/create", upload.single("image"), createVideogame);

module.exports = router;
