const {Router} = require('express')
const {getAllPokemons, createPokemon, searchPokemon} = require('../controllers/pokemon')

const router = Router()

router.get('/:id', searchPokemon);
router.get('/', getAllPokemons);
router.post('/', createPokemon);


module.exports = router;