const mongoose = require("mongoose");
const config = require('config')
// const dbgr = require('deb')("development:mongoose");
const dbgr = require('debug')('development:mongoose');

mongoose.connect(`${config.get("MONGODB_URI")}/scatch`)
.then(function(){
    // console.log("Connected");
    dbgr("connected");
})
.catch(function(err){
    dbgr(err);
})

module.exports = mongoose.connection;