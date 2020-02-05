const express = require('express')
const router = new express.Router()
const path = require('path')
const constant = require('../../index')
const auth = require('../../middleware/auth')


// const publicDirectoryPath = process.env.NODE_ENV 
//                             ? path.join(__dirname, '../../../Client/dist')
//                             : path.join(__dirname, '../../public');

router.get('/login', auth.assertNotAuthenticated,(req, res) => {
    console.log("Login route.......")
    res.sendFile(constant.publicDirectoryPath+ '/index.html')
})

router.get('/register', auth.assertNotAuthenticated,(req, res) => {
    console.log("Register route.......")
    res.sendFile(constant.publicDirectoryPath+ '/index.html')
})

router.get('/dashboard', auth.assertNotAuthenticated,(req, res) => {
    console.log("DAshboard route.......")
    res.sendFile(constant.publicDirectoryPath+ '/index.html')
})


router.get('/*', (req, res) => {
    console.log("Generic Route.... : ", req.originalUrl);
    // res.status(302).redirect('/dashboard')
})


module.exports = router