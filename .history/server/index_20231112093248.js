const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv').config()
const TodoModel = require('./models/Todo')



const app = express()
app.use(express.json())
const PORT = process.

// mongoose.connect('mongodb://localhost:27017/test')

// app.get('/get', (req, res) => {
//     TodoModel.find()
//     .then(result => res.json(result))
//     .catch(err => res.json(err))
// })

// app.post('/add', (req, res) => {
//     const task = req.body.task;
//     TodoModel.create({
//         task: task

//     }).then(result => res.json(result))
//     .catch(err=>res.json(err))

// })
// app.listen(3001, () => {
//     console.log("Server is running")
// })