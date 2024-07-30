const express = require('express');
const routes = express.Router();

const taskListController = require('./controllers/taskListController');

routes.post('/taskList', taskListController.create);
routes.get('/taskList', taskListController.read);
routes.delete('/taskList/:id', taskListController.delete);

module.exports = routes;