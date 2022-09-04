
const express = require('express')
const SongModal = require('../modals/song-modal')
const AllArtistsModal = require('../modals/allArtists')

const router = express.Router()

router.get("/",(req,res)=>{
    SongModal.find().then((songs)=>{
        
        res.send(songs)
    }).catch((err)=>{
        res.send(err)
    })
})
router.get("/all",(req,res)=>{
    AllArtistsModal.find().then((all)=>{
        res.send(all)
    })
})

router.post("/add",(req,res)=>{
    SongModal.create(req.body).then(()=>{
        

        AllArtistsModal.updateOne({$push:{songs:[req.body.songs]}}).then(()=>{
            res.send("songs new added successfully")
        }).catch((err)=>{
            res.send(err)
        })                                                                                                                                       
       
    }).catch((err)=>{
        res.send(err)
        console.log("kuch to gdbd hai")
    })
})

module.exports = router;