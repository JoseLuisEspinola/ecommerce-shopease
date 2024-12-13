
function cerrarSesion() {
    auxUsuario = usuarioLogueado.usuario;
    localStorage.removeItem("usuarioLogueado");
    alert("Adios" + " " + auxUsuario + " " + "..." + '\n' + "La sesion fue cerrada con éxito!!!");
    // Redirigir a la página de inicio de sesión o cualquier otra página deseada
    window.location.href = "index.html";   /* Anule el redireccionamiento a index.html */
}








