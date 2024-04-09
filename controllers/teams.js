const Team = require('../models/team');
const Player = require('../models/player');


module.exports = {
    new: newTeam,
    create
}

async function newTeam(req, res){
    const teams = await Team.find({}).sort('teamName')
    res.render('teams/new', {title: 'Add Team', teams})
}

async function create(req, res){
    try{
        await Team.create(req.body);
    }catch (err){
        console.log(err);
    }
    res.redirect('/teams/new');
}

