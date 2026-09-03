const email = document.getElementById("email");

//oninput (para que se actualize a medida que cambia) onchange (para que cambie al sacar el focus) onclick (para que cambie cada que se le de click)

//event.preventDefault (event puede ser cualquier nombre) (preventDefault es para quitar la accion que tiene por defecto, un boton en el input funciona como submit por defecto)

const darDato = (event) => {
    event.preventDefault();

    const emailData = email.value;
    console.log(emailData);
}