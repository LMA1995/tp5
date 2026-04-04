/*Crea una web con bootstrap y js, que contenga un botón comenzar el juego, en ese momento se crea un número aleatorio que el usuario deberá adivinar, la interfaz del usuario debe tener además un input para ingresar un número y un botón enviar, al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico, si no lo adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico.
Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero.*/
let numeroMagico;
const botonComenzar=document.getElementById('btn-iniciar');
const formulario=document.getElementById('formulario')
document.getElementById('btn-iniciar').addEventListener('click', () => {numeroMagico = Math.floor(Math.random() * 10) +1;
    console.log(numeroMagico);
    formulario.classList.remove('d-none');
});
const envioFormulario =(e)=> //con esta funcion evito que la pagina recargue y puedo ver el valor en consola del numero ingresado
{
    e.preventDefault()
    const numeroIngresado = parseInt(document.getElementById('numIngresado').value);
console.log(typeof numeroIngresado);
if(isNaN (numeroIngresado))
{
alert('Ingresa un numero valido');
}
compararNumeros(numeroIngresado);

}
function compararNumeros(numeroIngresado)
{
    if(numeroMagico===numeroIngresado)
    {
        alert('Genial Acertaste');
            formulario.classList.add('d-none');
            botonComenzar.textContent='Jugar de nuevo';
            

    }
    else if(numeroMagico>numeroIngresado)
    {
        alert('Intentalo de nuevo el numero ingresado es menor al numero magico');
    }
    else
    {
        alert('El numero ingresado es mayor al numero magico');
    }
    formulario.reset();
}
formulario.addEventListener('submit',envioFormulario);

