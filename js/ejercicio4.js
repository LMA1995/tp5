
const actualizarReloj = ()=>
{
    const horaActual= new Date();
    const horas=String(horaActual.getHours()).padStart(2,'0') ;
    const minutos=String(horaActual.getMinutes()).padStart(2,'0') ;
    const segundos= String(horaActual.getSeconds()).padStart(2,'0');
    

    reloj.textContent =`${horas} : ${minutos} : ${segundos}`;
}


const mostrarFecha = () => {
    const ahora = new Date();

    const dia = ahora.getDate();
    const mes = ahora.getMonth();
    const anio = ahora.getFullYear();

    const meses = [
        'Enero', 'Febrero', 'Marzo', 'Abril',
        'Mayo', 'Junio', 'Julio', 'Agosto',
        'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];

    fechaElemento.textContent = `${dia} de ${meses[mes]} de ${anio}`;
};
const fechaElemento = document.getElementById('fecha');
const reloj=document.getElementById('reloj');

mostrarFecha();
actualizarReloj();
setInterval(actualizarReloj, 1000);