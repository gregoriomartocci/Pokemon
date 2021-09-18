const { Router } = require("express");
const {
  getAllPokemons,
  createPokemon,
  searchPokemonById,
  getPokemonDetails,
  getDBPokemons,
} = require("../controllers/pokemon");

const router = Router();

router.get("/db", getDBPokemons);
router.get("/:id", searchPokemonById);
router.get("/", getAllPokemons);
router.get("/details/:id", getPokemonDetails);
router.post("/", createPokemon);

module.exports = router;
