const express = require('express');
const cookieParser = require('cookie-parser');
const authenticateJWT = require('./middleware/auth');
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
// Protected routes
app.use('/profile', authenticateJWT, ProfileRoute); // Protected by auth middleware
app.use('/form', authenticateJWT, FormRoute); // Protected by auth middleware
//solo quita del comentario la linea de abajo cuando termines la ruta de contacts
app.use('/contacts', authenticateJWT, ContactsRoute); // Protected by auth middleware

//Get default
app.get('/', (req, res) => {
    res.send('Home');
});

//Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});