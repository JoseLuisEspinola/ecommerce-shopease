function validarFormulario(event) {
    event.preventDefault();

    // Obtener los valores de los campos
    const nombreRes = document.getElementById('nombre-res').value.trim();
    const comentarioRes = document.getElementById('comentario-res').value.trim();
    const fechaActual = new Date().toLocaleString(); // Fecha y hora actual en formato local

    // Validar los campos
    const errores = [];
    if (!nombreRes) {
        errores.push('Debe ingresar su nombre!.');
    }
    if (!comentarioRes) {
        errores.push('Debe ingresar un comentario!.');
    }

    if (errores.length > 0) {
        alert(errores.join('\n'));
        return;
    }

    // Crear el objeto de la reseña
    const nuevaResena = {
        nombre: nombreRes,
        comentario: comentarioRes,
        fecha: fechaActual,
    };

    // Guardar la reseña en localStorage
    let resenas = JSON.parse(localStorage.getItem('resenas')) || [];
    resenas.unshift(nuevaResena); // Añadir al inicio
    localStorage.setItem('resenas', JSON.stringify(resenas));

    // Actualizar la interfaz
    agregarTarjetaResena(nuevaResena);

    // Limpiar los campos del formulario
    document.getElementById('nombre-res').value = '';
    document.getElementById('comentario-res').value = '';
    document.getElementById('nombre-res').focus();
}

// Función para agregar una tarjeta de reseña
function agregarTarjetaResena(resena) {
    const nuevaTarjeta = document.createElement('div');
    nuevaTarjeta.classList.add('card-resenas');

    const nuevoTitulo = document.createElement('h3');
    nuevoTitulo.classList.add('card-title-resenas');
    nuevoTitulo.textContent = `- ${resena.nombre} -`;

    const nuevaDescripcion = document.createElement('p');
    nuevaDescripcion.classList.add('card-description-resenas');
    nuevaDescripcion.style.fontStyle = 'italic'; // Opcional: estilo cursiva
    nuevaDescripcion.textContent = resena.comentario;

    const nuevaFecha = document.createElement('p');
    nuevaFecha.classList.add('card-fecha-resenas');
    nuevaFecha.textContent = `Fecha: ${resena.fecha}`;

    // Agregar elementos a la tarjeta
    nuevaTarjeta.appendChild(nuevoTitulo);
    nuevaTarjeta.appendChild(nuevaDescripcion);
    nuevaTarjeta.appendChild(nuevaFecha);

    // Agregar la tarjeta al contenedor
    const contenedorTarjetas = document.querySelector('.container-cards');
    contenedorTarjetas.prepend(nuevaTarjeta);
}

// Cargar reseñas desde localStorage al iniciar
function cargarResenas() {
    const resenas = JSON.parse(localStorage.getItem('resenas')) || [];
    resenas.forEach(agregarTarjetaResena);
}

// Escuchar el evento submit del formulario
document.getElementById('form-resenas').addEventListener('submit', validarFormulario);

// Cargar las reseñas existentes al cargar la página
cargarResenas();
