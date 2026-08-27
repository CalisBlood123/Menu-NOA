console.log("Hello World")

let listaSuper = [
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
        tipo: "comun",
        cantidad: 72
    }
]

//Metodos forEach
//Metodo funcion común

listaSuper.forEach(
    function (items) {
        const name = (4 ** 4);
        console.log(name);
    }
)

//Filter (Se usa bastante)
//return es un indicador de lo que tiene que retornar
//se tiene que guardar en una constante

const cantidadMenores = listaSuper.filter(
    function(lista){
        return lista.cantidad > 2;
    }
)

console.log(cantidadMenores)

//Metodo Map
//Ejemplo: tocar el array base con el item que defina

listaSuper.map (
    function(compra){
        compra.precio = 100;
        compra.precio = compra.precio + 50;
        return compra;
    }
)

console.log(listaSuper)

//DOM (Document Object Model)
//DOM JAVASCRIPT

console.log(document);

const inputEmail = document.getElementById("email");
const inputPassword = document.getElementById("password");

const login = () => {
    console.log(inputEmail.value);
    console.log(inputPassword.value);
}