require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
// const multer = require('multer');
const cors = require('cors');
const PORT = process.env.PORT || 3000;

const { connect } = require('./src/db');
const morgan = require('morgan');
const { errorHandler } = require('./src/middleware/errorHandler');
connect();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(morgan('tiny'));

//setup cors
app.use(cors({
    origin: true,
    credentials: true,
}))


//Routes





app.use("*",(req,res,next)=>{
    const error = new Error("Not Found");
    error.status = 404;
    next(error);
})

//Global error handler middleware
app.use(errorHandler);




app.get("/", function(req, res){
    res.send("hello")
})

app.listen(PORT,()=>{
    console.log(`server is running on the port : ${PORT}`);
    
})