//require('dotenv').config() //para que se seteen las variables de entorno en el objeto PROCESS y esten disponibles.
import env from  'dotenv'//para que se seteen las variables de entorno en el objeto PROCESS y esten disponibles.

//const { get } = require('env-var'); //para darle propiedades a las variables de entorno. number, portNumber
import envvar from 'env-var'//para darle propiedades a las variables de entorno. number, portNumber

env.config();
//creamos un objeto con las variables
//get: va a tomar las variable de entorno seteada en .env
//required: va a ser requerida. Si no está, no ingresa. 
//asPortNumber: para que se identifique como un puerto válido.
export const envs = {
    PORT: envvar.get('PORT').required().asPortNumber(),
    PUBLIC_PATH: envvar.get('PUBLIC_PATH').default('public').asString()
}

/*
module.exports = {
    envs
}*/