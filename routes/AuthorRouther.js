const AuthorRouter=require("express").Router()
const AuthorCtrl=require("../controller/AuthorControl")

AuthorRouter.post("/newAuthor",AuthorCtrl.createAuthor)

module.exports=AuthorRouter;