
const mongoose = require('mongoose')

const artistSchema = new mongoose.Schema({
    artist:String,
    dob:String,
    songs:String,
    bio:String
})

const artistsModal = mongoose.model("artists",artistSchema)

module.exports =artistsModal;