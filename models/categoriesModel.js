const mongoose=require("./db");
// Define a schema
const Schema = mongoose.Schema;
const SomeModelSchema = new Schema({
    category_name: String,
    products: [
        {
            code: Number,
            description: String
    }
    ],
});
// Compile model from schema
module.exports = mongoose.model("SomeModel", SomeModelSchema);