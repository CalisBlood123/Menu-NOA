console.log("Hello")

// parametros

const problemas = (a, b, c) => {
    const mulResultado = a * b;
    const potenciaResultado = b ** c;
    const divResultado = a / c;
    console.log(divResultado);
    console.log(mulResultado);
    console.log(potenciaResultado);
}

problemas(6,5,2)

//caso de la vidda real NO TAN REAL :3

const login = (email, password) => {
    const nombreUsuario = email + " " + password;
    console.log(nombreUsuario)
}

const email = "ciruja2008@gmail.com"
const password = 123456789

login(email, password)

//ARRAYS

const array = [
    "leche",
    "pape higienico",
    "harina 000",
    "manteca",
    "queso"
]

console.log(array[0])

//OBJETOS

const computadora = {
    teclado: 1,
    mouse: 1,
    funcional: true,
    aptaParaCocinar: false,
    colorGabinete: "negro"
}

console.log(computadora.funcional)

//ARRAYS CON OBJETOS

const arrayConObjetos = [
    {
        objetoName: "string",
        objetoNumber: 2,
        objetoBoolean: true,
        objetoUndefined: undefined
    },

    {
        objetoName: "string",
        objetoNumber: 2,
        objetoBoolean: true,
        objetoUndefined: undefined
    },

    {
        objetoName: "string",
        objetoNumber: 2,
        objetoBoolean: true,
        objetoUndefined: undefined
    },

    {
        objetoName: "string",
        objetoNumber: 2,
        objetoBoolean: true,
        objetoUndefined: undefined
    }
]

console.log(arrayConObjetos)

// lista super, arrays con objetos

const listaSuper = [
    {
        producto: "leche",
        tipo: "deslactosada",
        cantidad: 1
    },

    {
        producto: "harina",
        tipo: "000",
        cantidad: 5
    },

    {
        producto: "papel higienico",
        tipo: "normal?",
        cantidad: 72
    }
]

console.log(listaSuper[0])
console.log(listaSuper[0].producto)
console.log(listaSuper[1])
console.log(listaSuper[1].producto)
console.log(listaSuper[2])
console.log(listaSuper[2].producto)

//TAREA: nombre, rol, hijos, cantidad Hijos, vive, tienen que ser 6 datos, asunto comision n°(numero de la comision) y el NOMBRE, con el link del repositorio, acceder un item dell array y a un objeto dentro del array