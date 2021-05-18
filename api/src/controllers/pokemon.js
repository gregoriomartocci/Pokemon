const { Pokemons} = require("../db");
const { v4: uuidv4 } = require("uuid");
const axios = require("axios");

const { BASE_URL, POKEMONS_URL, POKEMONS_TYPE } = require("../../constants");

function getAllPokemons(req, res, next) {
  const { name } = req.query;
  if (name) {
    return axios
      .get(`${BASE_URL}${POKEMONS_URL}${name}`)
      .then((response) => {
        res.send(response.data);
      })
      .catch((error) => console.log(error));
  }
  const pokemons_Api = axios.get(`${BASE_URL}${POKEMONS_URL}`);
  const pokemons_Db = Pokemons.findAll({ include: Types });

  Promise.all([pokemons_Api, pokemons_Db]).then((response) => {
    let [pokemons_Api_response, pokemons_db_response] = response;
    const array = pokemons_db_response.concat(pokemons_Api_response.data);
    return res.json(array);
  });
}

function createPokemon(req, res, next) {
  const { name, health, strenght, defense, speed, height, weight } = req.body;

  const pokemonData = {
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
    return res.json(response);
  });
}

function searchPokemon(req, res, next) {
  const { id } = req.params;
  if (id) {
    return axios
      .get(`${BASE_URL}${POKEMONS_URL}${id}`)
      .then((response) => {
        res.send(response.data);
      })
      .catch((error) => console.log(error));
  }
}

module.exports = { getAllPokemons, createPokemon, searchPokemon };
