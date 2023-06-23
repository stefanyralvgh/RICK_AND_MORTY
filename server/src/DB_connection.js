require("dotenv").config({ path: ".env" });

const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const UserModel = require("./models/User");
const FavoriteModel = require("./models/Favorite");

// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
console.log(
  "DB_HOST:",
  DB_HOST,
  "DB_USER:",
  DB_USER,
  "DB_PASSWORD:",
  DB_PASSWORD
);
const sequelize = new Sequelize(
  `postgres://postgres:admin@localhost:5432/rickandmorty`,
  //NO ME FUNCIONAN LAS VARIABLES DE ENTORNO || PENDIENTE ARREGLAR
  // `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:5432/rickandmorty`,
  { logging: false, native: false }
);

FavoriteModel(sequelize);
UserModel(sequelize);

const { User, Favorite } = sequelize.models;
Favorite.belongsToMany(User, { through: "user_favorite" });
User.belongsToMany(Favorite, { through: "user_favorite" });

module.exports = {
  User,
  Favorite,
  conn: sequelize,
};
