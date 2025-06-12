const { Router } = require("express");
const multer = require("../config/multer");
const mediaControllers = require("../controllers/media.controllers");

const routes = Router();


routes.post("/music", multer.single("audio"), mediaControllers.upload);

module.exports = routes;