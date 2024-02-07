const GeneratenewshortURL = require("../controllers/control");
const express = require("express");
const router = express.Router();

router.post("/",GeneratenewshortURL);

module.exports = GeneratenewshortURL

