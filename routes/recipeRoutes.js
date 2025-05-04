const express = require("express")
const router = express.Router();

const {createRecipe, getAllRecipes, getRecipeById, updateRecipe, deleteRecipe} = require("../controllers/recipeController")

router.post("/",createRecipe);
router.get("/", getAllRecipes);
router.get("/:recipeId", getRecipeById);
router.put("/:recipeId", updateRecipe);
router.delete("/:recipeId", deleteRecipe);


module.exports = router;