const express = require('express');
const router = express.Router();
const authenticateJWT = require('../middleware/auth');

const randomNames = [
    { nombre: 'Juan', apellido: 'García', correo: 'juan.garcia@example.com' },
    { nombre: 'María', apellido: 'Martínez', correo: 'maria.martinez@example.com' },
    { nombre: 'Luis', apellido: 'Rodríguez', correo: 'luis.rodriguez@example.com' },
    { nombre: 'Ana', apellido: 'López', correo: 'ana.lopez@example.com' },
    { nombre: 'Carlos', apellido: 'Hernández', correo: 'carlos.hernandez@example.com' },
    { nombre: 'Laura', apellido: 'Gómez', correo: 'laura.gomez@example.com' },
    { nombre: 'Pedro', apellido: 'Díaz', correo: 'pedro.diaz@example.com' },
    { nombre: 'Sofía', apellido: 'Pérez', correo: 'sofia.perez@example.com' },
    { nombre: 'Javier', apellido: 'Muñoz', correo: 'javier.munoz@example.com' },
    { nombre: 'Elena', apellido: 'Sánchez', correo: 'elena.sanchez@example.com' }
  ];
  

  router.get('/contacts', authenticateJWT, (req, res) => {
    res.json(randomNames);
  });
  
  module.exports = router;