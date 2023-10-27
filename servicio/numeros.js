import NumerosMem from '../model/DAOs/numerosMem.js'

class ServicioNumeros {

    constructor() {
        this.numerosMem = new NumerosMem()
    }

    async obtenerNumeros() { 
        let numeros = await this.numerosMem.obtenerNumeros()
        return numeros
    }

    obtenerPromedioNumeros = async () => {
        const numeros = await this.numerosMem.obtenerNumeros()
        const suma = numeros.map(n => n.numero).reduce((acc, numero) => acc + numero, 0)
        console.log(suma / numeros.length);
        return suma / numeros.length
    }

    obtenerCantidadNumeros = async () => {
        const numeros = await this.numerosMem.obtenerNumeros()
        return numeros.length
    }



    obtenerMinMax = async () => {
        const numeros = await this.numerosMem.obtenerNumeros()
        const nums = numeros.map(n => n.numero)
        const min = Math.min(...nums)
        const max = Math.max(...nums)
        let minMax = {min, max}
        return minMax
    }


    async guardarNumero(numero) { 
        return await this.numerosMem.guardarNumero(numero) 
    }
}

export default ServicioNumeros
