// Lógica de negocio
// Servicios de Superheroe
// 4)

import SuperHeroRepository from "../repositories/SuperHeroRepository.mjs";

export const obtenerSuperheroePorId = async (id) => {
    return await SuperHeroRepository.obtenerPorId(id);
}

export const obtenerTodosLosSuperheroes = async () => {
    return await SuperHeroRepository.obtenerTodos();
}

export const buscarSuperheroesPorAtributo = async (atributo, valor) => {
    return await SuperHeroRepository.buscarPorAtributo(atributo, valor);
}

export const obtenerSuperheroesMayoresDe30 = async () => {
    return await SuperHeroRepository.obtenerMayoresDe30();
}