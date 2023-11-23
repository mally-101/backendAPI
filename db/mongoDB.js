const mongoose = require('mongoose');

require('dotenv/config');

const mongoDBurl = process.env.DBurl
const connect = async()=>{
    try{
        await mongoose.connect(mongoDBurl)
        console.log('mongoDB connected successfully');

    }catch (error){
        console.log(error);

    }
}
module.exports = connect
