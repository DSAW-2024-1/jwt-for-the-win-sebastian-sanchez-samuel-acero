const express = require('express');
const router = express.Router();
const authenticateJWT = require('../middleware/auth');

router.get('/',authenticateJWT,(req,res) =>{
    const profile ={
        nombre: "Luis",
        apellido: "Ramirez",
        correoElectronico: "LuisRam@gmail.com",
        fechaDeNacimiento:"20/03/1889"
    }
    res.json(profile);
});

module.exports= router;
