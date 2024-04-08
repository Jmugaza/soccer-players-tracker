var express = require('express');
var router = express.Router();
const playersCtrl = require('../controllers/players');
const ensureLoggedIn = require('../config/ensureLoggedIn');

//GET /players
router.get('/', ensureLoggedIn, playersCtrl.index);

//GET /players/new
router.get('/new', ensureLoggedIn, playersCtrl.new);

// GET /players/:id 
router.get('/:id', ensureLoggedIn, playersCtrl.show);

//Get /players
router.post('/', ensureLoggedIn, playersCtrl.create)




module.exports = router;
