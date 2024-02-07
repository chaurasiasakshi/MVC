const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/DBforShortURLGen").then(()=>{
    console.log("MongoDB Connected")
}).catch((err)=>{
    console.log("Error in connecting to MongoDB ",err);
});

