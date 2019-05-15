module.exports = (sequelize, DataTypes) =>
// export a function that takes sequlize and Datatypes as arguments
  sequelize.define('User', { // creates a model with the name User that is passed to the index.js file in this folder. When this is accessed by controllers, this table is defined and can be accessed or modified by user input
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: {
      type: DataTypes.STRING
    }
  })
