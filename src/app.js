const { envs } = require('./config/env.js');
const { startServer } = require('./server/server.js')


//funcion que se crea para luego autollamarse
const main = () => {
    startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })
}


//funcion agnóstica autoconvocada asincrona 
//agnostica porque no tiene noombre
//autoconvocada porque se ejecuta con los paréntesis agregados al final.
(async() =>{
    main()
})()
