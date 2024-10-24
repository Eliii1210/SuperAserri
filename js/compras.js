function mostrarComprasRealizadas() {
    const comprasList = document.getElementById('compras-list');
    let comprasRealizadas = JSON.parse(localStorage.getItem('comprasRealizadas')) || [];
    const usuarioActual = localStorage.getItem('loggedInUser'); // Obtener el usuario que está logueado

    if (comprasRealizadas.length === 0) {
        comprasList.innerHTML = '<p>No se han realizado compras.</p>';
        return;
    }

    // Limpiar el contenido previo
    comprasList.innerHTML = '';

    // Filtrar sobre las compras realizadas para el usuario actual
    const comprasFiltradas = comprasRealizadas.filter(compra => compra.usuario === usuarioActual);

    // Iterar sobre las compras realizadas
    comprasFiltradas.forEach(compra => {
        const compraDiv = document.createElement('div');
        compraDiv.classList.add('compra');

        // Crear la lista de productos
        let productosHTML = '<ul>';
        compra.productos.forEach(item => {
            productosHTML += `<li>${item.name} - $${item.price} - Cantidad: ${item.quantity}</li>`;
        });
        productosHTML += '</ul>';

        // Insertar la lista de productos y el total en el div de compra
        compraDiv.innerHTML = `
            <h3>Compra realizada por ${compra.usuario} el ${compra.fecha}</h3>
            ${productosHTML}
            <p>Total: $${compra.total}</p>
        `;

        comprasList.appendChild(compraDiv);
    });
}

// Escuchar el evento DOMContentLoaded para mostrar las compras al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    const comprasList = document.getElementById('compras-list');
    if (comprasList) {
        mostrarComprasRealizadas();
    }
});