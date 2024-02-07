const URL = require("../models/schema");
const shortid = require("shortid")
//Controllers

const GeneratenewshortURL = async(req,res)=>{
    const body = req.body;
    const ShortId = shortid()
    await URL.create({
        ShortID: ShortId,
        RedirectURL:body.url
    })
}

//exporting

module.exports=GeneratenewshortURL;