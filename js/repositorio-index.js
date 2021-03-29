var usuario_email = [];
var usuario_mensaje = [];

function enviar_datos() {

    var email = document.getElementById("emailContacto").value;
    usuario_email.push(email);
    var mensaje = document.getElementById("mensajeContacto").value;
    usuario_mensaje.push(mensaje);
    console.log("Email: " + email + "   Mensaje: " + mensaje);
}