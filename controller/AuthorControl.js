const Author=require("../models/Author")

//usando routes
const AuthorCtrl={
    createAuthor:async(req,res)=>{
        try {
            const {name,surname,age}=req.body;
            let author=new Author({
                name, surname, age
            })
            author.save();
            return res.status(200).send({
                success:true,
                message:"Author creado!",
                author
            })

        } catch (error) {
            return res.status(500).send({
                success:false,
                message:error.message
            })
        }
    }
}

module.exports=AuthorCtrl;