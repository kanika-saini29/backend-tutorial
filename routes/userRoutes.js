const express = require('express');
const router = express.Router();

const {
    createUser,
    getUsers,
    updateUser,
    deleteUser
} = require('../controllers/userController');

// CRUD Routes
router.post('/', createUser);
router.get('/', getUsers);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

console.log("User Routes Loaded!");
module.exports = router;