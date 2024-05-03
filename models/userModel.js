const mongoose = require("./db");
// Define a schema
const Schema = mongoose.Schema;
const userModelSchema = new Schema({
    first_name: String,
    last_name: String,
    email: String,
    password: String,
    user_id: String,
    token:String
});
// Compile model from schema
module.exports = mongoose.model("userModel", userModelSchema);          