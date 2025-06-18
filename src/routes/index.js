const { Router } = require("express");
const multer = require("../config/multer");

const usersControllers = require("../controllers/users.controller");
const mediaControllers = require("../controllers/media.controller");
const favoriteMediaControllers = require("../controllers/favoriteMedia.controller");
const ensureAuth = require("../middlewares/ensureAuth");

const routes = Router();

routes.post("/user", usersControllers.createUser);
routes.post('/auth', usersControllers.authenticateUser)

routes.post(
  "/songs", ensureAuth,
  multer.fields([
    { name: "audio", maxCount: 1 },
    { name: "cover", maxCount: 1 },
  ]),
  mediaControllers.createMedia
);

routes.get('/songs', mediaControllers.listMedia)

routes.post('/favorite', favoriteMediaControllers.createFavoriteMedias)
routes.get('/favorite', favoriteMediaControllers.listMedia)

module.exports = routes;