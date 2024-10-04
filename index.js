const express=require('express')
const app=express()
const fs=require('fs')
const path=require('path')

app.set("view engine","ejs")
app.use(express.json())
app.use(express.urlencoded({extends:true}))

app.use(express.static(path.join(__dirname,"public")))

app.get('/',function(req,res){
    // res.send("welcome to my home pageeeee");
    fs.readdir(`./files`,function(err,files){
        console.log(files);
        // when reading file then render index1
        res.render("index1",{files:files}) ;
    })
})

app.listen(3000)