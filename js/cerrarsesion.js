// Opcion 1
let usuarioActivo = JSON.parse(localStorage.getItem('usuarioLogueado')) || null;

function cerrarSesion() {
    if (usuarioActivo) {
        const auxUsuario = usuarioActivo.usuario;
        localStorage.removeItem("usuarioLogueado");
        alert(`Adiós ${auxUsuario}...\nLa sesión fue cerrada con éxito!!!`);
        window.location.href = "index.html";
    } else {
        alert("¡¡¡No hay NINGUN usuario logueado!!!.");
    }
}



// Opcion 2
/* if (typeof usuarioLogueado === 'undefined') {
    var usuarioLogueado = JSON.parse(localStorage.getItem('usuarioLogueado')) || null;
}

function cerrarSesion() {
    if (usuarioLogueado) {
        const auxUsuario = usuarioLogueado.usuario;
        localStorage.removeItem("usuarioLogueado");
        alert(`Adiós ${auxUsuario}...\nLa sesión fue cerrada con éxito!!!`);
        window.location.href = "index.html";
    } else {
        alert("¡¡¡No hay NINGUN usuario logueado!!!.");
    }
} */


