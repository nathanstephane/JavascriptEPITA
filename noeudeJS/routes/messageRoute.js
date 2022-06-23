const express = require('express')
const messageModel = require('../models/messageModel')
const Router = express.Router()

Router.get('/', async (req, res) => {
    messages = await messageModel.find({})
    console.log(messages)
    return res.status(200).json([])
})

module.exports = Router 