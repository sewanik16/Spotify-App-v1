
const express = require('express')
const ArtstModal = require('../modals/artist-modal')

const router = express.Router()

router.get("/",(req,res)=>{
    ArtstModal.find().then((artist)=>{
        res.send(artist)
    }).catch((err)=>{
        res.send(err)
    })
})

router.post("/add",(req,res)=>{
    ArtstModal.create(req.body).then(()=>{
       res.send("artist added successfully")
    }).catch((err)=>{
        res.send(err)
    })
})

module.exports = router;