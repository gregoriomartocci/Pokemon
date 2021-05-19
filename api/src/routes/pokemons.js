const {Router} = require('express')
const {getAllPokemons, createPokemon, searchPokemonById} = require('../controllers/pokemon')

const router = Router()

router.get('/:id', searchPokemonById);
router.get('/', getAllPokemons);
router.post('/', createPokemon);


module.exports = router;