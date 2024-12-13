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
    // localeCompare() devuelve:
    // Un número negativo si la primera cadena precede a la segunda.
    // Un número positivo si la primera cadena sigue a la segunda.
    // Cero si las cadenas son iguales.
    const usuarioEncontrado = usuariosGuardados.find(user => 
        user.usuario.localeCompare(usuario) === 0 && 
        user.clave.localeCompare(clave) === 0
    );

    if (usuarioEncontrado) {
        alert("¡Bienvenido!... " + usuarioEncontrado.usuario + '\n' +"Inicio de sesión exitoso!");

        // Aquí agregas la línea para guardar el usuario logueado
        localStorage.setItem('usuarioLogueado', JSON.stringify(usuarioEncontrado));

        // Determinar a dónde redirigir después del login
        const paginaOrigen = localStorage.getItem('paginaOrigen') || "index.html";
        localStorage.removeItem('paginaOrigen'); // Limpiar la referencia de origen
        window.location.href = paginaOrigen; // Redirige a la página correspondiente
    } else {
        errores.push("Usuario o contraseña incorrectos.");
        alert(errores.join("\n"));
    }
}

// Función para establecer la página de origen en localStorage
function establecerPaginaOrigen() {
    const urlParams = new URLSearchParams(window.location.search);
    const origen = urlParams.get('origen');

    if (origen) {
        localStorage.setItem('paginaOrigen', origen);
    }
}

// Event listener al formulario "escuchar" el evento submit del boton
document.getElementById("form-login").addEventListener("submit", validarFormulario);

// Establecer la página de origen al cargar login.html
establecerPaginaOrigen();
