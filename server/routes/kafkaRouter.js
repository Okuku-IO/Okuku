const express = require('express');
const kafkaController = require('../controllers/kafkaJsController');
const Router = express.Router();

Router.post('/', kafkaController.writeTopicsAndMessages, (req, res) => {
  return res.status(200).json('success response');
})

module.exports = Router;