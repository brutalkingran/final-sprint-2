// 1)
// Contiene archivos con configuraciones del entorno, como variables de entorno, configuración de la base de datos, puertos, claves de API, etc.

import mongoose from 'mongoose';

const connect_data = 'mongodb+srv://Grupo-03:grupo03@cursadanodejs.ls9ii.mongodb.net/Node-js'

export const connectDB = async() => {
    try {
        await mongoose.connect(connect_data);

        console.log('Conexión exitosa a MongoDB');
    } catch ( error ) {
        console.error( 'Error al conectar a MongoDB: ', error);
        process.exit(1); // uncaught exception, and it was not handled by a domain or an uncaughtException event handler
    }
}