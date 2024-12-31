// server.js
const express = require('express');
const dotenv = require('dotenv');
const { connectMongoDB, mysqlConnection } = require('./config/db');
const studentRoutes = require('./routes/studentRoutes');

dotenv.config();

const app = express();
app.use(express.json());

// Connexion aux bases de données
connectMongoDB();
mysqlConnection.connect(err => {
    if (err) {
        console.error('Erreur MySQL :', err.message);
        process.exit(1);
    }
    console.log('Connecté à MySQL');
});

// Routes
app.use('/api/students', studentRoutes);

// Lancement du serveur
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Serveur démarré sur le port ${PORT}`));
