
const mongoose = require('mongoose')

const songSchema = new mongoose.Schema({
   
    songs:{
        type:String,
        default:"Dil Hai Hindustani"
    },
    dateofrelease:String,
    artwork:String, 
    artists:[String],
    rate:{
        type:String,
        default:4.3
    }
})

const songModal = mongoose.model("songs",songSchema)

module.exports =songModal;