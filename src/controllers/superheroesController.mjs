// controladores
// gestiona solicitudes HTTP, llamando servicios correspondientes y utilizando las vistas para presentar los datos
// 5)

import { obtenerSuperheroePorId, obtenerTodosLosSuperheroes, buscarSuperheroesPorAtributo, obtenerSuperheroesMayoresDe30 } from "../services/superheroesService.mjs";
import { renderizarSuperheroe, renderizarListaSuperheroes } from '../views/responseView.mjs';

export const obtenerSuperheroePorIdController = async ( req, res ) => {
    console.log("B");
    
    try {
        const { id } = req.params;
        const superheroe = await obtenerSuperheroePorId(id);

        if (!superheroe) {
            return res.status(404).send({
                mensaje: `Superhéroe no encontrado`
            });
        }

        const superheroeFormateado = renderizarSuperheroe(superheroe);
        res.status(200).json(superheroeFormateado);
    } catch (error) {
        res.status(500).send({
            mensaje: `Error al obtener el superhéroe`,
            error: error.mensaje
        });
    }
}

export const obtenerTodosLosSuperheroesController = async ( req, res ) => {
    try {
        const superheroes = await obtenerTodosLosSuperheroes();
        const superheroesFormateados = renderizarListaSuperheroes(superheroes);

        res.status(200).json(superheroesFormateados)
    } catch (error) {
        res.status(500).send({
            mensaje: `Error al obtener los superhéroes`,
            error: error.mensaje
        });
    }
}

export const buscarSuperheroesPorAtributoController = async ( req, res ) => {
    try {
        const { atributo, valor } = req.params;
        const superheroes = await buscarSuperheroesPorAtributo(atributo, valor);

        if (superheroes.length === 0) {
            return res.status(404).send({
                mensaje: `No se encontraron superhéroes con este atributo`
            });
        }

        const superheroeFormateado = renderizarListaSuperheroes(superheroes);
        res.status(200).json(superheroeFormateado);
    } catch (error) {
        res.status(500).send({
            mensaje: `Error al buscar lo/s superhéroe`,
            error: error.mensaje
        });
    }
}

export const obtenerSuperheroesMayoresDe30Controller = async ( req, res ) => {
    try {
        const superheroes = await obtenerSuperheroesMayoresDe30();

        if (superheroes.length === 0) {
            return res.status(404).send({
                mensaje: `No se encontraron superhéroes mayores de 30 años`
            });
        }

        const superheroeFormateado = renderizarListaSuperheroes(superheroes);

        res.status(200).json(superheroeFormateado);
    } catch (error) {
        res.status(500).send({
            mensaje: `Error al obtener superhéroes mayores de 30`,
            error: error.mensaje
        });
    }
}