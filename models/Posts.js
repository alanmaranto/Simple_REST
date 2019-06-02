const mongoose = require('mongoose');


const Schema = mongoose.Schema;


const PostSchema = new Schema({

    title:{
        type:String
    },
    text:{
        type:String
    },
    author:{
        type:Schema.Types.ObjectId, //guarda en la base de datos un object que contiene el id del author
        ref:'authors'
    },
    image:{
        type:String //vamos a poner un link por eso es string
    },
    is_active:{
        type:Boolean,
        default:true
    }

},{timestamps:true,collection:'posts'});

module.exports = mongoose.model('posts', PostSchema);