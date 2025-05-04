const app = require("./app");
const PORT = 7500;

//Import dbConnection from config folder
const mongoConnect = require("./config/mongoConnect");

//Connection Establishment
mongoConnect();

//Local Server
app.listen(PORT,()=>{
    console.log(`App Started at Port:${PORT}, URL:http://localhost:${PORT}`)
})



