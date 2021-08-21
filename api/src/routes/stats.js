const { Router } = require("express");
const { getAllStats, createType } = require("../controllers/stat.js");

const router = Router();
router.get("/", getAllStats);

module.exports = router;
