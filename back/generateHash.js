// generateHash.js
const bcrypt = require('bcryptjs');

const password = '123456'; // La contraseña de prueba
const saltRounds = 10;

bcrypt.hash(password, saltRounds, (err, hash) => {
    if (err) {
        return console.error('Error al generar hash:', err);
    }
    console.log('Hash generado:', hash);
});
