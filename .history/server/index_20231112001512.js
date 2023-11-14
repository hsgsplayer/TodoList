const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const TodoModel = require('models/')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://127.0.0.2:27017/test')

app.post('/add', (req, res => {
    const task = req.body.task;

}))
app.listen(3001, () => {
    console.log("Server is running")
})