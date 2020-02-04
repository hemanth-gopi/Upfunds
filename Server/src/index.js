const path = require('path')
const express = require('express')
require('./db/mongoose');

let bodyParser = require('body-parser');
let cookieParser = require('cookie-parser')
// var multer = require('multer');
// var upload = multer();

const pageRouter = require('./routers/page/app');
const loginRouter = require('./routers/login/login')


const app = express()
const port = process.env.PORT || 5000

// console.log(process.env.NODE_ENV)

// Define paths for Express config
// const publicDirectoryPath = path.join(__dirname, '../../../Client/dist')

const publicDirectoryPath = process.env.NODE_ENV 
                            ? path.join(__dirname, '../../../Client/dist')
                            : path.join(__dirname, '../public');

console.log(publicDirectoryPath)

app.use(cookieParser());


// Setup static directory to serve
app.use(express.static(publicDirectoryPath))
app.use(express.json())

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 
//form-urlencoded

// // for parsing multipart/form-data
// app.use(upload.array());



/************************** Router configs *************************/
app.use(pageRouter);
app.use(loginRouter);



//Starting the server
app.listen(port, () => {
    console.log('Server is up on port ' + port)
})


//Exports
exports.publicDirectoryPath = publicDirectoryPath