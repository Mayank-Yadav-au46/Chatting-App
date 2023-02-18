const mongoose = require("mongoose");
require("dotenv").config();

mongoose.connect(process.env.Mongo_url, { dbName: "QuickConnect" }, ()=>{
    console.log("DB connected");
});
