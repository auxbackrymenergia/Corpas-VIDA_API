const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    correo: {
        type: String,
        required: [true, 'Por favor llenar con su Email'],
        unique: true,
        match: [
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Please add a valid email',
        ],
    },
    tipoPersona: {
        type: Number,
        required: [true, 'Por favor indicar tipo de persona']
    },
    nombres: {
        type: String,
        required: [true, 'Por favor llenar con sus nombres']
    },
    apellidos: {
        type: String,
        required: [true, 'Por favor llenar con sus apellidos ']
    },
    razonSocial: {
        type: String,
        required: [true, 'Por favor indicar su razon social']
    },
    tipoDocumento: {
        type: Number,
        required: [true, 'Por favor indicar tipo de documento']
    },
    numeroDocumento: {
        type: String,
        required: [true, 'Por favor llenar con su número de documento']
    },
    perfil: {
        type: Number,
        required: [true, 'Por favor indicar su perfil']
    },
    telefono: {
        type: String,
        required: [true, 'Por favor indicar su numero de telefono']
    },
    fechaNacimiento: {
        type: Date
        //required: [true, 'Por favor llenar con su fechade nacimiento']
    },
    escuela: {
        type: Number
    },
    programa: {
        type: Number
    },
    semestre: {
        type: Number
    },
    cargo: {
        type: String
    },
    razonVisita: {
        type: String
    },
    empresa: {
        type: Number
    },
    fabricante: {
        type: String,
        required: [true, 'Por favor indicar fabricante']
    },
    numeroDosis: {
        type: Number,
        required: [true, 'Por favor indicar el numero de dosis']
    },
    fechaVacuna1: {
        type: Date
        //required: [true, 'Por favor indicar fecha de la vacuna 1']
    },
    fechaVacuna2: {
        type: Date
    },
    urlFotoCarnet: {
        type: String,
        match: [
            /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
            'Please add a valid URL with HTTP or HTTPS',
        ]
    },
    createdAt: {
        type: Date,
        default: Date.now,
      }
    //fechaPruebaCOBIT: Date,
    //estadoPruebaCOBIT: Boolean,
    //situacion: number,

});

module.exports = mongoose.model('Usuario', UserSchema);