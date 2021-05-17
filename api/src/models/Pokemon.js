const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Pokemon', {
    id:{
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      unique: true,    
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
      
      
    },
    weight:{
      type: DataTypes.INTEGER,
    }, 

  });
};
