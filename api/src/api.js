const express = require('express')
const mongoose = require('mongoose')
const helloRoutes = require('./routes/helloRoutes');

mongoose.connect('mongodb://localhost/tarot_journal')
const { connection } = mongoose
connection.on('error', () => console.log('db error'))

const app = express()
const appPort = 3000
app.use(express.json())
app.use('/hello', helloRoutes)
app.listen(appPort, () => {
    console.log(`API listening at http://localhost:${appPort}`)
})