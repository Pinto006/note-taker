const express = require('express');

const path = require('path');
const api = require('./routes/api.js');


const PORT = process.env.PORT || 3001;
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use('/api', api);


// HTML Routes
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/index.html'))
);



// //API Routes 
// app.get('/api/notes', (req, res) => {
//     fs.readFile('./db/db.json', 'utf8', (error, data) => {
//         error ? res.json(error) : res.json(data)
//     })
//  });

// app.post('/api/notes', function (req, res) {
//     const { title, text } = req.body;
//     fs.readFile('./db/db.json', (error, data) => {
//         if (req.body) {
//             const newNote = {
//                 title,
//                 text,
//                 id: uuidv4()
//             };
//             fs.readAndAppend(newNote, './db/db.json');
//             fs.writeFile('./db/db.json', JSON.stringify(newNote));
//             res.json(newNote);
//         }
//     })
// })

// app.delete('/api/notes/:id', (req, res) => {
//     let data = fs.readFileSync('db/db.json', 'utf8');
//     const jsonData = JSON.parse(data);
//     const newNote = jsonData.filter((note) => {
//         return note.id !== req.params.id;
//     });
//     fs.writeFileSync('db/db.json', JSON.stringify(newNote))
//     res.json("note deleted");
// });

//Listening
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
