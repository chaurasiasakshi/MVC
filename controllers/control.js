const URL = require("../models/schema");
const shortid = require("shortid")
//Controllers

const GeneratenewshortURL = async (req, res) => {
    const body = req.body;
    const ShortId = shortid()
    await URL.create({
        ShortID: ShortId,
        RedirectURL: body.url,
        VisitedHistory: [],
    })
}

const redirecttoOriginalPage = ("/:shortid", async (req, res) => {
    const ShortID = req.params.shortid;
    const entry = await URL.findOneAndUpdate({ ShortID }, {
        $push: {
            VisitedHistory: {
                timestamp: Date.now()
            }
        }

    })
    res.redirect(entry.RedirectURL)
})


const Analytics = ("/:shortid",async(req,res)=>{
    const ShortID= req.params.shortid;
    const result = await URL.findOne({ShortID});
    res.json({Totalclick:result.VisitedHistory.length,
    analytics:result.VisitedHistory})
})

//exporting

module.exports = { redirecttoOriginalPage, GeneratenewshortURL ,Analytics};

// module.exports= urlrouter;