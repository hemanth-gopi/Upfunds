const express = require('express')
const router = new express.Router()
const path = require('path')
const constant = require('../../index')


// const publicDirectoryPath = process.env.NODE_ENV 
//                             ? path.join(__dirname, '../../../Client/dist')
//                             : path.join(__dirname, '../../public');


router.get('/*', (req, res) => {
    console.log("Generic Route....");
    res.sendFile(path.join(constant.publicDirectoryPath ,'/index.html'))
})

router.get('/login', (req, res) => {
    console.log("Login route.......")
    res.sendFile(constant.publicDirectoryPath+ '/index.html')
})

module.exports = router