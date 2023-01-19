const app = require("express").Router()
let db = require("../db/db.json")
const fs = require("fs")


app.get('/api/notes', (req, res) => {

    db = JSON.parse(fs.readFileSync("./db/db.json")) || []
    res.json(db)
})

app.post('/api/notes', (req, res) => {
    let newNote = { title: req.body.title, text: req.body.text, id: Math.floor(Math.random() * 123456) }
    db.push(newNote)
    fs.writeFileSync("./db/db.json", JSON.stringify(db), err => {
        if (err) throw err
    })
    res.json(db)
})

app.delete('/api/notes/:id', (req, res) => {
    let tempDB = []

    db.forEach(element => {
        if (element.id != req.params.id) {
            tempDB.push(element)
        }
    })
    db = tempDB
    fs.writeFileSync("./db/db.json", JSON.stringify(db), err => {
        if (err) throw err
    })
    res.json(db)
})

//CRUD
// Cread - Post
// Read - get
// Update - update - PUT
// Delete -delete

module.exports = app