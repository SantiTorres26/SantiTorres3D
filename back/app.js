// app.js
const express = require('express');
const session = require('express-session');
const cors = require('cors');
const { engine } = require('express-handlebars');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

// Configuración de Handlebars
app.engine('handlebars', engine({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));

// Middleware básico
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Servir archivos estáticos desde public/
app.use(express.static(path.join(__dirname, 'public')));

// Configuración de sesiones
app.use(session({
  secret: process.env.SESSION_SECRET || 'secret123',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
}));

// Ruta principal de prueba
app.get('/', (req, res) => {
  res.send('¡Servidor funcionando correctamente!');
});

// Ruta de prueba de conexión a la base de datos
const db = require('./config/db');
app.get('/test-db', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT 1 + 1 AS solution');
    res.json({ solution: rows[0].solution });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al conectar con la base de datos' });
  }
});

// Importar rutas
const authRoutes     = require('./routes/auth');
const adminRoutes    = require('./routes/admin');
const projectsRoutes = require('./routes/projects');
const messagesRoutes = require('./routes/messages');  // ← Nueva línea

// Montar rutas
app.use('/', authRoutes);
app.use('/', adminRoutes);
app.use('/', projectsRoutes);
app.use('/', messagesRoutes);  // ← Y aquí

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
