const express = require('express');
const router = express.Router();
const authenticateJWT = require('../middleware/auth');

router.post('/',authenticateJWT,(req,res)=>{
    const {text}=req.body;
    if (typeof text !== 'string') {
        return res.status(400).send("ERROR, tipo de dato incorrecto, recuerde que solo se recibe texto.");
    }
    res.send({ text });
});

module.exports = router;