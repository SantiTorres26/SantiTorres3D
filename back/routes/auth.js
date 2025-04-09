// routes/auth.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Muestra la vista para iniciar sesión (Login)
router.get('/login', authController.getLogin);

// Procesa el formulario de login
router.post('/login', authController.postLogin);

// Ruta para cerrar sesión (Logout)
router.get('/logout', authController.logout);

module.exports = router;
