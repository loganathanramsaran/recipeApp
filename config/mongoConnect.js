const mongoose = require("mongoose");

async function mongoConnect() {
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("MongoDB connected Successfully");
    }
    catch(error){
        console.log("MongoDB connection ERROR:",error.message);
    }
}

module.exports = mongoConnect;