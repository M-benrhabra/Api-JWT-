const { Router } = require('express')
const express = require('express')
const routeUser = express.Router()
const { signUpUser, signInUser, getallUser, logout } = require('../controllers/authUser')
const { isAdmin, isTechnician, isUser, isAuth } = require('../middleware/auth.middleware')

//register user 
routeUser.post('/signUp', signUpUser)

//login User 
routeUser.post('/signIn', signInUser)

// admin 
routeUser.get('/allUser', isAdmin, isAuth, getallUser)

// lougout 
routeUser.get('/logout', logout)


module.exports = routeUser;