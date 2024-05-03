//log the system enteries details
module.exports= (req, res, next) => {
    console.log("Someone entered to: " + req.url + " in time: ", new Date().getHours()
     + ":" + new Date().getMinutes() + ":" + new Date().getSeconds());
    next();
};
