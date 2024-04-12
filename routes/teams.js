const express = require('express');
const router = express.Router();
const teamsCtrl = require('../controllers/teams.js');
const ensureLoggedIn = require('../config/ensureLoggedIn');



// GET /teams/new 
router.get('/teams/new', ensureLoggedIn, teamsCtrl.new);

// POST /teams 
router.post('/teams', ensureLoggedIn, teamsCtrl.create);

// POST /players/:id/teams
router.post('/players/:id/teams', ensureLoggedIn, teamsCtrl.addToTeam)


module.exports = router;