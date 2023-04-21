const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const views = require('./views')

const app = express()

app.use(express.json())
app.use(cors())
app.use(morgan('tiny'))

app.use('/venue', views.venueRouter)

module.exports = app
