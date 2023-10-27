import ServicioNumeros from '../servicio/numeros.js'

class ControladorNumeros {

    constructor() {
        this.servicioNumeros = new ServicioNumeros()
    }

    obtenerNumeros = async (req,res) => {
        try {
            const numeros = await this.servicioNumeros.obtenerNumeros()

            res.send(numeros)
        }
        catch(error) {
            console.log('error obtenernumeros', error)
        }
    }

    obtenerPromedio = async (req,res) => {
        try {
            const promedio = await this.servicioNumeros.obtenerPromedioNumeros()
            res.json({promedio})
        }
        catch(error) {
            console.log('error obtenerPromedioTotal', error)
        }
    }


    obtenerCantidadnumeros = async (req,res) => {
        try {
            const cantidad = await this.servicioNumeros.obtenerCantidadNumeros()
            res.json({cantidad})
        }
        catch(error) {
            console.log('error obtenerCantidadnumeros', error)
        }
    }

    obtenerMinMax = async (req,res) => {
        try {
            const minMax = await this.servicioNumeros.obtenerMinMax()
            const minimo = minMax.min
            const maximo = minMax.max
            res.json({minimo , maximo})
        }
        catch(error) {
            console.log('error obtenerCantidadnumeros', error)
        }
    }



    guardarNumero = async (req,res) => {
        try {
            let numero = req.body
            //console.log(numero)
            let numeroGuardado = await this.servicioNumeros.guardarNumero(numero)
            res.redirect('/numeros/entrada')
            res.json(numeroGuardado)
        }
        catch(error) {
            console.log('error obtenernumeros', error)
        }
    }
}

export default ControladorNumeros
