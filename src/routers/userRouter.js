const express = require('express')
const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const router = express.Router()

// Register a user
router.post('/users/login', async (req,res)=>{
    res.send('test register route')
})

// Login a user
router.post('/users/login', async (req,res)=>{
    res.send('test login route')
})

module.exports = router