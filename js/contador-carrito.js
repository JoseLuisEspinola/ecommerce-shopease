// Función para actualizar el número del carrito
function actualizarNumeroCarrito() {
    let usuarioLogueado = JSON.parse(localStorage.getItem('usuarioLogueado')) || null;
  
    if (!usuarioLogueado) return; // Si no hay usuario logueado, no actualizamos el contador
  
    // Recuperamos el carrito del usuario logueado
    const carrito = JSON.parse(localStorage.getItem(`carrito_${usuarioLogueado.usuario}`)) || [];
    const totalItems = carrito.reduce((total, producto) => total + producto.quantity, 0);
    
    const contadorCarrito = document.querySelector('.fa-cart-shopping span');
    if (contadorCarrito) {
      contadorCarrito.textContent = totalItems;
    }
  }
  
  // Actualiza el número al cargar la página
  document.addEventListener('DOMContentLoaded', () => {
    actualizarNumeroCarrito();
  });
  
  // Escucha cambios en localStorage (si aplica)
  window.addEventListener('storage', actualizarNumeroCarrito);
  