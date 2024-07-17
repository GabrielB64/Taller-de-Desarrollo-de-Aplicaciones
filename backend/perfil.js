

document.addEventListener('DOMContentLoaded', () =>{
    const nombre = 'Gabriel Bustamante';
    const card = document.getElementById('tarjetaPerfil')

    function llenarDatos(nombre){
        const tituloNombre = document.createElement('h1');
        tituloNombre.textContent = nombre;
        
    }

    llenarDatos(nombre);
});