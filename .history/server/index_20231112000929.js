const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.

app.post('/add', (req, res => {
    const task = req.body.task;

}))
app.listen(3001, () => {
    console.log("Server is running")
})