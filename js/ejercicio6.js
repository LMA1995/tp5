/* Realizar una web con un temporizador donde el usuario pueda ingresar un tiempo desde donde comenzará a decrementar el contador. Debe contener los botones, iniciar, pausar y reset. 
*/

const pantalla=document.getElementById('pantalla')
const tiempo=document.getElementById('tiempo')
const boton=document.getElementById('btn-enviar')
const form=document.getElementById('formulario')
let intervalo=null;
let tiempoRestante=0;
function mostrarTiempo()
{
  


}
form.addEventListener('submit', function(e)
{
   e.preventDefault();
   const valorIngresado=document.getElementById('tiempoIngresado').value;

    if(valorIngresado>0)
     
   {
      tiempoRestante=parseInt(valorIngresado);
      tiempo.textContent=tiempoRestante;
   }
   else
   {
      alert('Ingresaste un valor erroneo')
   }
});
function iniciar()
{
   if(intervalo===null)
   {
      intervalo=setInterval(()=>
      {
         if(tiempoRestante>0)
         {
             tiempoRestante--;
        tiempo.textContent=tiempoRestante;
         }
         else
         {
            clearInterval(intervalo);
            intervalo=null;
         }
        

      },1000)
   }
}
function pausarTiempo ()
{
   clearInterval(intervalo);
   intervalo=null;
}
function resetearTiempo()
{
   tiempoRestante=0;
   tiempo.textContent=tiempoRestante;
   form.reset();
}
document.getElementById('inicio').addEventListener('click', iniciar)
document.getElementById('pausa').addEventListener('click', pausarTiempo)
document.getElementById('reinicio').addEventListener('click', resetearTiempo)
