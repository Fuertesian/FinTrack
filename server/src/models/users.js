module.exports = (sequelize, DataTypes) =>
// export a function that takes sequlize and Datatypes as arguments
  sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: {
      type: DataTypes.STRING
    }
  })
