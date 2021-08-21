const { Stat } = require("../db");
const { v4: uuidv4 } = require("uuid");
const axios = require("axios");

const { BASE_URL, POKEMONS_TYPE } = require("../../constants");

function getAllStats(req, res, next) {
  Stat.findAll().then((response) => {
    return res.send(response);
  });
}

module.exports = { getAllStats };
