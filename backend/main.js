function authUser(){

    const resultado = true;
    if(resultado){
        window.location.href = '../frontend/admin.html';
    }
}


    
document.addEventListener('DOMContentLoaded', (event) => {

    //TODO Interacción con .JSON
    const data = [
        {Nombre: 'Gabriel', Apellido: 'Bustamante'}
    ];

    // Creación de tabla con nombre, apellido y botón
    function popularTabla (data) {
        const tableBody = document.getElementById('cuerpoTablaAdmin');
        data.forEach(item => {
            const row = document.createElement('tr');

            const celdaNombre = document.createElement('td');
            celdaNombre.textContent = item.Nombre;
            row.appendChild(celdaNombre);

            const celdaApellido = document.createElement('td');
            celdaApellido.textContent = item.Apellido;
            row.appendChild(celdaApellido);

            const celdaBoton = document.createElement('td');
            const button = document.createElement('button');
            button.textContent = 'Editar';
            button.className  = 'btn btn-primary';
            button.addEventListener('click', () => {
                //TODO Codigo para editar entrada
            });
            celdaBoton.appendChild(button);
            row.appendChild(celdaBoton);

            tableBody.appendChild(row);
        });
    }

    popularTabla(data);
})