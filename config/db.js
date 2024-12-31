// config/db.js
const mysql = require('mysql2');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

// Connexion MySQL
const mysqlConnection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
});

// Connexion MongoDB
const connectMongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connecté à MongoDB');
    } catch (err) {
        console.error('Erreur MongoDB :', err.message);
        process.exit(1);
    }
};

module.exports = { mysqlConnection, connectMongoDB };
