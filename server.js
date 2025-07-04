
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) =>{
    res.send("Welcome to the homepage!")
});

app.get('/login', (req, res) =>{
    res.send("Welcome to the login page!")
});

app.get('/signup', (req, res)=>{
    res.send("Welcome to the signup page!")
});