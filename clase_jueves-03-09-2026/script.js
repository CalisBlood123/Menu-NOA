//const email = document.getElementById("email");

//oninput (para que se actualize a medida que cambia) onchange (para que cambie al sacar el focus) onclick (para que cambie cada que se le de click)

//event.preventDefault (event puede ser cualquier nombre) (preventDefault es para quitar la accion que tiene por defecto, un boton en el input funciona como submit por defecto)

//onsubmit="darDato(event)"

const darDato = (event) => {
    event.preventDefault();

    const emailData = email.value;
    console.log(emailData);
}

//ALMACENAMIENTO EN EL NAVEGADOR

//LOCAL STORAGE

const email = document.getElementById("email");
const pass = document.getElementById("password");

const guardarLocal = () => {
    const emailData = email.value;
    const passData = pass.value;

    localStorage.setItem("emailUsuario", emailData);
    localStorage.setItem("passlUsuario", passData);
}

//esto se guarda en aplicaciones/almacenamientoLocal (localStorage.setItem("clave", valor))