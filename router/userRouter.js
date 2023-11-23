const mongoose = require('mongoose')
const express = require('express');
const USER_ROLE = require('../model/userRoleModel')
const router = express.Router();
const { create_user, single_user, delete_user, update_user, getAll_users } = require('../controller/userController');



// post users, C -- for create
router.post('/api/user',create_user)

// single user, U -- for one user
router.get('/api/user/:id',single_user)

// delete user U -- for delete 
router.delete('/api/user/:id',delete_user)

// update user, U -- for update
router.put('/api/user/:id', update_user)

// get user, R -- for read
router.get('/api/user', getAll_users)
  module.exports = router
