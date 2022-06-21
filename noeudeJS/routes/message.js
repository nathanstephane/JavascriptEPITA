const express = require('express')
const Router = express.Router()

Router.get('/', (req, res) => {
    return req.statusCode(200).json([])
})

module.exports = Router