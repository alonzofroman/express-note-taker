const express = require('express');
const path = require('path');
const fs = require('fs');
const router = express.Router();
const { v4: uuidv4 } = require('uuid');

// const notesList = require('../db/db.json');


// Load Notes
router.get('/notes', (req, res) => {
    // Read from notes in db.json
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
    console.info(`${req.method} request received to add note`);
    // Read notes from db.json
    fs.readFile(path.join(__dirname, '../db/db.json'), (err, data) => {
        if (err) {
            throw err
        }
        let notes = JSON.parse(data);
        // Create new note with ids
        const { title, text} = req.body;
            const newNote = {
                title,
                text,
                id: uuidv4(),
            }
            // Push new note to notes and overwrite db.json with updated list
        notes.push(newNote);
        fs.writeFile('./db/db.json', JSON.stringify(notes), null, (err) => {
            if (err) {
                throw err
            }
            console.log('Note added');
            res.json(newNote);
        })
    })
});

// Delete Note
router.delete('/notes/:id', (req, res) => {
    console.info(`${req.method} request received to delete a note`);
    // Read notes from db.json
    fs.readFile(path.join(__dirname, '../db/db.json'), (err, data) => {
        if (err) {
            throw err
        }
    let notes = JSON.parse(data);
    // Find the note that matches IDs to delete request and remove it
    for(i=0; i<notes.length; i++) {
        if (notes[i].id === req.params.id) {
             notes.splice(i, 1);
        }
    }
    // Write updated notes list to db.json
    fs.writeFile('./db/db.json', JSON.stringify(notes), null, (err) => {
        if (err) {
            throw err
        }
        console.log('Note Deleted');
        res.json(notes);
    })
    })
})

module.exports = router