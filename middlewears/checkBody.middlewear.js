//check if the request body is null
module.exports= (req, res, next) => {
    if (req.method === "PUT" || req.method === "POST") {
        if (JSON.stringify(req.body) === "{}") {
            res.send("You didnt send details!");
        } else {
            next();
        }

    } else {
        next();
    }
};