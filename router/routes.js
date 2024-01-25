const MovieController = require('../controllers/movie')
const UserController = require('../controllers/user')
const authenticationUser = require('../middlewares/authentication')

const router = require('express').Router()


router.post('/register',UserController.postRegister)
router.post('/login',UserController.postLogin)
router.use(authenticationUser)
router.get('/movies',MovieController.getLogin)


module.exports = router