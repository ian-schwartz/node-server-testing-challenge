const express = require('express');

const Players = require('../players/playersModel');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({ api: 'up', environment: process.env.DB_ENV });
  });

server.get('/players', (req, res) => {
  Players.find()
    .then(players => {
      res.status(200).json(players);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = server;