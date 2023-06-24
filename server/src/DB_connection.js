require('dotenv').config();

const { Sequelize } = require("sequelize");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const UserModel = require("./models/User");
const FavoriteModel = require("./models/Favorite");

// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:5432/rickandmorty`,
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
