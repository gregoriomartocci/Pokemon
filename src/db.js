require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, DB_PORT, NODE_ENV } =
  process.env;

console.log("puerto de la DB", NODE_ENV);

const devConfig = `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;
const prodConfig = process.env.DATABASE_URL;

const sequelize = new Sequelize(NODE_ENV === "dev" ? devConfig : prodConfig, {
  logging: false, // set to console.log to see the raw SQL queries
  native: false, // lets Sequelize know we can use pg-native for ~30% more speed
  dialect: "postgres",
  dialectOptions: {
    ssl: true,
  },
});

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Pokemon, Type, Stat } = sequelize.models;

// Aca vendrian las relaciones

console.log(sequelize.models);

// Type
Pokemon.belongsToMany(Type, { through: "PokemonTypes", timestamps: false });
Type.belongsToMany(Pokemon, { through: "PokemonTypes", timestamps: false });

// Pokemon Stats
Pokemon.belongsToMany(Stat, { through: "PokemonStats", timestamps: false });
Stat.belongsToMany(Pokemon, { through: "PokemonStats", timestamps: false });

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
};
