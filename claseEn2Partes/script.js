

const nombreInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const edadInput = document.getElementById("age")

// event y event.preventDefault() recordar para evitar que la pagina se recargue cada que usamos un boton ya que por defecto se recarga la pagina

// recordar poner return

// es recomendable mostrar todos los errores para que no se frustre el usuario

const edadAceptable = 18

const registrarUsuario = (event) => {

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