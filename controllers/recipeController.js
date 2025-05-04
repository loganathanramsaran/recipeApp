const Recipe = require("../models/recipeModel");

//Create a new recipe.
async function createRecipe(req, res) {
  try {
    const recipeData = req.body;
    newRecipe = await Recipe.create(recipeData);
  } catch (error) {
    res.json({ Error: error.message });
  }
}

//Retrieve all recipes.
async function getAllRecipes(req, res) {
  try {
    const recipes = await Recipe.find();
   if(recipes.length !==0){
    res.json({
        message: "All Recipes Founded",
        totalRecipes: recipes.length,
        recipes,
      });
   }else{
    res.json({message:"No Recipes Found"})
   }
  } catch (error) {
    res.json({ Error: error.message });
  }
}

//Retrieve a single recipe by ID.
async function getRecipeById(req, res) {
  try {
    const recipeId = Number(req.params.recipeId);
    const recipe = await Recipe.findOne({ recipeId: recipeId });
    if (recipe) {
      res.json({
        message: `Found recipe for given recipeID: ${recipeId}`,
        recipe,
      });
    } else {
      res.json({ message: `Recipe not found for given recipeID: ${recipeId}` });
    }
  } catch (error) {
    res.json({ Error: error.message });
  }
}

//Update a recipe by ID.
async function updateRecipe(req, res) {
  try {
    const recipeId = req.params.recipeId;
    const updatedData = req.body;
    const updatedRecipe = await Recipe.findOneAndUpdate({"recipeId":recipeId},updatedData,{new:true,runValidators:true});
    if(updatedRecipe){
        res.json({ message: `Updated Recipe for given recipeID: ${recipeId}`,updatedRecipe });
    }else{
        res.json({ message: `Recipe not found for given recipeID: ${recipeId}` });
    }

  } catch (error) {
    res.json({ Error: error.message });
  }
}

//Delete a recipe by ID.
async function deleteRecipe(req, res) {
  try {
    const recipeId = Number(req.params.recipeId);
    const deletedRecipe = await Recipe.findOneAndDelete({recipeId});
    if(deleteRecipe){
        res.json({ message: `Recipe Deleted Successfully for given recipeId: ${recipeId}`,deletedRecipe });
    }else{
        res.json({ message: `Recipe not found for given recipeID: ${recipeId}` });
    }
  } catch (error) {
    res.json({ Error: error.message });
  }
}

module.exports = {
  createRecipe,
  getAllRecipes,
  getRecipeById,
  updateRecipe,
  deleteRecipe,
};
