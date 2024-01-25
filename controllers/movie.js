const { Movie} = require('../models')

class MovieController{
    static async getLogin(req,res,next){
        try {
            const getMovies = await Movie.findAll()

            res.status(200).json(getMovies)
        } catch (error) {
            next(error)
        }
    }
}


module.exports = MovieController