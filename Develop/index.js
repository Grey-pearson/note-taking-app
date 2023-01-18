const express = require('express');
const path = require('path');

const app = express()
const PORT = 3001;

app.get('*', (req, res) =>
    res.sendFile(path.join(__dirname, 'public/index.html'))
)

app.get('/notes', (req, res) =>
    res.sendFile(path.join(__dirname, 'public/notes.html'))
)

app.get('/api/notes', (req, res) =>
    res.sendFile(path.join(__dirname, 'public/notes.html'))
)

app.post('/api/notes', (req, res) =>
    res.sendFile(path.join(__dirname, 'public/notes.html'))
)

// figure out what this does
app.listen(PORT, () =>
    console.log(`Example app listening at http://localhost:${PORT}`)
);
