// controllers/authController.js
const db = require('../config/db');
const bcrypt = require('bcryptjs');

// Renderiza el formulario de login
exports.getLogin = (req, res) => {
    res.render('login', { error: null });
};

// Procesa el envío del formulario de login
exports.postLogin = async (req, res) => {
    const { username, password } = req.body;

    try {
        // Buscar el usuario en la base de datos
        const [rows] = await db.query('SELECT * FROM user WHERE username = ?', [username]);
        if (rows.length === 0) {
            return res.render('login', { error: 'Usuario no encontrado' });
        }
        const user = rows[0];

        // Comparar la contraseña ingresada con el hash almacenado
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.render('login', { error: 'Contraseña incorrecta' });
        }

        // Si las credenciales son correctas, se crea la sesión
        req.session.userId = user.id;
        res.redirect('/admin'); // Redirige a una ruta protegida (panel de administración)
    } catch (err) {
        console.error(err);
        res.render('login', { error: 'Error en el servidor' });
    }
};

// Cierra la sesión del usuario (logout)
exports.logout = (req, res) => {
    req.session.destroy((err) => {
        if (err) console.error(err);
        res.redirect('/login');
    });
};
