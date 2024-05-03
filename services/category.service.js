const db = require("../models/categoriesModel");

const addCategory = async (req, res) => {
    const c = new db({
        category_name: req.body.category_name,
        products: []
    });
    await c.save();
    res.send("Data Received: " + JSON.stringify(req.body));
};
const getCategoryes = async (req, res) => {
    //    categories = await db.find()
    res.json(await db.find());//.toSort((a, b) => a.category_name.localeCompare(b.category_name)));
};
const getCategory = async (req, res) => {
    const category_name = req.params.category_name;
    const category = await db.find({ category_name: category_name });
    if (!category) {
        res.status(404);
        res.send("CATEGORY NOT FOUND");
    }
    res.json(category);
};
const updateCategory = async (req, res) => {
    let name = req.params.category_name;
    const category = await db.findOne({ category_name: name });
    category.category_name = req.body.category_name;
    await category.save();
    res.send();
};
const deleteCategory = async (req, res) => {
    let name = req.params.category_name;
    await db.findOneAndDelete({ category_name: name });
    res.send();
};
module.exports.addCategory = addCategory;
module.exports.getCategoryes = getCategoryes;
module.exports.getCategory = getCategory;
module.exports.updateCategory = updateCategory;
module.exports.deleteCategory = deleteCategory;
