const { Pokemons, Types } = require("../db");
const { v4: uuidv4 } = require("uuid");
const axios = require("axios");

const {
  BASE_URL,
  POKEMONS_URL,
  POKEMONS_TYPE,
  ALL_POKEMONS,
} = require("../../constants");
const { paginate } = require("../utils");

function getAllPokemons(req, res, next) {
  const { name, page } = req.query;
  if (name) {
    return axios
      .get(`${BASE_URL}${POKEMONS_URL}${name}`)
      .then((response) => {
        res.send(response.data);
      })
      .catch((error) => console.log(error));
  }
  const pokemons_Api = axios.get(`${BASE_URL}${POKEMONS_URL}${ALL_POKEMONS}`);
  const pokemons_Db = Pokemons.findAll({ include: Types });

  Promise.all([pokemons_Api, pokemons_Db]).then((response) => {
    let [pokemons_Api_response, pokemons_db_response] = response;
    const array = pokemons_db_response.concat(pokemons_Api_response.data); // Arreglo con todos los pokemons. Base de datos  + API
    return res.send(paginate(array[0].results, page));
  });
}

function createPokemon(req, res, next) {
  const { name, health, strenght, defense, speed, height, weight } = req.body; // Los valores los va a traer del body

  const pokemonData = {
    //Como estoy usando los mismos valores que arriba no necesito poner "name: name".
    id: uuidv4(),
    name,
    health,
    strenght,
    defense,
    speed,
    height,
    weight,
  };

  Pokemons.create(pokemonData).then((response) => {
    //Crea una instancia de pokemon con los valores de pokemonData
    return res.json(response); //Como la promesa se cumple devuelvo un json
  });
}

function searchPokemonById(req, res, next) {
  //Funcion buscar pokemon
  const { id } = req.params; // Uso el id que me llega por params (preguntar)
  if (id) {
    return axios
      .get(`${BASE_URL}${POKEMONS_URL}${id}`) //Concatenacion de URL: URL BASE + URL POKEMON + ID
      .then((response) => {
        res.send(response.data);
      })
      .catch((error) => console.log(error));
  }
}

module.exports = { getAllPokemons, createPokemon, searchPokemonById };
