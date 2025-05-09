// back/routes/admin.js
const express = require('express');
const router = express.Router();

// Middleware para verificar si el usuario está autenticado
function isAuthenticated(req, res, next) {
  if (req.session.userId) {
    return next();
  }
  res.redirect('/login');
}

// Ruta protegida para el panel de administración
router.get('/admin', isAuthenticated, (req, res) => {
  res.render('admin', {
    user: req.session.userId,
    active: 'dashboard'
  });
});

module.exports = router;
