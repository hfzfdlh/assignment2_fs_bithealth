const jwt = require('jsonwebtoken')
const key = "BITHEALTH_INDONESIA"

const createToken = (id)=>{
    return jwt.sign({id:id}, key)
}

const verifyToken = (token)=>{
    return jwt.verify(token,key)
}

module.exports = {
    createToken, verifyToken
}