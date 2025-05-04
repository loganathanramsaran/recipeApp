const express = require("express");
const app = express();

const homeRoutes = require("./routes/homeRoutes");
const recipeRoutes = require("./routes/recipeRoutes");

//Inbuilt Middleware for JSON body parser
app.use(express.json())

app.use("/",homeRoutes);
app.use("/recipes",recipeRoutes);

module.exports=app;