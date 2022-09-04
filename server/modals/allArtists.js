
const mongoose = require('mongoose')

const allArtists = new mongoose.Schema({
    name:[String],
    songs:{
       type: [String],
       default: ["Hndustani"],
    }
})

const allArtistsModal = mongoose.model("Allartists",allArtists)

module.exports =allArtistsModal;