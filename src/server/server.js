//const express = require('express') //se instancia la librería (commonJS)
import express from 'express' //se instancia la librería

//const path = require('path') //propio de node para leer las carpetas del proyecto commonJS
import path from'path' //propio de node para leer las carpetas del proyecto

export const startServer = (options) => {
    //desestructuramos el puerto
    const {port, public_path = 'public'} = options
    
    const app = express()   //con esto se ejecuta express y se guarda en la variable app

    // para poder usar los middlewares se usa la palabra use(expres)
    app.use(express.static(public_path))  //static porque se van a usar los archivos del public mediante el middleware

    
    // * se puede reemplazar por cualquier clave que deseemos usar.
    // req: request (petición)
    //res: response (respuesta)
    //callback
    app.get('*', (req, res) => {
        const indexPath = path.join(__dirname + `../../../${public_path}/index.html`)
        
        res.sendFile(indexPath)  //se envia lo que está publico, en este caso index.html, ante un pedido al servidor.
    })

    //servidor disponibel
    app.listen(port, ()=>{
        console.log(`Escuchando en el puerto ${port}`)
    })

}
/*
module.exports = {
    startServer
}*/