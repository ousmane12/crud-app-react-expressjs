const express = require("express");
const dotenv = require("dotenv");
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const fileupload = require('express-fileupload');
const connectDB = require('./config/db');
const colors = require('colors');
const path = require('path');
const errorHandler = require('./middleware/error');

//Load config file
dotenv.config({path:'./config/config.env'});
//connect to db
connectDB();

//ROute files
const products = require('./routes/products');
const users = require('./routes/users');


const app = express();

//Body parser
app.use(express.json())

//Cookie parser
app.use(cookieParser());

//Dev logging middleware
if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'));
}


const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions)) // Use this after the variable declaration

//Mount routers
app.use('/products', products);
app.use('/product', products);
app.use('/users', users);
app.use('/user', users);

//middleware here
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, 
    ()=> console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold));
//Handle rejections
process.on('unhandledRejection', (err, promise) =>{
    console.log(`Error: ${err.message}`.red);
    //close the server and exit process
    server.close(()=> process.exit(1));
});
