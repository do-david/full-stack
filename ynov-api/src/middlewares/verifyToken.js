//const jwt = require('jsonwebtoken');
import jwt from "jsonwebtoken";

function verifyToken(req, res, next) {
    let token = req.headers.authorization;
    if(!token){
        res.status(403).send({
            auth: false,
            message: 'missing token, please login'
        })
    }
    jwt.verify(
        token,
        process.env.SECRET,
        (err)=> {
            if(err){
                return res.status(401).send({
                    auth: false,
                    message: "no authorized"
                })
            }
        });
    next();
}

module.exports = verifyToken;