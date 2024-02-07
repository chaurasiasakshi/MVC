const { default: mongoose } = require("mongoose");

require("./connection");

//Schema
const UrlSchema = new mongoose.Schema({
    ShortID:{
        type:String,
        required:true,
        unique:true
    },
    RedirectURL:{
        type:String,
        required:true,
    }

});

//Model

const URL = mongoose.model("TableforShortURLGen",UrlSchema);

//Exporting 
module.exports= URL;