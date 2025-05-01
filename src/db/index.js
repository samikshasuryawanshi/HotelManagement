const mongoose = require('mongoose');

module.exports.connect = () => {
    mongoose
    .connect(process.env.MONGODB_URL)
    .then(()=>{
        console.log("database connected..");
    })
    .catch((err) =>{
        console.log(err);    
    })
}

