const express = require('express');
const router = express.Router();
const authenticateJWT = require('../middleware/auth');

// Lista de datos de ejemplo (nombre, apellido, correo electrónico y fecha de nacimiento)
const contactsData = [
  { 
    nombre: 'Juan', 
    apellido: 'García', 
    correo: 'juan.garcia@example.com', 
    fechaNacimiento: '1990-05-10' 
  },
  { 
    nombre: 'María', 
    apellido: 'Martínez', 
    correo: 'maria.martinez@example.com', 
    fechaNacimiento: '1985-12-20' 
  },
  { 
    nombre: 'Luis', 
    apellido: 'Rodríguez', 
    correo: 'luis.rodriguez@example.com', 
    fechaNacimiento: '1988-08-15' 
  },
  { 
    nombre: 'Ana', 
    apellido: 'López', 
    correo: 'ana.lopez@example.com', 
    fechaNacimiento: '1992-03-25' 
  },
  { 
    nombre: 'Carlos', 
    apellido: 'Hernández', 
    correo: 'carlos.hernandez@example.com', 
    fechaNacimiento: '1991-09-05' 
  },
  { 
    nombre: 'Laura', 
    apellido: 'Gómez', 
    correo: 'laura.gomez@example.com', 
    fechaNacimiento: '1987-11-12' 
  },
  { 
    nombre: 'Pedro', 
    apellido: 'Díaz', 
    correo: 'pedro.diaz@example.com', 
    fechaNacimiento: '1994-02-28' 
  },
  { 
    nombre: 'Sofía', 
    apellido: 'Pérez', 
    correo: 'sofia.perez@example.com', 
    fechaNacimiento: '1993-06-18' 
  },
  { 
    nombre: 'Javier', 
    apellido: 'Muñoz', 
    correo: 'javier.munoz@example.com', 
    fechaNacimiento: '1989-07-09' 
  },
  { 
    nombre: 'Elena', 
    apellido: 'Sánchez', 
    correo: 'elena.sanchez@example.com', 
    fechaNacimiento: '1995-10-30' 
  },
];

router.get('/', authenticateJWT, (req, res) => {
  res.json(contactsData);
});

module.exports = router;
