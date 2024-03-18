const express = require("express");

const app = express();

const urlRoute = require("./routes/router");

port = 9100;

const path = require("path")

app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.set("view engine","ejs");
app.set("views",path.resolve("./views"))
app.use("/url",urlRoute);

app.use("/url/analytics",urlRoute)

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
});
