const BASE_URL = "https://pokeapi.co/api/v2/";
const POKEMONS_URL = "pokemon/";
const POKEMONS_TYPE = "type/";
const ALL_POKEMONS = "?offset=1&limit=5/";
const POKEMON_TOTAL = "1118";
const SPECIES = "pokemon-species/";
const CHARACTERISTIC = "characteristic/";
const EVOLUTION_CHAIN = "evolution-chain/"

module.exports = {
  BASE_URL,
  POKEMONS_URL,
  POKEMONS_TYPE,
  ALL_POKEMONS,
  POKEMON_TOTAL,
  SPECIES,
  CHARACTERISTIC,
  EVOLUTION_CHAIN
};

const config = {
  HOST: process.env.HOST || "localhost",
};
