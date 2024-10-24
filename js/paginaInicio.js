function mostrarDetalle(valor) {
    //  redirigir al navegador a una nueva URL,Al asignarle un nuevo valor, estás diciendo que el navegador debe ir a esa nueva dirección.
    window.location.href = `./html/paginaBaseValores.html?valor=${valor}`;
}


// Script para mostrar/ocultar el menú en dispositivos móviles
const menuIcon = document.getElementById('menu-icon');
const menu = document.getElementById('navegador');

menuIcon.addEventListener('click', () => {
menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
});

















function abrirEnNuevaPestana(url) {
    // Abre la URL en una nueva pestaña
    window.open(url, '_blank');
}