/*Crea una web con bootstrap y js, que contenga un botón input donde se pueda cargar una tarea y un botón que al ser presionado agregue dicha tarea a una lista, cada elemento ingresado en la lista debe poder ser eliminado con un botón creado para ese fin. 
*/

const formulario = document.getElementById('formulario');
const input = document.getElementById('tareaInput');
const lista = document.getElementById('lista');


formulario.addEventListener('submit', (e) => { // Evento para agregar tarea y evitar que la pagina se recargue perdiendo el valor ingresado
    e.preventDefault();

    const tarea = input.value.trim(); // con el .trim() elimino los espacios en blanco al iniico y final de un string

    // Validación
    if (tarea === '') return;

    // Crear elemento li
    const li = document.createElement('li');
    li.className = 'list-group-item d-flex justify-content-between align-items-center';

    
    li.innerHTML = `
        <span>${tarea}</span>
        <button type="button" class="btn btn-danger btn-sm">Eliminar</button>
    `; //con esta porcion agrego el texto al li que quiero insertar en su nodo padre (texto + botón)

    
    const botonEliminar = li.querySelector('button');// Evento para eliminar tarea,mediante el selector de etiquetas elijo el button que se agrega al li y le asigno el evento click y le paso la funcion flecha para remover la tarea
    botonEliminar.addEventListener('click', () => {
        li.remove();
    });

    // Agregar tarea a la lista
    lista.appendChild(li);

    // Limpiar formulario
    formulario.reset();
});
