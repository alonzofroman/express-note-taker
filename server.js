// Load required libraries
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

const PORT = 3000;

// Middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded( {extended:true} ));

// GET routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'))
});
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))
});




// Port listener
app.listen(PORT, function() {
    console.log(`Listening to http://localhost:${PORT}`)
})