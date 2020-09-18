const fs = require('fs');


let listadoPorHacer = [];


const getListado = () => {

    cargarDB();


    return listadoPorHacer;

}


const borrar = (descripcion) => {

    cargarDB();

    let temp = listadoPorHacer.filter(tarea => {

        return tarea.descripcion != descripcion;

    })


    if (listadoPorHacer.length === temp.length) {

        return false;
    } else {
        listadoPorHacer = temp;
        guardarDB();
        return true;
    }

}

const actualizar = (descripcion, completado = true) => {

    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => {

        return tarea.descripcion === descripcion;

    })

    if (index >= 0) {

        listadoPorHacer[index].completado = completado;
        guardarDB();
        console.log("Guarda DB".yellow);
        return true;
    } else {
        return false;
    }

}

const cargarDB = () => {

    try {

        listadoPorHacer = require('../db/data.json');

    } catch (error) {

        listadoPorHacer = [];
    }

}


const guardarDB = () => {


    let data = JSON.stringify(listadoPorHacer);

    fs.writeFile('db/data.json', data, (err) => {

        if (err) throw Error('No se pudo grabar', err);

    });

}



const crear = (descripcion) => {

    cargarDB();

    let porHacer = {

        descripcion,
        completado: false
    };

    listadoPorHacer.push(porHacer);
    guardarDB();
    return porHacer;

}



module.exports = {
    crear,
    guardarDB,
    getListado,
    actualizar,
    borrar
}