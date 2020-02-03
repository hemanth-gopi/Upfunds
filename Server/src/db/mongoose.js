const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/Upfunds', {
    user: 'upfunds-admin',
    pass:'worldishell',
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
}).then( () => {
    console.log("Hurray !,Connected to Mongo Db !")
}).catch( error => {
    console.log("error connecting to mongo db", error);
})

mongoose.connection.on('error', error => {console.log(error)});
