// Obtener los usuarios guardados de localStorage (si existen)
let usuariosGuardados = JSON.parse(localStorage.getItem('usuarios')) || [];

// Función para validar el formulario
function validarFormulario(event) {
    event.preventDefault(); // Evitar el envío del formulario

    // Validar los campos: capturo el valor de los campos
    const usuario = document.getElementById("username").value;
    const clave = document.getElementById("password").value;

    var errores = []; 

    if (usuario.trim() === "") {
        errores.push("Por favor, ingrese su Nombre de Usuario.");
    }

    if (clave.trim() === "") {
        errores.push("Por favor, ingrese su Password.");
    }


    // Mostrar mensajes de error si la longitud es mayor a cero
    if (errores.length > 0) {
        alert(errores.join("\n"));
        return; // Detener el envío del formulario si hay errores, osea que se retorna
    }


    // Buscar al usuario en la lista de usuarios guardados
    //const usuarioEncontrado = usuariosGuardados.find(user => user.usuario.toLowerCase() === usuario && user.clave === clave);

    // localeCompare() devuelve:
    // Un número negativo si la primera cadena precede a la segunda.
    // Un número positivo si la primera cadena sigue a la segunda.
    // Cero si las cadenas son iguales.
    const usuarioEncontrado = usuariosGuardados.find(user => 
        user.usuario.localeCompare(usuario) === 0 && 
        user.clave.localeCompare(clave) === 0
    );

    if (usuarioEncontrado) {
        // Si el usuario y la contraseña coinciden
        alert("Inicio de sesión exitoso!");
        // Aquí podrías redirigir a otra página o realizar otras acciones
        window.location.href = "index.html"; // Redirige a index.html
    } else {
        errores.push("Usuario o contraseña incorrectos.");
        alert(errores.join("\n"));
    }
}

// Event listener al formulario "escuchar" el evento submit del boton
document.getElementById("form-login").addEventListener("submit", validarFormulario);
