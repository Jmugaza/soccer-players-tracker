const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    content: {
        type: String,
        require: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }, 
    userName: String,
    userAvatar: String,
}, {
    timestamps: true
})


const playerSchema = new Schema({
    playerName: {type: String, required: true},
    sport: {
        type: String,
        enum: ['Soccer', 'Basketball', 'Football','Baseball', 'Tennis']
    },
    currentTeam: [{
        type: Schema.Types.ObjectId,
        ref: 'Team'
    }],
    position: {type: String, required: true},
    age:{type: Number},
    retired: {type: Boolean, default: true},
    comments:[commentSchema]
}, {
    timestamps: true
})

// Compile the schema into a model and export it
module.exports = mongoose.model('Player', playerSchema);