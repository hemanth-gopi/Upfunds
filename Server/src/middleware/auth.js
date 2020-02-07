const jsonwebtoken = require('jsonwebtoken')

const User = require('../models/User');

const unAuthRoutes = [
    {
        path : '/login',
        method : 'get' 
    },
    {
        path : '/register',
        method : 'get'
    }
]

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

const isUnauthRoute = (path, method) => {

    return unAuthRoutes.filter( route => route.path === path && route.method === method ).length == 1;

}

const assertAuthentication = async (req, res, next) => {

    try{
        
        const token = req.cookies['_upt']
        console.log("Debug: assertNotAuthenticated " , req.originalUrl, "-> cookies", JSON.stringify(req.cookies))
        console.log("Debug: assertNotAuthenticated -> token", token)

        if(token === undefined || token === null){
            if(isUnauthRoute(req.path, req.method)){
                next();
                return ;
            } else {
                throw new Error("Not Authenticated");
            }

        }

        const decoded = jsonwebtoken.verify(token, 'upfunds-secret');
        console.log("Debug: assertNotAuthenticated -> decoded", decoded)

        const user = await User.findOne({_id: decoded._id, 'tokens.token' : token});

        // console.log("Debug: assertNotAuthenticated -> user", user)
        if(isUnauthRoute && user) {
            res.status(302).redirect('/dashboard')
        }

        if(!isUnauthRoute && !user) {
            res.status(302).redirect('/login')
        }

    } catch(error){
       console.log('Error verifying authentication !',error.name);
    }

    next();
}

module.exports = {
    auth :auth,
    assertAuthentication
};