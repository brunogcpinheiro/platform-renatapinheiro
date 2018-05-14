const express = require('express');
const routes = express.Router();
const requireDir = require('require-dir');

const controllers = requireDir('./controllers');

routes.get('/signin', controllers.authcontroller.signin);

module.exports = routes;