const express = require("express");
const server = express();
const router = require("./routes/index");
const { conn } = require("./DB_connection");
const session = require('express-session');
const passport = require('passport');
const crypto = require('crypto');

const PORT = 3001;

server.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

server.use(express.json());
server.use("/rickandmorty", router);

const secret = crypto.randomBytes(64).toString('hex');

server.use(session({
  secret: secret, 
  resave: false,
  saveUninitialized: false
}));


server.use(passport.initialize());
server.use(passport.session());

server.listen(PORT, () => {
  conn.sync({ force: true });
  console.log("Server raised in port: " + PORT);
});
