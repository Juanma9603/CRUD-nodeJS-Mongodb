const express=require("express");
const Author=require("../models/Author");
const AuthorRouter=express.Router();

//sin usar controller

//READ
AuthorRouter.get("/",async(req,res)=>{
    let authors=await Author.find({});
    return res.status(200).send({
        success:true,
        authors
    });
});

//CREATE
AuthorRouter.post("/author",async(req,res)=>{
    try {
        const{name,surname,age}=req.body;
        if(!name || !surname || !age){
            return res.status(400).send({
                success:false,
                message:"Faltan datos por completar"
            });
        }
        let author = new Author({
            name,
            surname,
            age
        });

        await author.save();
        return res.status(200).send({
            success:true,
            message:"Autor creado correctamente!"
        });
    } catch (error) {
        return res.status(500).send({
            success:false,
            message:error.message
        })
    }
});

//UPDATE
AuthorRouter.put("/update/:id",async(req,res)=>{
    try {
        const {id}=req.params.id;
        const {age}=req.body;

        let author=await Author.findOneAndUpdate(id,{age});
        res.status(200).send({
            success:true,
            message:"Author is modified!",
            author,
        })
    } catch (error) {
        res.status(500).send({
            success:false,
            message:error.message
        });
    }
    
});

//DELETE
AuthorRouter.delete("/delete/:id",async(req,res)=>{
    try {
        const {id}=req.params;
        await Author.findByIdAndDelete(id);
        res.status(200).send({
            success:true,
            message:"Author is deleted!"
        })
    } catch (error) {
        res.status(500).send({
            success:false,
            message:error.message
        });
    }
    
});

module.exports=AuthorRouter;