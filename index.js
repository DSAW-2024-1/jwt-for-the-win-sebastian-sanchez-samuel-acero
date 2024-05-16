const express = require('express');
const cookieParser = require('cookie-parser');
const PORT = 3000;
const app = express();

// Middleware
app.use(express.json());
app.use(cookieParser());

//Rutas
const LogInRoute=require('./routes/login');
const ProfileRoute=require('./routes/profile');
const FormRoute=require('./routes/form');
const ContactsRoute=require('./routes/contacts');

app.use('/login',LogInRoute);
app.use('/profile',ProfileRoute);
app.use('/form',FormRoute);
app.use('/contacts',ContactsRoute);

// Middleware de autenticación
const authenticateJWT = (req, res, next) => {
    const token = req.cookies.token;
    if (token) {
        jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }
            req.user = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
};

//Get default
app.get('/', (req, res) => {
    res.send('Home');
});

//Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});