require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const multer = require('multer');
const PORT = process.env.PORT || 3000;

const { connect } = require('./src/db');
connect();

const app = express();




app.get("/", function(req, res){
    res.send("hello")
})

app.listen(PORT,()=>{
    console.log(`server is running on the port : ${PORT}`);
    
})