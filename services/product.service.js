const db = require("../models/categoriesModel");

const addProduct = async (req, res) => {
    const category_name = req.params.category_name;
    const category = await db.findOne({ category_name: category_name });
    if (!category) {
        res.status(404);
        res.send("CATEGORY NOT FOUND");
    }
    category.products.push({
        code: req.body.code,
        description: req.body.description,
    });
    category.save();
    res.send("Data Received: " + JSON.stringify(req.body));
};

const getProducts = async (req, res) => {
    const category_name = req.params.category_name;
    const category = await db.findOne({ category_name: category_name });
    if (!category) {
        res.status(404);
        res.send("CATEGORY NOT FOUND");
    }
    res.json(category.products);//.toSorted((a, b) => { return a.description.localeCompare(b.description) }));
};

const getProduct = async (req, res) => {
    const category_name = req.params.category_name;
    const category = await db.findOne({ category_name: category_name });
    if (!category) {
        res.status(404);
        res.send("CATEGORY NOT FOUND");
    }
    const code = Number(req.params.code);
    const product = category.products.find(p => p.code === code);
    if (!product) {
        res.status(404);
        res.send("PRODUCT NOT FOUND");
    }
    res.json(product);
};

const updateProduct = async (req, res) => {
    const category_name = req.params.category_name;
    const code = Number(req.params.code);
    const category = await db.findOne({ category_name: category_name });
    const product = category.products.find(p => p.code === code);
    product.description = req.body.description;
    category.save();
    res.send("Data changed: " + JSON.stringify(req.body));
};

const deleteProduct = async (req, res) => {
    const category_name = req.params.category_name;
    const code = Number(req.params.code);
    const category = await db.findOne({ category_name: category_name });
    const product = category.products.find(p => p.code === code);
    product.deleteOne();
    category.save();
    res.send("the product deleted succesfully");
};

module.exports.addProduct = addProduct;
module.exports.getProducts = getProducts;
module.exports.getProduct = getProduct;
module.exports.updateProduct = updateProduct;
module.exports.deleteProduct = deleteProduct;
