const express=require('express');
const app=express();
const path=require('path')


app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,"public")))

app.use(express.urlencoded({extended:true}))
app.use(express.json())



app.get('/',function(req,res){
    // res.send("welcome home");
    res.render("index1.ejs")
})

app.listen(3000);