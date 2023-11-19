const mongoose=require("mongoose");

//propiedades que queremos para entidad DB
const AuthorSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    surname:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },

});

module.exports=mongoose.model("Author",AuthorSchema);