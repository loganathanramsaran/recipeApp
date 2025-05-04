const mongoose = require("mongoose");

async function mongoConnect() {
    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/recipeApp');
        console.log("MongoDB connected Successfully");
    }
    catch(error){
        console.log("MongoDB connection ERROR:",error.message);
    }
}

module.exports = mongoConnect;