const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo de cada Pokemon que va a crear el usuariop
  sequelize.define("Pokemons", {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      unique: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    health: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    strenght: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    defense: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    speed: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    height: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    weight: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  });
};

/* 


Velocidad
Altura
Peso */
