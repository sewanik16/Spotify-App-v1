
const { response } = require('express')
const express = require('express')
const ArtistModal = require('../modals/artist-modal')

const AllArtistsModal = require('../modals/allArtists')


const router = express.Router()

router.get("/",(req,res)=>{
    ArtistModal.find().then((artist)=>{
            res.send(artist)
    }).catch((err)=>{
        res.send(err)
    })
})

router.post("/add",(req,res)=>{
 
    ArtistModal.create(req.body).then(()=>{
        AllArtistsModal.find().then((data)=>{
            if(data.length>0){
                AllArtistsModal.updateOne({$push:{name:[req.body.artist]}}).then(()=>{
                    res.send("artist new added successfully")
                }).catch((err)=>{
                    res.send(err)
                }) 
            }else{
                AllArtistsModal.create({name:[req.body.artist]}).then((data)=>{
                    res.send("sded")
                })
            }
        })
                                                                                                                                                                                                                                            

    }).catch((err)=>{
        res.send(err)
    })
})



module.exports = router;