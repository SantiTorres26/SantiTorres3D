// back/routes/messages.js
const express = require('express');
const db = require('../config/db');
const router = express.Router();

// Ruta pública: recibe mensajes sin auth
router.post('/api/messages', async (req, res) => {
  console.log('API /api/messages recibida:', req.body);  // <<-- Línea de debug
  const { name, email, message } = req.body;
  try {
    await db.query(
      'INSERT INTO messages (name, email, message) VALUES (?, ?, ?)',
      [name, email, message]
    );
    return res.json({ success: true });
  } catch (error) {
    console.error('Error al guardar mensaje:', error);
    return res.status(500).json({ success: false });
  }
});

// Función de auth sólo para /admin/messages
function isAuthenticated(req, res, next) {
  if (req.session.userId) return next();
  res.redirect('/login');
}

// Ruta protegida de admin para ver mensajes
router.get('/admin/messages', isAuthenticated, async (req, res) => {
  const [msgs] = await db.query(
    'SELECT id, name, email, message, created_at FROM messages ORDER BY created_at DESC'
  );
  res.render('messages', { messages: msgs });
});

module.exports = router;
