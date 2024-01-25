const { verifyToken } = require("../helpers/jwt");
const {User} = require('../models')
async function authenticationUser(req,res,next){
    try {
        // console.log("masuk auth")
        const {access_token} = req.headers
        // console.log("access_token", access_token)
        if (!access_token) throw {name:"unauthenticated"}

        const payload = verifyToken(access_token)

        const getUser = await User.findByPk(payload.id)

        if(!getUser) throw{name:"unauthenticated"}

        req.user = {
            accessToken : access_token,
            email: getUser.email,
        }
        next()
    } catch (error) {
        next(error)
    }
}

module.exports = authenticationUser