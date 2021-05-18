const { Types } = require("../db");
const { v4: uuidv4 } = require("uuid");
const axios = require("axios");

const { BASE_URL, POKEMONS_TYPE } = require("../../constants");

function getAllTypes(req, res, next) {
  return axios.get(`${BASE_URL}${POKEMONS_TYPE}`).then((response) => {
    res.send(response.data);
  });
}

function createType(req, res, next) {
  const { name } = req.body;

  const typeData = {
    id: uuidv4(),
    name,
  };

  return Types.create(typeData).then((response) => {
    res.json(response);
  });
}

module.exports = { getAllTypes, createType };
