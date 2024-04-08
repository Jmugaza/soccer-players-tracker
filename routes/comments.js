const express = require('express');
const router = express.Router();
const commentsCtrl = require('../controllers/comments');
const ensureLoggedIn = require('../config/ensureLoggedIn');


// POST /players/:id/comments
router.post('/players/:id/comments', ensureLoggedIn, commentsCtrl.create);

//DELETE /comments/:id
router.delete('/comments/:id', commentsCtrl.delete);

module.exports = router;
