const { Type } = require("../db");
const { v4: uuidv4 } = require("uuid");
const axios = require("axios");

const { BASE_URL, POKEMONS_TYPE } = require("../../constants");

function getAllTypes(req, res, next) {
  Type.findAll()
    .then((types) => {
      if (!types.lenght) {
        axios.get(`${BASE_URL}${POKEMONS_TYPE}`).then((response) => {
          const api_types = response.data.results.map((t) => {
            return {
              id: uuidv4(),
              name: t.name,
            };
          });

          console.log(api_types);

          Type.bulkCreate(api_types, { returning: true }).then((response) => {
            res.send(response);
          });
        });
      } else {
        return res.send(types);
      }
    })
    .catch((err) => {
      res.send(err);
    });
}

function createType(req, res, next) {
  const { name } = req.body;

  const typeData = {
    id: uuidv4(),
    name,
  };

  return Type.create(typeData).then((response) => {
    res.json(response);
  });
}

module.exports = { getAllTypes, createType };
