// back/routes/messages.js
const express     = require('express');
const db          = require('../config/db');
const transporter = require('../config/mailer');
const router      = express.Router();

// Ruta pública: recibe mensajes sin auth
router.post('/api/messages', async (req, res) => {
  console.log('API /api/messages recibida:', req.body);
  const { name, email, message } = req.body;
  try {
    // 1) Guardar en la base de datos
    await db.query(
      'INSERT INTO messages (name, email, message) VALUES (?, ?, ?)',
      [name, email, message]
    );

    // 2) Enviar notificación por correo
    await transporter.sendMail({
      from:    process.env.EMAIL_USER,
      to:      process.env.EMAIL_USER,
      subject: `Nuevo mensaje de ${name}`,
      text:    `De: ${name} <${email}>\n\n${message}`,
      html:    `<p><strong>De:</strong> ${name} &lt;${email}&gt;</p>
                <p><strong>Mensaje:</strong><br>${message.replace(/\n/g, '<br>')}</p>`
    });

    // 3) Responder al front
    return res.json({ success: true });
  } catch (error) {
    console.error('Error al guardar o enviar mensaje:', error);
    return res.status(500).json({ success: false });
  }
});

// Helper de auth sólo para /admin/messages
function isAuthenticated(req, res, next) {
  if (req.session.userId) return next();
  res.redirect('/login');
}

// Ruta protegida de admin para ver mensajes
router.get('/admin/messages', isAuthenticated, async (req, res) => {
  try {
    const [msgs] = await db.query(
      'SELECT id, name, email, message, created_at FROM messages ORDER BY created_at DESC'
    );
    res.render('messages', {
      messages: msgs,
      active: 'messages'
    });
  } catch (error) {
    console.error('Error al obtener mensajes:', error);
    res.render('messages', {
      messages: [],
      active: 'messages'
    });
  }
});

// Eliminar un mensaje por ID (admin)
router.get('/admin/messages/delete/:id', isAuthenticated, async (req, res) => {
  const { id } = req.params;
  try {
    await db.query('DELETE FROM messages WHERE id = ?', [id]);
  } catch (error) {
    console.error('Error al eliminar mensaje:', error);
  }
  res.redirect('/admin/messages');
});


module.exports = router;
