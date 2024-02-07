const {GeneratenewshortURL ,redirecttoOriginalPage,Analytics} = require("../controllers/control");

const urlrouter = require("../controllers/control")

const express = require("express");

const router = express.Router();

router.post("/",GeneratenewshortURL);

router.get("/:shortid",redirecttoOriginalPage)

router.get( "/analytics/:shortid/" ,Analytics );

module.exports = router;


