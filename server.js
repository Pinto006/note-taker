const express = require('express');
const { v4: uuidv4 } = require('uuid');
const path = require('path');
const fs = require('fs');
const util = require('util');

const PORT = process.env.PORT || 3001;
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// HTML Routes
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/index.html'))
);



//API Routes 
app.get('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', 'utf8', (error, data) => {
        error ? res.json(error) : res.json(data)
    })
 });

  app.post('/api/notes', function(req, res){
    const { title, text, id } = req.body;
    fs.readFile('./db/db.json', (req,res) => {
        if (req.body) {
            const newNote = {
              title, 
              text,
              id, uuidv4(),
            };
        readAndAppend(newNote, './db/db.json');
        fs.writeFile('./db/db.json', res.json())
    })
  })

app.delete('/api/notes/:id', (req, res) => {
    cont
})

//Listening
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
//read,uuid, push(append), write,send note,res.json