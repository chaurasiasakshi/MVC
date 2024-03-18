const {GeneratenewshortURL ,redirecttoOriginalPage,Analytics,allusers,api} = require("../controllers/control");

// const urlrouter = require("../controllers/control")

const express = require("express");

const router = express.Router();

router.post("/",GeneratenewshortURL);

router.get("/",allusers);

router.get("/api",api);

router.get("/:shortid",redirecttoOriginalPage)

router.get( "/analytics/:shortid/" ,Analytics );

// --- exporting--- 

module.exports = router;


