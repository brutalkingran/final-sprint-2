// config base de datos
// sirve como única instancia de conexión a mongoDB
// 1)

import mongoose from 'mongoose';

export const connectDB = async() => {
    try {
        await mongoose.connect(
            'mongodb+srv://Grupo-03:grupo03@cursadanodejs.ls9ii.mongodb.net/Node-js'
        );

        console.log('Conexión exitosa a MongoDB');
    } catch ( error ) {
        console.error( 'Error al conectar a MongoDB: ', error);
        process.exit(1);
    }
}