const express = require('express');
const path = require('path');
const fs = require('fs');
const router = express.Router();

// const notesList = require('../db/db.json');


// Load Notes
router.get('/notes', (req, res) => {
    console.info(`${req.method} request received to get notes`);
    fs.readFile(path.join(__dirname, '../db/db.json'), (err, data) => {
        if (err) {
            throw err
        }
        res.json(JSON.parse(data))
    }) 
});


// New Notes
router.post('/notes', (req, res) => {
    console.info(`${req.method} request received to add note`)
    fs.readFile(path.join(__dirname, '../db/db.json'), (err, data) => {
        if (err) {
            throw err
        }
        let notes = JSON.parse(data);
        let newNote = req.body;
        notes.push(newNote);
        fs.writeFile('./db/db.json', JSON.stringify(notes), null, (err) => {
            if (err) {
                throw err
            }
            console.log('Note added')
            res.json(newNote);
        })
    })
});

// Delete Notes

module.exports = router