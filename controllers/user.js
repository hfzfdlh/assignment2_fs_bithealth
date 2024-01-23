
const { User } = require('../models')
class User{
    static async postLogin(req,res,next){
        try {
            
        } catch (error) {
            next(error)
        }
    }

    static async getSingleUser(req,res,next){
        try {
            const {email} = req.user

            const getUser = await User.findOne({where:{email}})

            if (!getUser) throw{name:"unauthenticated"}
            res.status(200).json({accessToken:req.user.accessToken,name:getUser.name, role:getUser.role,id:getUser.id})
        } catch (error) {
            next(error)
        }
    }
}

module.exports = User