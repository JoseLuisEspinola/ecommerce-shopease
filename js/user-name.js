document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar el elemento con la clase .text-login
    const textLoginElement = document.querySelector('.user-name');
    // Si usamos id, seria asi:
    //const textLoginElement = document.getElementById('user-name');

    if (textLoginElement) {
        let usuarioActivo = JSON.parse(localStorage.getItem('usuarioLogueado')) || null;
        textLoginElement.textContent = usuarioActivo.usuario;

        // Mostrar el valor actual
        //const currentValue = textLoginElement.textContent;
        //alert(`Valor actual: ${currentValue}`);

        // Mostrar la longitud del valor actual
        //const currentLength = currentValue.length;
        //alert(`Longitud del valor actual: ${currentLength}`);

        // Cambiar el valor a "cambiado"
        //textLoginElement.textContent = 'cambiado';

        // Mostrar el nuevo valor
        //const newValue = textLoginElement.textContent;
        //alert(`Nuevo valor: ${newValue}`);

        // Establecer opacidad a 1
        textLoginElement.style.opacity = 1;
    } else {
        // alert('¡¡¡No hay usuario logueado!!!.');
        // Establecer opacidad a 0
        textLoginElement.style.opacity = 0;
    }
});
