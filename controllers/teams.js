const Team = require('../models/team');
const Player = require('../models/player');


module.exports = {
    new: newTeam,
    create,
    addToTeam
}

async function addToTeam(req, res) {
    const player = await Player.findById(req.params.id);
    // The cast array holds the performer's ObjectId (referencing)
    player.currentTeam.push(req.body.teamId);
    //player.currentTeam = req.body;
    await player.save();
    res.redirect(`/players/${player._id}`);
}
  

async function newTeam(req, res){
    const teams = await Team.find({}).sort('teamName');
    // console.log(teams)
    res.render('teams/new', {title: 'Add Team', teams});
}

async function create(req, res){
    try{
        const createTeam = await Team.create(req.body);
        console.log(createTeam);
       // res.render('teams/new', {teams: [createTeam]})
        
    }catch (err){
        console.log(err);
    }
    res.redirect('/teams/new');
}

