const express=require("express");
const mongoose = require("mongoose");
const app=express();
require("dotenv").config();

//sin controller
/*const AuthorRouter=require("./router/AuthorRouter");
const BookRouter=require("./router/BookRouter");*/

app.use(express.json({extended:true}));
app.use(express.urlencoded());

//Enrutando sin controller
/*app.use("/api",AuthorRouter);
app.use("/api",BookRouter);*/

//app.use("/api");
//app.use("/api");

//enrutado con controller
app.use("/api",require("./routes/AuthorRouther"));

//Conexion con el .env y la direccion de la base de datos
const PUERTO=process.env.MONGO_DB

//conexion usando mongoose
mongoose
.connect(PUERTO,{})
.then(()=>{
    console.log("DB is now connected");
}).catch(err=>{
    console.log(err);
});


//DB corriendo
app.listen(5000,()=>{
    console.log(`El servidor esta corriendo en el puerto 5000...`);
});