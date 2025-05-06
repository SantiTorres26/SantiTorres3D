// back/routes/projects.js
const express = require('express');
const db = require('../config/db');
const router = express.Router();

// Helper de auth
function isAuthenticated(req, res, next) {
  if (!req.session.userId) {
    return res.redirect('/login');
  }
  next();
}

// Mostrar el formulario para agregar un nuevo proyecto (admin)
router.get('/admin/projects/add', isAuthenticated, (req, res) => {
  res.render('addProject');
});

// Procesar el formulario de nuevo proyecto (admin)
router.post('/admin/projects/add', isAuthenticated, async (req, res) => {
  const { title, description, date } = req.body;
  try {
    await db.query(
      'INSERT INTO projects (title, description, date) VALUES (?, ?, ?)',
      [title, description, date]
    );
    res.redirect('/admin/projects');
  } catch (error) {
    console.error('Error al guardar proyecto:', error);
    res.redirect('/admin/projects/add');
  }
});

// Listar proyectos en admin
router.get('/admin/projects', isAuthenticated, async (req, res) => {
  try {
    const [projects] = await db.query(
      'SELECT id, title, description, date FROM projects ORDER BY created_at DESC'
    );
    res.render('projects', { projects });
  } catch (error) {
    console.error('Error al obtener proyectos:', error);
    res.render('projects', { projects: [] });
  }
});

// Eliminar un proyecto por ID (admin)
router.get('/admin/projects/delete/:id', isAuthenticated, async (req, res) => {
  const { id } = req.params;
  try {
    await db.query('DELETE FROM projects WHERE id = ?', [id]);
  } catch (error) {
    console.error('Error al eliminar proyecto:', error);
  }
  res.redirect('/admin/projects');
});

// Endpoint público: devuelve todos los proyectos en JSON (sin auth)
router.get('/api/projects', async (req, res) => {
  try {
    const [projects] = await db.query(
      'SELECT id, title, description, date FROM projects ORDER BY created_at DESC'
    );
    res.json(projects);
  } catch (error) {
    console.error('Error al obtener proyectos para API:', error);
    res.status(500).json({ error: 'Error en el servidor' });
  }
});

module.exports = router;
