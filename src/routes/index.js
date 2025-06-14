const { Router } = require("express");
const multer = require("../config/multer");

const usersControllers = require("../controllers/users.controllers");
const mediaControllers = require("../controllers/media.controllers");

const routes = Router();

routes.post("/user", usersControllers.createUser);
routes.post('/auth', usersControllers.authenticateUser)
routes.post(
  "/music",
  multer.fields([
    { name: "audio", maxCount: 1 },
    { name: "cover", maxCount: 1 },
  ]),
  mediaControllers.createMedia
);

module.exports = routes;