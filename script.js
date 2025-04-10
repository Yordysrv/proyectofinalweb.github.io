const cambio = document.getElementById('carrito');
const elementos1 = document.getElementById('lista-1');
const lista = document.querySelector('#lista-carrito tbody');
const vaciarcarritoBtn = document.getElementById('vaciar-carrito');

cargarEventlisteners();

function cargarEventlisteners() {
    elementos1.addEventListener('click', comprarElemento);
    cambio.addEventListener('click', eliminarElemento);
    vaciarcarritoBtn.addEventListener('click', vaciarCarrito);
}

function comprarElemento(e) {
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')) {
        const elemento = e.target.parentElement.parentElement; // Cambié esto para encontrar el padre adecuado
        leerDatosElemento(elemento);
    }
}

function leerDatosElemento(elemento) {
    const infoElemento = {
        imagen: elemento.querySelector('img').src,
        titulo: elemento.querySelector('h3').textContent,
        precio: elemento.querySelector('.precio').textContent,
        id: elemento.querySelector('a').getAttribute('data-id')
    }
    insertarCarrito(infoElemento);
}

function insertarCarrito(elemento) {
    const row = document.createElement('tr');
    
    row.innerHTML = `
     <td>
        <img src="${elemento.imagen}" width="100" />
     </td>
     <td>
        ${elemento.titulo}
     </td>
     <td>
        ${elemento.precio}
     </td>
     <td>
        <a href="#" class="borrar" data-id="${elemento.id}">x</a>
     </td>
    `;
    
    lista.appendChild(row);
}

function eliminarElemento(e) {
    e.preventDefault();
    let elemento,
        elementoId;
    if (e.target.classList.contains('borrar')) {
        e.target.parentElement.parentElement.remove();
        elemento = e.target.parentElement;
        elementoId = elemento.querySelector('a').getAttribute('data-id');
    }   
}

function vaciarCarrito() {
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
    return false;
    
}

