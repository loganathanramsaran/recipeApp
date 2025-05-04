const app = require("./app");
require("dotenv").config()
const PORT = process.env.PORT || 8000;

//Import dbConnection from config folder
const mongoConnect = require("./config/mongoConnect");

//Connection Establishment
mongoConnect();

//Local Server
app.listen(PORT,()=>{
    console.log(`App Started at Port:${PORT}, URL:http://localhost:${PORT}`)
})



