// app.js
const express = require('express');
const session = require('express-session');
const cors = require('cors');
const { engine } = require('express-handlebars');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 4000;

// Configuración de Handlebars
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// Middleware básico
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

// Configuración de sesiones
app.use(session({
    secret: process.env.SESSION_SECRET || 'secret123',
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false } // Cambiar a 'true' al desplegar con HTTPS
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

// Integrar las rutas de autenticación y administración
const authRoutes = require('./routes/auth');
const adminRoutes = require('./routes/admin');
app.use('/', authRoutes);
app.use('/', adminRoutes);

// Escuchar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
