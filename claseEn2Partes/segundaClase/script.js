const nombreInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const edadInput = document.getElementById("age")

// event y event.preventDefault() recordar para evitar que la pagina se recargue cada que usamos un boton ya que por defecto se recarga la pagina

// recordar poner return

// es recomendable mostrar todos los errores para que no se frustre el usuario

//json es el archivo de texto que javascript puede leer, convertimos la respuesta en un .json

//buscar lo que es y para que sirve async (asincronico), await (eso es de la clase pasada) y fetch (tambien de la clase pasada)

// de la linea 40-51 usamos .map para extrar todos los emails del .json en una constante emailUsers

// de la linea 55-59 se filtran todos los emails que conisidan con lo que agrego el usuario llas cuales ese valor se guado en la constante email y lo guarda en un nuevo array llamado emailUsers

// de la linea 63-65 busca si la condicion del array tiene un elemento o no y dependiendo de si es True o False ejecuta ya que mide el largo de el array para determinar si tiene conisidencias con el nuevo array creado emailFilter

const edadAceptable = 18

const registrarUsuario = async (event) => {

    event.preventDefault()

    const nombre = nombreInput.value;
    console.log(nombre);

    const edad = edadInput.value;
    console.log(edad);

    const email = emailInput.value;
    console.log(email);

    const password = passwordInput.value;
    console.log(password);

    const confirmPassword = confirmPasswordInput.value;
    console.log(confirmPassword);   

    const url = "https://jsonplaceholder.typicode.com/users";
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);

    const emailUsers = json.map(
        function (user) {
            return user.email
        }
    )

    console.log(emailUsers)

    const emailFilter = emailUsers.filter(
        function (emailDB) {
            return emailDB === email
        }
    )

    if (emailFilter.length > 0) {
        console.error("no te podes registrar")
    }

    console.log(emailFilter)

    if (password !== confirmPassword){
        alert("las contraseñas son distintas");
        console.log("las contraseñas son distintas");
        return;
    }

    if (edad < edadAceptable) {
        console.error(edad, "años no es edad sufficiente para registrarse");
        return;
    }

    localStorage.setItem("emailUsuario", email)
    window.location.href = "bienvenida.html";

}

// lo que hace esta parte de abajo es ejecutar el if cada que se entre a la pagina y recien se ejecuta la funcion de validarRegistro() 

const validarRegistro = () => {
    const userRegistrado = localStorage.getItem("emailUsuario");

    if (userRegistrado) {
        window.location="bienvenida.html";
    }
}

if (window.location.pathname !== "/bienvenida.html") {
    validarRegistro();
}

// lo que simplemente hace logout() es eliminar el local storage y enviarte otra vez al index.html

const logout = () => {
    localStorage.clear();
    window.location.href = "index.html"
}