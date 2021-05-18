const {Router} = require('express')
const {getAllPokemons, createPokemon} = require('../controllers/pokemon')

const router = Router()

router.get('/', getAllPokemons);
router.post('/', createPokemon)


module.exports = router;