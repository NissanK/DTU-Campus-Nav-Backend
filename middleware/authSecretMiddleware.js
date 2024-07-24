const express = require('express');

function authSecretMiddleware(req,res,next){
    const secret = req.headers.secret;
    if(secret === process.env.SECRET_API_KEY){
        next();
    }else{
        res.status(401).json({
            message: "itni aasani se data nhi milne waala"
        })
    }
}

module.exports = authSecretMiddleware;