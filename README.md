# express-note-taker

## Author
Alonzo Roman

## Summary
This project is a note taker that users can write and save notes to by utilizing server side storage. This is accomplished through the use of express.js and get and post requests. The goal was for users to be able to write notes, save them to the server, view saved notes, and delete them. 

## Code Snippet
- In order to take a user's new note and save it to a database file containing all saved notes, I had to utilize the post method. Once a request was made, the db file containing the notes was read in order to retrieve the already saved notes, then the information from the user's input is used to create a new note, which is pushed into the array of notes. This new array is then written to the directory in order to have an updated list. 

```Javascript
router.post('/notes', (req, res) => {
    console.info(`${req.method} request received to add note`);
    fs.readFile(path.join(__dirname, '../db/db.json'), (err, data) => {
        if (err) {
            throw err
        }
        let notes = JSON.parse(data);
        const { title, text} = req.body;
            const newNote = {
                title,
                text,
                id: uuidv4(),
            }
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

```

## Steps
- Created the repository and loaded starter code
- Used NPM to install node.js and express.js
- Created server.js and began loading required libraries
- Created directories using express to change between pages
- Created functions to load and save note data
- Used UUID to create random number ids for each new note
- Created delete function based off of note ids
- Deployed application to Heroku to utilize servers

## Deployed Site
- [Link] (https://mysterious-retreat-76947.herokuapp.com/)

## Technologies Used
- [HTML] (https://developer.mozilla.org/en-US/docs/Web/HTML)
- [CSS] (https://developer.mozilla.org/en-US/docs/Web/CSS)
- [Javascript] (https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Node.JS] (https://nodejs.org/en/
- [Express] (https://expressjs.com/)
- [FS] (https://nodejs.org/api/fs.html)
- [UUID] (https://www.npmjs.com/package/uuid)
- [Heroku] (https://www.heroku.com/platform)


## Contact Links
- Github (https://github.com/alonzofroman)
- LinkedIn (https://www.linkedin.com/in/alonzo-roman/")

## Resources/Acknowledgements 
- W3Schools (https://www.w3schools.com/)
- MDN Web Docs (https://developer.mozilla.org/en-US/)