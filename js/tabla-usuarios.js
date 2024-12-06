document.addEventListener('DOMContentLoaded', () => {
    // Get the users from localStorage
    const usuariosGuardados = JSON.parse(localStorage.getItem('usuarios')) || [];
  
    if (Array.isArray(usuariosGuardados)) {
        const tablaUsuarios = document.getElementById('tabla-usuarios');
        const tbody = tablaUsuarios.querySelector('tbody');
  
        usuariosGuardados.forEach(usuario => {
            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td>${usuario.nombre}</td>
                <td>${usuario.usuario}</td>
                <td>${usuario.clave}</td>
                <td>
                  <button class="modificar">Modificar</button>
                  <button class="eliminar">Eliminar</button>
                </td>
            `;
            tbody.appendChild(fila);
        });
    } else {
        alert('Error: Los datos almacenados en localStorage no son válidos.');
    }
  
    // Add event listeners to the table
    tablaUsuarios.addEventListener('click', (event) => {
        const target = event.target;
  
        if (target.classList.contains('modificar')) {
          // Get the row data
          const row = target.closest('tr');
          const nombre = row.cells[0].textContent;
          const usuario = row.cells[1].textContent;
          const clave = row.cells[2].textContent;
  
          // Open a modal or form to edit the user data
          // ... (your modal or form code here)
          // Update the localStorage and table after successful modification
        } else if (target.classList.contains('eliminar')) {
              // Get the row data
              const row = target.closest('tr');
              const usuarioEliminar = row.cells[1].textContent;
  
              // Confirm the deletion
              if (confirm(`¿Seguro que desea eliminar a ${usuarioEliminar}?`)) {
                  // Remove the user from localStorage
                  usuariosGuardados = usuariosGuardados.filter(usuario => usuario.usuario !== usuarioEliminar);
                  localStorage.setItem('usuarios', JSON.stringify(usuariosGuardados));
        
                  // Remove the row from the table
                  row.remove();
            }
        }
    });
});