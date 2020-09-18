const descripcion = {
    demand: true, //obligatorio
    alias: 'd',
    desc: 'Descripcion de la tarea por hacer'

};

const completado = {
    alias: 'c',
    default: true,
    desc: 'Marca como completado la tarea'

};



const argv = require('yargs')


.command('crear', 'Crea un nuevo por hacer', {

        // descripcion: {
        //     demand: true, //obligatorio
        //     alias: 'd',
        //     desc: 'Descripcion de la tarea por hacer'
        // }
        descripcion
    })
    .command('actualizar', 'Actualiza el estado de una tarea', {

        // descripcion: {
        //     demand: true,
        //     alias: 'd',
        //     desc: 'Descripcion de la tarea por hacer'

        // },

        // completado: {
        //     alias: 'c',
        //     default: true,
        //     desc: 'Marca como completado la tarea'
        // }

        descripcion,
        completado
    })
    .command('borrar', 'Borra una tarea', {

        descripcion,
        completado
        // descripcion: {
        //     alias: 'd',
        //     desc: 'Borra una tarea'
        // },
        // copletados: {
        //     alas: 'co',
        //     desc: 'Borra tareas completadas'
        // }
    }).help().argv;


module.exports = {
    argv


}