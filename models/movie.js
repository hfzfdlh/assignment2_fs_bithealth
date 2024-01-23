'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Movie.init({
    title: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:{
          msg:'title cannot be null'
        },
        notEmpty:{
          msg:'title cannot be empty'
        }
      }
    },
    synopsis: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:{
          msg:'synopsis cannot be null'
        },
        notEmpty:{
          msg:'synopsis cannot be empty'
        }
      }
    },
    trailerUrl: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:{
          msg:'trailerUrl cannot be null'
        },
        notEmpty:{
          msg:'trailerUrl cannot be empty'
        }
      }
    },
    imgUrl: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:{
          msg:'imgUrl cannot be null'
        },
        notEmpty:{
          msg:'imgUrl cannot be empty'
        }
      }
    },
    rating: {
      type:DataTypes.INTEGER,
      allowNull:false,
      validate:{
        notNull:{
          msg:'rating cannot be null'
        },
        notEmpty:{
          msg:'rating cannot be empty'
        }
      }
    },
    status: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        notNull:{
          msg:'status cannot be null'
        },
        notEmpty:{
          msg:'status cannot be empty'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};