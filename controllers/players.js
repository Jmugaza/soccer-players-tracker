const Player = require('../models/player');
const Team = require('../models/team')

module.exports = {
    index,
    show,
    new: newPlayer,
    create

}

async function index(req, res) {
    const players = await Player.find({});
    res.render('players/index', { title: 'All Players', players });
};

async function show(req, res){
    const player = await Player.findById(req.params.id).populate('currentTeam');

    const teams = await Team.find({_id:{$nin: player.currentTeam}}).sort('teamName')
    console.log(teams)
    console.log(player)
    res.render('players/show', {title: 'Player Details', player, teams});

}

async function newPlayer(req, res){
    res.render('players/new', { title: 'Add Player', errMsg: ''})
}

async function create(req, res){
    req.body.retired = !!req.body.retired;

    try{
        const player = await Player.create(req.body);
        res.redirect(`/players/${player._id}`)
    } catch (err){
        console.log(err)
        res.render('players/new', {errMsg: err.message})
    }
}