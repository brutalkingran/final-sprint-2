// capa de persistencia
// interfaz crud
// implementacion crud de superheroe
// 3)

import superHeroe from "../models/SuperHeroe.mjs";
import IRepository from "./IRepository.mjs";

class SuperHeroeRepository extends IRepository {
    async obtenerPorId(id) {
        return await SuperHeroe.findById(id);
    }

    async obtenerTodos() {
        return await SuperHeroe.find({});
    }

    async buscarPorAtributo(atributo, valor) {
        return await Superheroe.find( { [atributo] : valor } );
    }

    async obtenerMayoresDe30() {
        return await Superheroe.find( (hero) => hero.edad > 30 );
    }
}

export default new SuperHeroeRepository();
