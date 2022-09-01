
const mongoose = require('mongoose')

const songSchema = new mongoose.Schema({
    artwork:String,
    song:String,
    dateofrelease:String,
    artists:String,
    rate:{
        type:String,
        default:4.3
    }
})

const songModal = mongoose.model("songs",songSchema)

module.exports =songModal;