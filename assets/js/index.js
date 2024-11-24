// Precio inicial
const precio = 400000
const precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio.toLocaleString('es-CL')

// Elementos DOM
const cantidad = document.querySelector('.cantidad');
const valorTotal = document.querySelector('.valor-total');
const botones = document.querySelectorAll('button');

// Inicia total
valorTotal.innerHTML = '0';

// Event listeners botones
botones.forEach((boton, index) => {
    boton.addEventListener('click', () => {
        // botón index 0 aumentar; index 1 disminuir
        let cantidadActual = parseInt(cantidad.innerHTML);

        if (index === 0) {
            cantidadActual++;
        } else {
            cantidadActual = Math.max(0, cantidadActual - 1);
        }

        // Actualizar la cantidad mostrada
        cantidad.innerHTML = cantidadActual;

        // Calcular y actualizar el total
        const total = precio * cantidadActual;
        valorTotal.innerHTML = total.toLocaleString('es-CL');
    });
});