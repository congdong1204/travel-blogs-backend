import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import post from './routers/post.js'
import mongoose from 'mongoose'

const app = express()
const PORT = process.env.port || 5001

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true, limit: '30mb' }))
app.use(cors())

app.use('/post', post)

mongoose
  .connect('mongodb://localhost:27017/travel-blogs')
  .then(() => {
    console.log('Connect database successfully!')
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })
  })
  .catch((error) => console.log(error))
