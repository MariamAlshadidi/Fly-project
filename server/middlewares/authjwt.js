const jwt = require("jsonwebtoken")

const secretKey = process.env.JWT_SECRET_KEY

module.exports.authenticate = function(req, res, next) {

    const authHeader = req.headers["authorization"]
    if(!authHeader) {
        return res.status(403).json({error: "No token provided"})
    }
    //---
    const token = authHeader.substring(8,authHeader.length-1)
    //console.log(token)
    jwt.verify(token, secretKey, (err, decodedToken) => {
        if(err) {
            res.status(401).json({error: "Bad token"})
        } else {
            req.userId = decodedToken.userId
            next();
        }
    })
}