const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const SECRET_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZS';

// Middleware para parsear el cuerpo de las solicitudes como JSON
router.use(express.json());

// Usuarios hardcoded
const users = {
    'admin@admin.com': 'admin'
};

router.post('/',(req,res) => {
    const { email, password } = req.body;
    // Verificar si el cuerpo de la solicitud está vacío
    if (Object.keys(req.body).length === 0) {
        return res.status(400).send("El cuerpo de la solicitud está vacío. Proporcione los datos válidos, email y password.");
    }

    // Verificar que los campos sean del tipo correcto
    if (typeof email !== 'string' || typeof password !== 'string') {
        return res.status(400).send("ERROR, tipo de dato incorrecto, recuerde que solo se recibe texto.");
    }

    // Verificar que el email tenga una estructura válida
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).send("El formato del correo electrónico no es válido.");
    }

    // Verificar las credenciales
    if (users[email] && users[email] === password) {
        const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: '1h' });
        res.cookie('token', token, { httpOnly: true });
        return res.status(200).send(SECRET_KEY);
    }

    return res.status(401).send('Invalid email or password');

});

module.exports = router;