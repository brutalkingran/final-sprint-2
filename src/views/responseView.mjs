// capa de presentación
// funciones para mostrar datos de superhéroes
// 6)

export const renderizarSuperheroe = ( superheroe ) => {
    return {
        nombre: superheroe.nombreSuperHeroe,
        "Nombre Real": superheroe.nombreReal,
        Edad: superheroe.edad,
        "Planeta de Origen": superheroe.planetaOrigen,
        Debilidad: superheroe.debilidad,
        Poderes: superheroe.poderes,
        Aliados: superheroe.aliados,
        Enemigos: superheroe.enemigos
    }
}

export const renderizarListaSuperheroes = (superheroes) => {
    return superheroes.map(superheroe => renderizarSuperheroe(superheroe));
}
