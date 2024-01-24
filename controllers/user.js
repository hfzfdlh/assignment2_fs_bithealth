
const { checkPass } = require('../helpers/bcrypt')
const { createToken } = require('../helpers/jwt')
const { User } = require('../models')

class UserController{
    static async postRegister(req,res,next){
        try {
            res.status(201).json()
        } catch (error) {
            next(error)
        }
    }

    static async postLogin(req,res,next){
        try {
            console.log("masuk sini")
            const {email,password} = req.body
            if (!email) throw {name:'noEmail'}
            if (!password) throw {name:'noPass'}

            const getUser = User.findOne({where:{email}})

            if (!getUser) throw {name:'invalidUser'}

            const verifPass = checkPass(password,getUser.password)
            if (!getUser) throw {name:'invalidUser'}

            const accessToken = createToken(getUser.id)
            res.status(200).json({accessToken:req.user.accessToken,name:getUser.name, role:getUser.role,id:getUser.id})
            
        } catch (error) {
            next(error)
        }
    }

    static async getSingleUser(req,res,next){
        try {
            const {email} = req.user

            const getUser = await User.findOne({where:{email}})

            if (!getUser) throw{name:"unauthenticated"}
            res.status(200).json()
        } catch (error) {
            next(error)
        }
    }
}

module.exports = UserController