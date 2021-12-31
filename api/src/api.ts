import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import { helloRoutes } from './routes/helloRoutes'

mongoose.connect('mongodb://localhost/tarot_journal')
const { connection } = mongoose
connection.on('error', () => console.log('db error'))

const app = express()
const appPort = 3000

app.use(express.json())
app.use(cors())
app.use('/hello', helloRoutes)
app.listen(appPort, () => {
  console.log(`API listening at http://localhost:${appPort}`)
})
