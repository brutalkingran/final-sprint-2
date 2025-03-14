// capa de persistencia
// interfaz crud
// implementacion crud de superheroe
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
        return await superHeroe.find( { edad : { $gt : 30 }} );
    }
}

export default new SuperHeroeRepository();
