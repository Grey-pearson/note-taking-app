const express = require('express');
const app = express()
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true })) //req.body 
app.use(express.json())
app.use(express.static("public"))


app.use(require("./routes/apiRoutes"))
app.use(require("./routes/htmlroutes"))
// app.get('*', (req, res) =>
//     res.sendFile(path.join(__dirname, 'public/index.html'))
// )

// app.get('/notes', (req, res) =>
//     res.sendFile(path.join(__dirname, 'public/notes.html'))
// )

// app.get('/api/notes', (req, res) =>
//     res.sendFile(path.join(__dirname, 'public/notes.html'))
// )

// app.post('/api/notes', (req, res) =>
//     res.sendFile(path.join(__dirname, 'public/notes.html'))
// )

// figure out what this does
app.listen(PORT, () =>
    console.log(`Example app listening at http://localhost:${PORT}`)
);
