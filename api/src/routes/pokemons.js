const {Router} = require('express')
const {getAllPokemons} = require('../controllers/pokemon')

const router = Router()

router.get('/',getAllPokemons);


module.exports = router;