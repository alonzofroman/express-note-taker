// Load required libraries
const express = require('express');
const path = require('path');
const fs = require('fs');
const util = require('util')
const router = express.Router();


const notesList = require('./db/db.json');

const app = express();

const PORT = process.env.PORT || 3000;

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

// Load Notes
app.get('/api/notes', (res, req) => {
    util.promisify(fs.readFile(path.join(__dirname, './db/db.json'))).then((data) => {
        let notes = JSON.parse(data);
        req.json(notes);
    })
});

// New Notes
app.post('/api/notes', (res, req) => {
    util.promisify(fs.readFile(path.join(__dirname, './db/db.json'))).then((data) => {
        let notes = JSON.parse(data);
        let newNote = req.json(body);
    })

})

// Delete Notes


// Port listener
app.listen(PORT, function() {
    console.log(`Listening to Port: ${PORT}`)
})