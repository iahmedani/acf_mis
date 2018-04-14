const settings = require('./config/settings');
const dbConfig = (process.env.NODE_ENV === 'production' ? settings.cloudConfig : settings.lConfig);
const express = require("express");
const sql=require("mssql");
const config = {
    user: 'sa',
    password: 'smartest1',
    server: 'localhost', // You can use 'localhost\\instance' to connect to named instance
    database: 'demo',
 }

var app = express();
app.use(express.static(__dirname+"/public"));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.get("/",function(req,resp){
    resp.send("index.html");
})
app.post("/add",function(req,resp){
var name=req.body.name;
var fname=req.body.fname;
var gender=req.body.gender;
sql.connect(config).then(pool => {
    // Query
    
    return pool.request()
        .query(`insert into info (Name,Fname,Gender) values ('${name}','${fname}','${gender}')`)
}).then(result => {
 console.log(result);
 resp.redirect("/") ;
 sql.close();  
}).catch(err => {
    // ... error checks
    console.log(err);
    sql.close();
})
})
app.get("/showrecord",function(req,resp){
    sql.connect(config).then(function(pool){
        return pool.request().query(`select * from info`)
    }).then(function(result){
        resp.json(result.recordset);
        sql.close();
    }).catch(function(err){
        console.log(err);
        sql.close();
    })
})
// app.get("/:name",function(req,resp){
//     var x=req.params.name;
//     resp.send("hello "+x)
// })

app.listen(8080,function(){
    console.log("server started at 8080")
})