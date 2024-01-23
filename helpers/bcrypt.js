const bcrypt = require('bcryptjs')

let createPass = (pass)=>{
    return bcrypt.hashSync(pass,bcrypt.genSaltSync(10))

}

let checkPass = (pass,hashPass) =>{
    return bcrypt.compareSync(pass,hashPass)
}

module.exports = {
    createPass,checkPass
}