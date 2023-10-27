class NumerosMem {

    constructor() {
        this.numeros = [
             {
                "numero" : 1,
            },
            {
                "numero" : 2,
            },
            {
                "numero" : 3,
            },
            {
                "numero" : 4,
            } 
        ]
    }

    obtenerNumeros = async () => {
        try {
            return this.numeros
        }
        catch(error) {
            console.log('error en obtenernumeros', error)
            return []
        }
    }


    guardarNumero = async numero => {
        try {
            const numeroNuevo = {"numero": Number(numero.numero)}
            this.numeros.push(numeroNuevo)

            return numero
        }
        catch(error) {
            console.log('error en guardarNumero:',error)
            let numero = {}

            return numero
        }
    }
}

export default NumerosMem