const mongoose = require("mongoose");

const complaintSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        unique: true
    },
    body:{
        type:String,
        required:true
    },
    address: {
        type: String,
        required: true
    },
    resolved:{
        type: Boolean,
        default: False
    },
    image: {
        type: String
    }
});

const Complaint = mongoose.model("Complaint", complaintSchema);

module.exports = Complaint;