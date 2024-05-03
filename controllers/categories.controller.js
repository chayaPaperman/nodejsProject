const { Router } = require("express");
const app = Router();
const categoryService = require("../services/category.service");

    app.post("/categories", async(req, res) => {
    categoryService.addCategory(req, res);
    });
    app.get("/categories", async(req, res) => {
        categoryService.getCategoryes(req, res);

    });
    app.get("/categories/:category_name", async(req, res) => {
        categoryService.getCategory(req, res);

    });
    app.put("/categories/:category_name", async(req, res) => {
        categoryService.updateCategory(req, res);

    });
    app.delete("/categories/:category_name",async (req, res) => {
        categoryService.deleteCategory(req, res);

    });
module.exports = app;