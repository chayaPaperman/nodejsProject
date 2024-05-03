//Set up mongoose connection
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
require("dotenv").config();
const mongoDB = process.env.DATABASE_URL;
//mongodb://C:/Program Files/MongoDB/Server/7.0/data/
main().catch((err) => console.log(err));
async function main() {
    await mongoose.connect(mongoDB);
}

module.exports=mongoose;