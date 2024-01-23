'use strict';
const {
  Model
} = require('sequelize');
const { createPass } = require('../helpers/bcrypt');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    name: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:{
          msg:'name cannot be null'
        },
        notEmpty:{
        msg:'name cannot be empty'}
      }
      
    },
    username: {
      type:DataTypes.STRING,
      allowNull:false,
      unique:{
        msg:'username has been used'
      },
      validate:{
        notNull:{
          msg:'username cannot be null'
        },
        notEmpty:{
        msg:'username cannot be empty'}
      }
      
    },
    email: {
      type:DataTypes.STRING,
      allowNull:false,
      unique:{
        msg:'email has been used'
      },
      validate:{
        notNull:{
          msg:'email cannot be null'
        },
        notEmpty:{
        msg:'email cannot be empty'}
      }
      
    },
    password: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:{
          msg:'password cannot be null'
        },
        notEmpty:{
        msg:'password cannot be empty'}
      }
      
    },
    role: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:{
          msg:'role cannot be null'
        },
        notEmpty:{
          msg:'role cannot be empty'}
      }
      
    },
    address: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:{
          msg:'address cannot be null'
        },
        notEmpty:{
         msg:'address cannot be empty'}
      }
      
    },
    phoneNumber: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:{
          msg:'phone number cannot be null'
        },
        notEmpty:{
        msg:'phone number cannot be empty'}
      }
     }
  }, {
    hooks:{
      beforeCreate:(user)=>{
        user.password = createPass(user.password)
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};