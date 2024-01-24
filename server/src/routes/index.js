const { Router } = require("express");
const login = require("../controllers/login");
const logout = require("../controllers/logout");
const getCharById = require("../controllers/getCharById");
const  postFav  = require("../controllers/postFav");
const  deleteFav  = require("../controllers/deleteFav");
const postUser = require("../controllers/postUser");
const passport = require("passport");
require("./auth");



const router = Router();

router.get("/character/:id", getCharById);
router.get("/login", login);
router.post("/login", postUser);
router.get("/logout", logout);
router.post("/fav", passport.authenticate('local'), postFav);
router.delete("/fav/:id", passport.authenticate('local'), deleteFav);


module.exports = router;
