// back/config/mailer.js
const nodemailer = require('nodemailer');
require('dotenv').config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

transporter.verify()
  .then(() => console.log('✅ Nodemailer listo para enviar correos'))
  .catch(err => console.error('❌ Error en Nodemailer', err));

module.exports = transporter;
