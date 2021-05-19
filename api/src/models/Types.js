const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo de cada tipo de pokemon que va a crear el usuario
  sequelize.define('Types', {
    id:{
      type: DataTypes.UUID,
      primaryKey: true,    
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,      
    },
  });
};
