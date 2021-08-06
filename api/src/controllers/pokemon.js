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

const { getEvolutions } = require("../utils");

function getAllPokemons(req, res, next) {
  var { name, page } = req.query;

  page = parseInt(page);

  if (name && name !== undefined && name !== "undefined") {
    return axios
      .get(`${BASE_URL}${POKEMONS_URL}/${name}`)
      .then((response) => {
        res.send(response.data);
      })
      .catch((error) => res.send(error));
  }

  // const pokemons_Db = Pokemons.findAll({ include: Types });
  // const array = pokemons_db_response.concat(pokemons_Api_response.data); // Arreglo con todos los pokemons. Base de datos  + API

  axios.get(`${BASE_URL}${POKEMONS_URL}${ALL_POKEMONS}`).then((pokemons) => {
    // crear un arreglo de promesas para buscar todos los pokemons
    // ejecutar el arreglo

    const getPokemonData = async (name) => {
      const pokemon = {};
      try {
        let url = `${BASE_URL}${POKEMONS_URL}/${name}`;
        const { data } = await axios.get(url);
        pokemon.name = data.name;
        pokemon.id = data.id;
        pokemon.height = data.height;
        pokemon.weight = data.weight;
        pokemon.stats = data.stats.map((s) => {
          return { name: s.stat.name, value: s.base_stat };
        });
        pokemon.types = data.types.map((t) => t.type.name);
        pokemon.img = data.sprites.other["official-artwork"].front_default;
        return pokemon;
      } catch (err) {
        console.log(err);
      }
    };

    const promises = pokemons.data.results.map(async (pokemon) => {
      return await getPokemonData(pokemon.name);
    });

    (async () => {
      await Promise.all(promises)
        .then((response) => {
          return res.send(response);
        })
        .catch((err) => console.log(err));
    })();
  });
}

function getPokemonDetails(req, res, next) {
  const { id } = req.params;

  if (id) {
    const species = axios.get(`${BASE_URL}${SPECIES}/${id}`);
    const pokemon = axios.get(`${BASE_URL}${POKEMONS_URL}/${id}`);

    Promise.all([species, pokemon])
      .then((response) => {
        let [species_response, pokemon_response] = response;

        const evolution_chain_number =
          species_response.data.evolution_chain.url.split("/")[6];

        const evolution_chain = axios.get(
          `${BASE_URL}${EVOLUTION_CHAIN}/${evolution_chain_number}`
        );

        evolution_chain
          .then((response) => {
            const evo_chain = getEvolutions(response.data.chain);
            const species = species_response.data;
            const pokemon = pokemon_response.data;
            const evo_names = evo_chain.map((e) => e.species_name);

            // data extraction

            const stats = pokemon_response.data.stats.map((s) => {
              return { name: s.stat.name, value: s.base_stat };
            });
            const description = species.flavor_text_entries.filter((obj) => {
              return obj.language.name === "en";
            });
            const species_name = species.genera.filter((s) => {
              return s.language.name === "en";
            });
            const egg_groups = species.egg_groups.map((e) => e.name);
            const abilities = pokemon.abilities.map((a) => a.ability.name);

            // hago esto para buscar la info de los pokemons de la cadena de evolucion y no depender del state.

            const getPokemonData = async (name) => {
              const pokemon = {};
              try {
                let url = `${BASE_URL}${POKEMONS_URL}/${name}`;
                const { data } = await axios.get(url);
                pokemon.name = data.name;
                pokemon.img =
                  data.sprites.other["official-artwork"].front_default;
                return pokemon;
              } catch (err) {
                console.log(err);
              }
            };

            const promises = evo_names.map(async (pokemon) => {
              return await getPokemonData(pokemon);
            });

            (async () => {
              await Promise.all(promises)
                .then((response) => {
                  const about = {
                    description: description[0]?.flavor_text.replace("", " "),
                    species: species_name[0].genus,
                    height: pokemon.height,
                    weight: pokemon.weight,
                    abilities,
                    egg_groups,
                    base_hapiness: species.base_happiness,
                    legendary: species.is_legendary,
                    mythical: species.is_mythical,
                    habitat: species.habitat.name,
                  };

                  const evolution = {
                    evo_chain,
                    evo_pokemons: response,
                  };

                  const details = { about, stats, evolution };

                  return res.send(details);
                })
                .catch((err) => console.log(err));
            })();
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
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
        .catch((err) => res.send(err));
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
      .catch((error) => res.send(error));
  }
}

module.exports = {
  getAllPokemons,
  createPokemon,
  searchPokemonById,
  getPokemonDetails,
};
