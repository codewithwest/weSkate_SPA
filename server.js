const express = require("express");
const path = require("path");
var bodyParser = require('body-parser')
const emoji = require('node-emoji')
const cookieParser = require("cookie-parser");
const sessions = require('express-session');
const dictSet = require("./dataset.json");

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
      dictSet.forEach((item) => {
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
              //res.json({"username":req.body.username});
              //req.body.querySelector('form').style.display = 'none'
              res.redirect('/');
              if (myuserName == "") {
                myuserName = req.body.username
              }
              return 
          }
          else if(req.body.newusername && req.body.newpassword && req.body.newemail){
            dictSet.forEach((item) => {
                if(req.body.newusername == item.name){
                    console.log("uername already exits")
                }}) 

            console.log(req.body.newusername)
            console.log(req.body.newemail)
            console.log(req.body.newpassword)
            console.log(dictSet)
          }
          else{
              res.send('Invalid username or password');
          }
  });
  app.get('/logout',(req,res) => {
      req.session.destroy();
      res.redirect('/');
  });
  app.get('/api',(req,res) => {
    if (correct == true) {
        res.send({"username":myuserName})
    }
    res.send({"username":"User"})
    console.log("hello")
});

  
app.listen(process.env.PORT || 3000, () => {
    console.log("Server running...\n http://localhost:3000")
});

