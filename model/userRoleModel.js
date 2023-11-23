const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const validator = require('validator')

const userRoleSchema = new Schema({
    name: 
    { type: String,
     required: [true, 'must provide a name'],  trim:true
    },
    email:{
        type:String,
        required:[true, 'email is required'], 
        unique: true,
        lowercase: true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Email is valid")
        }}
    },
    profession:{
        type:String,
        required:[true, 'profession is required'], trim:true
    },
    gender:{
        type:String,
        enum:['male', 'female'],
        required:[true, 'select a gender']
    },
    Date:{
       type: Date,
       default:Date.now()
    }
    
},{timestamp:true})

const USERROLE = mongoose.model('User', userRoleSchema);
module.exports = USERROLE
