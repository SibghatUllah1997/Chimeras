const { User } = require("../models/User")


module.exports = function (req, res, next){


    if(!req.user.isArtist) res.status(403).send('Access Denied');
    next();
}