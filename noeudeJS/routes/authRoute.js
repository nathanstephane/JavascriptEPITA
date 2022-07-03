const express = require('express')
const bcrypt = require('bcrypt')

const userModel = require('../models/userModel')

const Router = express.Router()

Router.post('/register', async(req,res) =>{
    const {email, password, username} = req.body

    if((email && email !== "") && (password && password !== "" && password.length >= 6)){
        const hash = bcrypt.hashSync(password, 10)
        try {
            const User = new userModel({
                email: email,
                username,
                password: hash,
                active: 1
            })

            const user = await User.save()
            return res.status(200).json(user)
        } catch (error) {
            return res.status(500).json({'msg': error.message})
        }
    
       
    } else {
        res.status(500).json({"msg": "Email and password are required! and 6 character >= password"})
    }
})
module.exports = Router