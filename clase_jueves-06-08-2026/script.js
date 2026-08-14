console.log("Hello World")

const mayorQue = 5 > 6
const menorQue = 10 < 12
const mayorOIgualQue = 10 >= 1
const menorOIgualQue = 4 <= 7
const igual = 2 == 2
const estrictamenteIgual = 4 === 4
const diferente = 3 != 4
const estrictamenteDiferente = 6 !== 7

console.log(estrictamenteIgual)

const edadParaConducir = 18
const edadRandom = 20

if (edadRandom > edadParaConducir) {
    console.log("puedes conducir")
} else if (edadRandom === edadParaConducir) {
    console.warn("solo con autorizacion")
} else {
    console.error("no puedes")
}

// funciones clasicas
function nombreFuncion () {
    alert("apretaste ese boton verde")
}

//funcion flecha

const img = () => {
    alert("foto gato")
}

const funcionFlecha = () => {
    alert("apretaste ese boton verde")
}

const link = () => {
    alert("soy un link")
}