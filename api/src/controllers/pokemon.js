const { Pokemons, Types } = require("../db");
const { v4: uuidv4 } = require("uuid");
const axios = require("axios");

const {
  BASE_URL,
  POKEMONS_URL,
  POKEMONS_TYPE,
  ALL_POKEMONS,
} = require("../../constants");

const { paginate, getPokemon, generation } = require("../utils");

function getAllPokemons(req, res, next) {
  var { name, page } = req.query;

  console.log(req.query);

  page = parseInt(page);

  if (name && name !== undefined && name !== "undefined") {
    return axios
      .get(`${BASE_URL}${POKEMONS_URL}/${name}`)
      .then((response) => {
        res.send(response.data);
      })
      .catch((error) => console.log(error));
  }

  // const pokemons_Db = Pokemons.findAll({ include: Types });
  // const array = pokemons_db_response.concat(pokemons_Api_response.data); // Arreglo con todos los pokemons. Base de datos  + API

  axios.get(`${BASE_URL}${POKEMONS_URL}${ALL_POKEMONS}`).then((response) => {
    console.log(response);
    return res.send(generation(response.data.results));
  });
}

function createPokemon(req, res, next) {
  const { name, health, strenght, defense, speed, height, weight, types } =
    req.body; // Los valores los va a traer del body

  const newPokemon = {
    id: uuidv4(),
    name: name.value,
    health: health.value,
    strenght: strenght.value,
    defense: defense.value,
    speed: speed.value,
    height: height.value,
    weight: weight.value,
  };

  console.log(newPokemon);

  Pokemons.create(newPokemon).then((pokemon) => {
    //Crea una instancia de pokemon con los valores de pokemonData

    console.log(types);

    types.forEach((e) => {
      Types.findByPk(e.id)
        .then((t) => {
          pokemon.addTypes(t);
        })
        .catch((err) => console.log(err));
    });

    return res.send(pokemon);
  });

  // function createGame(req, res, next) {
  //   const { name, description, date, rating, genres, platforms } = req.body;

  //   const newGame = {
  //     id: uuidv4(),
  //     name,
  //     description,
  //     date,
  //     rating,
  //     genres,
  //     platforms,
  //   };

  //   Videogame.create(newGame)
  //     .then((videogame) => {
  //       genres.forEach((g) =>
  //         Genre.findByPk(g.id)
  //           .then((resp) => {
  //             console.log(resp);

  //             videogame.addGenre(resp);
  //           })
  //           .catch((err) => console.log(err))
  //       );
  //     })
  //     .catch((error) => console.log(error));
  // }
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
