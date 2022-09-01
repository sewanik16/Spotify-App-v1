
const express = require('express')
const SongModal = require('../modals/song-modal')

const router = express.Router()

router.get("/",(req,res)=>{
    SongModal.find().then((songs)=>{
        res.send(songs)
    }).catch((err)=>{
        res.send(err)
    })
})

router.post("/add",(req,res)=>{
    SongModal.create(req.body).then(()=>{
       res.send("song added successfully")
    }).catch((err)=>{
        res.send(err)
    })
})

module.exports = router;