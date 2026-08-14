// OPERADORES DE COMPARACIÓN:
// OPERADOR DE MAYOR-MENOR: > y <
// OPERADOR DE IGUAL: ==
// OPERADOR DE ESTRICTAMENTE IGUAL: ===
// OPERADOR DE MENOR O IGUAL: <=
// OPERADOR DE MAYOR O IGUAL: >=
// OPERADOR DE DISTINTO: !=
// OPERADOR DE ESTRICTAMENTE DIFERENTE: !==
// RESULTADOS DE ESTAS COMPARACIONES: booleanos

const mayorMenor = 40 < 10
const igual = 10 == 11
const estrictamenteIgual = 10 === "10"
const operadorMenorOIgual = 40 <= 41
const operadorMayorOIgual = 41 >= 41
const distinto = 10 != "10"
const estrictamenteDistinto = 10 !== "10"
// console.warn(estrictamenteDistinto)

// CONDICIONALES IF - ELSE - sintaxis:
if (20 == 10) { //SI ESTA (CONDICION) SE CUMPLE
    console.log("OK"); //JS EJECUTA ESTO
} else { //SI NO SE CUMPLE LA CONDICIÓN
    console.error("NO"); //JS EJECUTA ESTO
}

//PROGRAMACIÓN DECLARATIVA
const edadParaManejar = 18;
const edadDeNahum = 25;
const edadGuillermo = 32;
const edadAhijada = 7;

if (edadParaManejar < edadAhijada) { //true o false
    console.log("SÍ, PUEDE MANEJAR");
} else {
    console.error("NO PUEDE MANEJAR")
}

const generoQuePasaGratis = "femenino";
const generoQuePaga = "masculino";
const profesoraGenero = "femenino";
const nahumGenero = "masculino";
const guillermoGenero = "masculino";

if (generoQuePasaGratis === nahumGenero) {
    alert("PASA GRATIS");
} else {
    confirm("DEBE PAGAR. ¿PAGÓ?");
}

//FUNCIONES clásica
function nombreDeLaFuncion () {
    alert("EY, SE EJECUTÓ LA FUNCIÓN");
    console.error("OJO, SE EJECUTÓ UNA FUNCIÓN")
}
//LLAMAR LA FUNCIÓN
nombreDeLaFuncion()