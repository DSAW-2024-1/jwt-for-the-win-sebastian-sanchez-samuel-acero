const express = require('express');
const router = express.Router();

router.post('/',(req,res)=>{
    const {text}=req.body;
    if (typeof text !== 'string') {
        return res.status(400).send("ERROR, tipo de dato incorrecto, recuerde que solo se recibe texto.");
    }
    res.send({ text });
});

module.exports = router;