const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/OBE ")




const newSchema = new mongoose.Schema({
    email : {
        type : string,
        required : true
    },
    password : {
        type : string,
        required : true
    }
})