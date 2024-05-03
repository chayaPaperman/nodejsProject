//catch errors
module.exports= function errorHandler(err, req, res, next) {
    if (res.headersSent) {
        return next(err);
    }
    res.status(500);
    res.send("there is an error in the server now,try later");
};