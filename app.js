require('dotenv').config()
const express = require('express')
const dbConnection = require('./config/db.js')
const router = require('./routes/userRoutes.js')

const app = express()

app.use(express.json())         // middleware to get data from body

dbConnection()


app.use('/', router)


module.exports = app