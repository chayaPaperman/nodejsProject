const { Router } = require("express");
const app = Router();
const userService=require("../services/user.service");

let Users = async function () {
    app.post("/signup",async (req, res) =>{userService.addUser(req,res);});
    app.post("/signin", async (req, res) => {
     userService.signin(req,res);
    });
};
Users();
module.exports = app;