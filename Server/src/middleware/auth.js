const jsonwebtoken = require('jsonwebtoken')

const User = require('../models/User');

const auth = async (req, res, next) => {

    try{
        const token = req.header('Authorization').replace('Bearer ', '');

        const decoded = jsonwebtoken.verify(token, 'upfunds-secret');
        
        console.log("Debug: auth -> decoded", decoded)

        const user = await User.findOne({_id: decoded._id, 'tokens.token' : token});

        if(!user) {
            throw new Error();
        }


    } catch(error){
        res.status(401).send({error: "Unauthorized"})
    }

    next();

}

const assertNotAuthenticated = async (req, res, next) => {

    try{
        // const token = req.header('Authorization').replace('Bearer ', '');
        const token = req.cookies['_upt']

        if(token === undefined || token === null){
            next();
        }

        const decoded = jsonwebtoken.verify(token, 'upfunds-secret');

        const user = await User.findOne({_id: decoded._id, 'tokens.token' : token});

        if(!user) {
            next();
        }

    } catch(error){
        next();
    }

    res.status(302).redirect('/dashboard')

}

module.exports = {
    auth :auth,
    assertNotAuthenticated

};