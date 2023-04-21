const express = require('express')
const { Venue } = require('../models')

const venueRouter = express.Router()

venueRouter.get('/', async (_req, res) => {
  res.send(await Venue.findAll())
})

venueRouter.get('/:id', async (req, res) => {
  res.send(await Venue.findByPk(req.params.id))
})

venueRouter.post('/', async (req, res) => {
  res.status(201).send(await Venue.create(req.body))
})

venueRouter.put('/:id', async (req, res) => {
  const venue = await Venue.findByPk(req.params.id)
  res.send(await venue.update(req.body))
})

venueRouter.delete('/:id', async (req, res) => {
  const venue = await Venue.findByPk(req.params.id)
  res.send(await venue.destroy())
})

module.exports = venueRouter
