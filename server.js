const express = require("express");
const path = require("path");

var bodyParser = require('body-parser')
const emoji = require('node-emoji')
const cookieParser = require("cookie-parser");
const sessions = require('express-session');
const fs = require('fs');
 

let dataFile = fs.readFileSync('dataset.json');
let dictSet = require("./dataset.json")

const PORT = 4000;

const app = express();
let correct = false;
// creating 24 hours from milliseconds
const oneDay = 1000 * 60 * 60 * 24;
app.use(bodyParser.json())
    //app.use(express.bodyParser());
 
//session middleware
app.use(sessions({
    secret: "thisismysecrctekeyfhrgfgrfrty84fwir767",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false
}));

// parsing the incoming data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//serving public file
app.use("/static", express.static(path.resolve(__dirname, "client", "static")));

// cookie parser middleware
app.use(cookieParser());

// a variable to save a session
var session;
let myuserName = "";

app.get('/',(req,res) => {
    session=req.session;
    if(session.userid){
        res.sendFile(path.resolve(__dirname, "client", "index.html"));
    }else
    res.sendFile(path.resolve(__dirname, "client", "index.html"));
});
app.get('/about',(req,res) => {
    session=req.session;
    res.sendFile(path.resolve(__dirname, "client", "index.html"));
});
app.get('/shop',(req,res) => {
    session=req.session;
    res.sendFile(path.resolve(__dirname, "client", "index.html"));
 
});app.get('/events',(req,res) => {
    session=req.session;
    res.sendFile(path.resolve(__dirname, "client", "index.html"));
 
});app.get('/contacts',(req,res) => {
    session=req.session;
    res.sendFile(path.resolve(__dirname, "client", "index.html"));
 
});
/*
app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "index.html"));
});
*/
app.post('/',(req,res) => {  
    function  ifCorrect(userEnteredUsername ,userEnteredPassword){
        userData = require('./dataset.json')
        userData.forEach((item) => {
          if(userEnteredUsername == item.name && userEnteredPassword == item.password){
              correct = true
          }})     
    }
  ifCorrect(req.body.username,req.body.password)
        if(correct == true){
              console.log(req.body.username,req.body.password)
              session=req.session;
              session.userid=req.body.username;
              console.log(req.session)
              res.redirect('/');
              if (myuserName == "") {
                myuserName = req.body.username
              }
              return 
          }
        else if(req.body.newusername && req.body.newpassword && req.body.newemail){
                var newUserData ={
                    id:dictSet.length,
                    name:req.body.newusername,
                    email:req.body.newemail,
                    password:req.body.newpassword
                }
            //const jsonString = JSON.stringify([newUserData])
            if (dataFile.length == 0) {
                //add data to json file
                fs.writeFileSync("./dataset.json", JSON.stringify())
                fs.writeFileSync('./dataset.json', jsonString, err => {
                return true;
            })
            } else {
                var thedataFile = fs.readFileSync('./dataset.json')
                const jsonObject = JSON.parse(thedataFile);
                jsonObject.push(newUserData);
                fs.writeFileSync("./dataset.json", JSON.stringify(jsonObject));
                updated = require('./dataset.json')
                dictSet = JSON.parse(fs.readFileSync('./dataset.json'))                
                console.log(dictSet)
            }
          }else{
            res.redirect('/');
          }
          
  });
  app.get('/logout',(req,res) => {
      req.session.destroy();
      res.redirect('/');
  });
  app.get('/api',(req,res) => {
    
    var thedataFile1 = fs.readFileSync('./dataset.json')
    const jsonObject1 = JSON.parse(thedataFile1);
    res.send(jsonObject1)
    
    /*
    if (correct == true) {
        res.send({"username":myuserName})
    }
    res.send({"username":"User"})
*/
    
});

  
app.listen(process.env.PORT || 3000, () => {
    console.log("Server running...\n http://localhost:3000")
});

