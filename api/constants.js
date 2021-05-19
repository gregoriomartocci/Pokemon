const BASE_URL = 'https://pokeapi.co/api/v2/'
const POKEMONS_URL = "pokemon/"
const POKEMONS_TYPE = "type/"
const ALL_POKEMONS = "?offset=0&limit=1118/"


module.exports = {
    BASE_URL,
    POKEMONS_URL,
    POKEMONS_TYPE,
    ALL_POKEMONS,
}

const config = {
    HOST : process.env.HOST || 'localhost'
}