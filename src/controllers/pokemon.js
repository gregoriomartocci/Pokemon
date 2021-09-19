const { Pokemon, Type, Stat } = require("../db");
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

const { getEvolutions, apiWithTimeout } = require("../utils");

// const Stat = require("../models/Stat");
// API + DB

function getAllPokemons(req, res, next) {
  let { name, offset, limit, api_only } = req.query;

  if (name && name !== undefined && name !== "undefined") {
    return axios
      .get(`${BASE_URL}${POKEMONS_URL}/${name}`)
      .then((response) => {
        res.send(response.data);
      })
      .catch((err) => res.status(500).send(err));
  }

  const db = Pokemon.findAll({
    include: [
      {
        model: Type,
      },
      {
        model: Stat,
      },
    ],
  });

  if (!offset) {
    offset = 1;
  }
  if (!limit) {
    limit = 151;
  }

  axios
    .get(`${BASE_URL}${POKEMONS_URL}?offset=${offset}&limit=${limit}/`)
    .then(() => {
      const getPokemonData = async (id) => {
        const pokemon = {};
        try {
          let url = `${BASE_URL}${POKEMONS_URL}${id}`;
          const { data } = await axios.get(url);
          pokemon.name = data.name;
          pokemon.id = data.id;
          pokemon.height = data.height;
          pokemon.weight = data.weight;
          pokemon.stats = data.stats.map((s) => {
            return { name: s.stat.name, value: s.base_stat };
          });
          pokemon.types = data.types.map((t) => {
            return { name: t.type.name };
          });
          pokemon.img = data.sprites.other["official-artwork"].front_default;
          return pokemon;
        } catch (err) {
          console.log(err);
          return res.status(500).send(err);
        }
      };

      const aux = parseInt(limit) - parseInt(offset);
      let array = [];
      let index = 0;

      while (index !== aux) {
        array[index] = parseInt(offset) + index;
        index++;
      }

      const promises = array.map(async (e) => {
        return await getPokemonData(e);
      });

      apiWithTimeout(Promise.all(promises), 10000)
        .then((api) => {
          if (api_only) {
            // console.log("se manda esto", [...api]);
            return res.send([...api]);
          }
          db.then((result) => {
            // console.log("se manda esto", [...result, ...api]);
            return res.send([...result, ...api]);
          }).catch((err) => res.send(err));
        })
        .catch((err) => res.send(err));
    })
    .catch((err) => res.status(500).send(err));
}

// DB Pokemons

function getDBPokemons(req, res, next) {
  const db = Pokemon.findAll({
    include: [
      {
        model: Type,
      },
      {
        model: Stat,
      },
    ],
  });
  db.then((response) => {
    return res.send(response);
  }).catch((err) => res.status(500).send(err));
}

// DETAILS

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
                res.status(500).send(err);
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
                .catch((err) => res.status(500).send(err));
            })();
          })
          .catch((err) => res.status(500).send(err));
      })
      .catch((err) => res.status(500).send(err));
  } else {
    res.status(500).send("You need to provide an id");
  }
}

// CREATE

function createPokemon(req, res, next) {
  const { name, health, attack, defense, speed, height, weight, types } =
    req.body; // Los valores los va a traer del body

  // console.log("esto llega del body", req.body);

  const stats = [
    { id: uuidv4(), name: "hp", value: health.value },
    { id: uuidv4(), name: "attack", value: attack.value },
    { id: uuidv4(), name: "defense", value: defense.value },
    { id: uuidv4(), name: "special-attack", value: health.value },
    { id: uuidv4(), name: "special-defense", value: health.value },
    { id: uuidv4(), name: "speed", value: health.value },
  ];

  // por cada stat crear uno
  // asociar esos stat a un stat
  // asociar el pokemon creado a un Stat

  const newPokemon = {
    id: uuidv4(),
    name: name.value,
    height: height.value,
    weight: weight.value,
    img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  };

  Pokemon.create(newPokemon)
    .then((pokemon) => {
      // Types
      types.forEach((e) => {
        Type.findByPk(e.id)
          .then((t) => {
            pokemon.addType(t.id);
          })
          .catch((err) => res.status(500).send(err));
      });

      stats.map((s) => {
        Stat.create(s)
          .then((statCreated) => {
            pokemon.addStat(statCreated);
          })
          .catch((err) => res.status(500).send(err));
      });
    })
    .catch((err) => res.status(500).send(err));

  newPokemon.stats = stats;
  newPokemon.types = types;

  return res.send(newPokemon);
}

// SEARCH

function searchPokemonById(req, res, next) {
  //Funcion buscar pokemon
  const { id } = req.params; // Uso el id que me llega por params (preguntar)
  if (id) {
    return axios
      .get(`${BASE_URL}${POKEMONS_URL}${id}`) //Concatenacion de URL: URL BASE + URL POKEMON + ID
      .then((response) => {
        res.send(response.data);
      })
      .catch((err) => res.status(500).send(err));
  }
}

module.exports = {
  getAllPokemons,
  createPokemon,
  searchPokemonById,
  getPokemonDetails,
  getDBPokemons,
};
