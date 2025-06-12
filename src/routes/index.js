const { Router } = require("express");
const usersControllers = require("../controllers/users.controllers");

const routes = Router();

routes.post("/user", usersControllers.createUser);

module.exports = routes;