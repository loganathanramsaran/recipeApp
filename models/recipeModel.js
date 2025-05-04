const mongoose = require("mongoose");

//Create Schema
const recipeSchema = mongoose.Schema({
    recipeId : {type:Number,required:true,unique:true},
    recipeName : {type:String,required:true},
    description : {type:String},
    category : {type:String,required:true}
});

//Create model
const Recipe = mongoose.model("Recipe",recipeSchema);

module.exports = Recipe;
