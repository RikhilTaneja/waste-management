const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    complaints:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Complaint"
    },
    posts:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Blog"
    },
    contact:{
        phone:{
            type:Number,
            required: true
        },
        email:{
            type:String,
            required:true
        }
    }
})