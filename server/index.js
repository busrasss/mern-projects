const express = require("express");
const app= express();
const mongoose = require('mongoose');
const UserModel = require("./models/Users");

mongoose.connect("mongodb+srv://user123:Password123@cluster0.4y63l.mongodb.net/mern60minutes?retryWrites=true&w=majority");

app.get("/getUsers", (req, res) => {
    UserModel.find({}, (err,result) => {
        if(err){
            res.json(err);
        }else{
            res.json(result);
        }
    });
});
app.listen(3001, () => {
    console.log("SERVER RUNS PERFECTLY!");
});