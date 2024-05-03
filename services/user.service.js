const userModel = require("../models/userModel");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const addUser = async (req, res) => {
    try {
        const { first_name, last_name, email, password, user_id } = req.body;
        if (!(email && password && first_name && last_name && user_id)) {
            res.status(400).send("All input is required");
        }
        let oldUser;
        await userModel.exists({ email: email }).then((res) => {
            oldUser = res;
        });
        if (oldUser) {
            return res.status(409).send("User Already Exist. Please ");
        }
        const encryptedPassword = await bcryptjs.hash(password, 10);
        const token =jwt.sign({ user_id: user_id, email },
            process.env.TOKEN_KEY, {
            expiresIn: "2h",
        }
        );
        const user = new userModel({ first_name: first_name, last_name: last_name, email: email, password: encryptedPassword, user_id: user_id, token: token });
        user.save();
        res.status(201).json(user);
    } catch (err) {
        console.log(err);
    }
};
const signin = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!(email && password)) {
            res.status(400).send("All input is required");
        }
        let user;
        await userModel.findOne({ email: email }).then((res) => {
            user = res;
        });
        if (!user) {
            return res.status(409).send("User is not Exist. Please ");
        }
        if (user && (await bcryptjs.compare(password, user.password))) {
            const token = jwt.sign({ user_id: user._id, email },
                process.env.TOKEN_KEY, {
                expiresIn: "2h",
            }
            );
            user.token = token;
            res.status(200).json(user);
        }
        else
            res.status(400).send("Invalid Credentials");
    } catch (err) {

        console.log(err);
    }
};

module.exports.addUser = addUser;
module.exports.signin = signin;