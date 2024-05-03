const { Router } = require("express");
const app = Router();
const productService = require("../services/product.service");

let Products = async function () {
    app.post("/products/:category_name", async (req, res) => {
        productService.addProduct(req, res);
    });
    app.get("/products/:category_name", async (req, res) => {
        productService.getProducts(req, res);
    });
    app.get("/products/:category_name/:code", async (req, res) => {
        productService.getProduct(req, res);
    });
    app.put("/products/:category_name/:code", async (req, res) => {
        productService.updateProduct(req, res);
    });
    app.delete("/products/:category_name/:code", async (req, res) => {
        productService.deleteProduct(req, res);
    });
};



Products();
module.exports = app;