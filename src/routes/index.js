const { Router } = require("express");
const multer = require("../config/multer");

const usersControllers = require("../controllers/users.controllers");
const mediaControllers = require("../controllers/media.controllers");

const routes = Router();

routes.post("/user", usersControllers.createUser);
routes.post("/music", multer.single("audio"), mediaControllers.upload);

module.exports = routes;