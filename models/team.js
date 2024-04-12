const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const teamSchema = new Schema({
    teamName: {
        type: String,
        required: true,
        unique: true
    },
    founded: {
        type: Date
    }
}, {
    timestamps: true
})


module.exports = mongoose.model('Team', teamSchema)