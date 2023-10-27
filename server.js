import express from 'express'
import RouterNumeros from './router/numeros.js'

const app = express()
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
app.use(express.json())

const routerNumeros = new RouterNumeros()

/* ------------------------------------------------------------- */
/*             ZONA DE RUTAS MANEJADAS POR EL ROUTER             */
/* ------------------------------------------------------------- */
app.use('/numeros', routerNumeros.start())

/* ------------------------------------------------------------- */
/*                      Servidor LISTEN                          */
/* ------------------------------------------------------------- */
const PORT = 8080
const server = app.listen(PORT, 
    () => console.log(`Servidor express escuchando en http://localhost:${PORT}`)
)
server.on('error', error => console.log('Servidor express en error:', error) )
