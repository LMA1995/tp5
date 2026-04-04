const pantalla = document.getElementById('pantalla');
const formulario = document.getElementById('formAlta');

let persona; // variable global

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    persona = {
        nombre: document.getElementById('nombrePersona').value,
        apellido: document.getElementById('apellidoPersona').value,
        anioNac: parseInt(document.getElementById('anioNac').value),
        dni: parseInt(document.getElementById('dniPersona').value),

        esMayorDeEdad() {
            const edad = new Date().getFullYear() - this.anioNac;
            return edad >= 18 
                ? `Edad: ${edad} - Mayor de edad ✅`
                : `Edad: ${edad} - Menor de edad ❌`;
        },

        mostrarGeneracion() {
            if(this.anioNac >=2025 && this.anioNac<=2039)
            {
                return '🧬 Adaptabilidad'
            }
            else if(this.anioNac >=2011 && this.anioNac<=2024)
            {
                return '📱 Hiperconectividad'
            }
            else if (this.anioNac >= 1994 && this.anioNac <= 2010) {
                return "Generación Z - Irreverencia 🤪";
            } else if (this.anioNac >= 1981 && this.anioNac <= 1993) {
                return "Generación Y - Frustración 🥶";
            } else if (this.anioNac >= 1969 && this.anioNac <= 1980) {
                return "Generación X - Éxito 😎";
            } else if (this.anioNac >= 1949 && this.anioNac <= 1968) {
                return "Baby Boom - Ambición 🤑";
            } else if (this.anioNac >= 1930 && this.anioNac <= 1948) {
                return "Silent Generation - Austeridad 😐";
            } else {
                return "Generación no definida";
            }
        },

        mostrarDatos() {
            return `
                <h2>Datos de la persona</h2>
                <p>Nombre: ${this.nombre}</p>
                <p>Apellido: ${this.apellido}</p>
                <p>DNI: ${this.dni}</p>
                <p>Año de nacimiento: ${this.anioNac}</p>
            `;
        }
    };

    pantalla.innerHTML = persona.mostrarDatos();
    formulario.reset();
});
document.getElementById('btnMostrarGeneracion').addEventListener('click', () => {
    if (persona) alert(persona.mostrarGeneracion());
});

document.getElementById('btmMostrarEdad').addEventListener('click', () => {
    if (persona) alert(persona.esMayorDeEdad());
});