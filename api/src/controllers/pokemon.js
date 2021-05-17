const { Pokemon, Type } = require("../db");
const axios = require('axios')

const { BASE_URL, POKEMONS_URL, POKEMONS_TYPE } = require("../../constants");


function getAllPokemons (req, res, next){
    const pokemons_Api = axios.get(`${BASE_URL}${POKEMONS_URL}`)
    const pokemons_Db = Pokemon.findAll({include: Type})
    

    Promise.all([pokemons_Api, pokemons_Db]).then((response)=>{
        let [pokemons_Api_response, pokemons_db_response] = response
        const array = pokemons_db_response.concat(pokemons_Api_response.data)   
        res.json(array)
    }) 
}

module.exports = {getAllPokemons}

