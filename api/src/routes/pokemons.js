const { Router } = require("express");
const {
  getAllPokemons,
  createPokemon,
  searchPokemonById,
  getPokemonDetails,
} = require("../controllers/pokemon");

const router = Router();

router.get("/:id", searchPokemonById);
router.get("/", getAllPokemons);
router.get("/details/:id", getPokemonDetails);
router.post("/", createPokemon);

module.exports = router;
