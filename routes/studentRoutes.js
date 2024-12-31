// routes/studentRoutes.js
const express = require('express');
const router = express.Router();
const Student = require('../models/studentMongo'); 
const { mysqlConnection } = require('../config/db'); 

// CRUD MongoDB
router.post('/mongo', async (req, res) => { /*... Code MongoDB pour créer un étudiant ...*/ });
router.get('/mongo', async (req, res) => { /*... Code MongoDB pour lire les étudiants ...*/ });
router.put('/mongo/:id', async (req, res) => { /*... Code MongoDB pour mettre à jour ...*/ });
router.delete('/mongo/:id', async (req, res) => { /*... Code MongoDB pour supprimer ...*/ });

// CRUD MySQL
router.post('/mysql', (req, res) => { /*... Code MySQL pour créer un étudiant ...*/ });
router.get('/mysql', (req, res) => { /*... Code MySQL pour lire les étudiants ...*/ });
router.put('/mysql/:id', (req, res) => { /*... Code MySQL pour mettre à jour ...*/ });
router.delete('/mysql/:id', (req, res) => { /*... Code MySQL pour supprimer ...*/ });

module.exports = router;
