const { Pokemons, Types } = require("../db");
const { v4: uuidv4 } = require("uuid");
const axios = require("axios");

const {
  BASE_URL,
  POKEMONS_URL,
  ALL_POKEMONS,
  SPECIES,
  CHARACTERISTIC,
  EVOLUTION_CHAIN,
} = require("../../constants");

const { paginate, getPokemon, generation, getEvolutions } = require("../utils");

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

function getPokemonDetails(req, res, next) {
  const { id } = req.params;

  console.log(id, "entre aca");

  console.log(SPECIES, CHARACTERISTIC, EVOLUTION_CHAIN);

  if (id) {
    const species = axios.get(`${BASE_URL}${SPECIES}/${id}`);
    const characteristic = axios.get(`${BASE_URL}${CHARACTERISTIC}/${id}`);
    const evolution_chain = axios.get(`${BASE_URL}${EVOLUTION_CHAIN}/${id}`);

    Promise.all([species, characteristic, evolution_chain])
      .then((response) => {
        let [
          species_response,
          characteristic_response,
          evolution_chain_response,
        ] = response;

        const obj = {};
        obj.species_text =
          species_response.data.flavor_text_entries[0].flavor_text;
        obj.description =
          characteristic_response.data.descriptions[0].description;
        obj.evolution_chain = getEvolutions(
          evolution_chain_response.data.chain
        );

        return res.send(obj);
      })
      .catch((err) => {
        res.status(500).send(err);
      });
  } else {
    res.status(500).send("You need to provide an id");
  }
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

module.exports = {
  getAllPokemons,
  createPokemon,
  searchPokemonById,
  getPokemonDetails,
};
