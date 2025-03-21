// capa de persistencia
// interfaz crud
// implementacion crud de superheroe. SEPARA LÓGICA DE ACCESO DE BASE DE DATOS
// actúa como un intermediario entre la base de datos y la lógica de la aplicación
// 3)

import superHeroe from "../models/SuperHeroe.mjs";
import IRepository from "./IRepository.mjs";

class SuperHeroeRepository extends IRepository {
    async obtenerPorId(id) {
        return await superHeroe.findById(id);
    }

    async obtenerTodos() {
        return await superHeroe.find({});
    }

    async buscarPorAtributo(atributo, valor) {
        return await superHeroe.find( { [atributo] : valor } );
    }

    async obtenerMayoresDe30() {
        // return await superHeroe.find( { edad : { $gt : 30 } } );
        return await superHeroe.find( { $and : [
            { edad : { $gt : 30 } },
            { planetaOrigen : "Tierra" },
            { $expr: { $gt: [{ $size: "$poderes" }, 2] } } 
        ] } );
    }
}

export default new SuperHeroeRepository();
