const express = require("express");
const app = express();

const homeRoutes = require("./routes/homeRoutes");

app.use("/",homeRoutes)



module.exports=app;