const { Router } = require("express");
const multer = require("../config/multer");

const usersControllers = require("../controllers/users.controllers");
const mediaControllers = require("../controllers/media.controllers");
const ensureAuth = require("../middlewares/ensureAuth");

const routes = Router();

routes.post("/user", usersControllers.createUser);
routes.post(
  "/music", ensureAuth,
  multer.fields([
    { name: "audio", maxCount: 1 },
    { name: "cover", maxCount: 1 },
  ]),
  mediaControllers.createMedia
);

module.exports = routes;