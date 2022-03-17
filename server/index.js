const express = require("express");
const app= express();
const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://user123:Password123@cluster0.4y63l.mongodb.net/mern60minutes?retryWrites=true&w=majority");


app.listen(3001, () => {
    console.log("SERVER RUNS PERFECTLY!");
});