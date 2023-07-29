const { response, request } = require('express')

const usuariosGet = (req = request, res = response) => {

    const {nombre = 'Falta nombre', dni = "Falta DNI", edad = "Falta edad", page = 1, limit = 10} = req.query;

    res.json({
        msg: 'get API',
        nombre,
        dni,
        edad,
        page,
        limit
    })
}

const usuariosPut = (req, res = response) => {

    const id = req.params.id;

    res.status(201).json({
        msg: 'put API',
        id
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API'
    });
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API'
    });
}

const usuariosPost = (req, res = response) => {

    const {nombre, edad} = req.body;
    res.json({
        msg: ({
            nombre,
            edad
        })
    });
}



module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosDelete,
    usuariosPost,
    usuariosPatch
}