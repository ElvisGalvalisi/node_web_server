require('dotenv').config() //para que se seteen las variables de entorno en el objeto PROCESS y esten disponibles.

const { get } = require('env-var'); //para darle propiedades a las variables de entorno. number, portNumber

//creamos un objeto con las variables
//get: va a tomar las variable de entorno seteada en .env
//required: va a ser requerida. Si no está, no ingresa. 
//asPortNumber: para que se identifique como un puerto válido.
const envs = {
    PORT: get('PORT').required().asPortNumber(),
    PUBLIC_PATH: get('PUBLIC_PATH').default('public').asString()
}


module.exports = {
    envs
}