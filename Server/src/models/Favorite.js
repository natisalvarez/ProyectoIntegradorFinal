const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('Favorite', {
      id: {
         type: DataTypes.INTEGER, /*tipo de dato del ID, en esta caso numero entero */
         allowNull: false, /*el campo este no puede ser nulo, si no ingresas los dato aparece error*/ 
         primaryKey: true
      },
      name: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      status: {
         type: DataTypes.ENUM('Alive', 'Dead', 'unknown'), /* Tiene que ser si o si uno de los tres */
         allowNull: false
      },
      species: {
         type: DataTypes.STRING,
         allowNull: false
      },
      gender: {
         type: DataTypes.ENUM('Female', 'Male', 'Genderless', 'unknown'),
         allowNull: false
      },
      origin: {
         type: DataTypes.STRING,
         allowNull: false
      },
      image: {
         type: DataTypes.STRING,
         allowNull: false
      },
      },
      
      { timestamps: false }); /* Para que no aparezca auditoria, viene por configuración*/
      };