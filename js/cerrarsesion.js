let usuarioLogueado = JSON.parse(localStorage.getItem('usuarioLogueado')) || null;

function cerrarSesion() {
    auxUsuario = usuarioLogueado.usuario;
    localStorage.removeItem("usuarioLogueado");
    alert(`Adiós ${auxUsuario}...\nLa sesión fue cerrada con éxito!!!`); // Mostramos un mensaje personalizado
    // Redirigir a la página de inicio de sesión o cualquier otra página deseada
    window.location.href = "index.html";   /* Anule el redireccionamiento a index.html */
}







