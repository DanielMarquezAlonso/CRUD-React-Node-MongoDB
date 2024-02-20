const mongoose = require('mongoose');

const dbconnect = async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/users_prueba");
        console.log('Conexión a la base de datos establecida...');
    } catch (err) {
        console.error(err);
        console.log('Fallo en la conexión a la base de datos...');

    }
};

module.exports = dbconnect;