const mongoose = require('mongoose');


const Schema = mongoose.Schema;


const AuthoSchema = new Schema({

    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true,
        unique:true //valida que no haya dos usuarios iguales
    },
    bio:{
        type:String
    },
    birth_date:{
        type:Date
    },
    is_active:{
        type:Boolean,
        default:true
    }


},{timestamps:true,collection:"authors"});

module.exports = mongoose.model('authors', AuthoSchema)