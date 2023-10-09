require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

// Middleware para parsear los datos del formulario
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const transporter = nodemailer.createTransport({
  host: 'smtp-mail.outlook.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  }
});

// Ruta GET para renderizar el formulario
app.get('/sendmail', (req, res) => {
  const form = `
    <form action="/sendmail" method="post">
      <label for="to">Para:</label><br>
      <input type="text" id="to" name="to" value="sebastianprieto058@gmail.com"><br>
      <label for="subject">Asunto:</label><br>
      <input type="text" id="subject" name="subject" value="¡Hola desde Node.js!"><br>
      <label for="message">Mensaje:</label><br>
      <textarea id="message" name="message" rows="4" cols="50">
Este es un mensaje de prueba enviado desde Node.js.
      </textarea><br><br>
      <input type="submit" value="Enviar">
    </form> 
  `;

  res.send(form);
});

// Ruta POST para enviar el correo
app.post('/sendmail', (req, res) => {
  const { to, subject, message } = req.body;

  const mailOptions = {
    from: `Tu Nombre <${process.env.EMAIL_USER}>`,
    to,
    subject,
    text: message // Aquí se agrega el mensaje del campo de texto del formulario
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error al enviar el correo:', error);
      res.status(500).send('Error al enviar el correo');
      return;
    }

    console.log('Correo enviado:', info.response);
    res.send('Correo enviado con éxito');
  });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
