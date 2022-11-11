// Guardo mi formulario en una constante
const calculadoraDePropinas = document.getElementById("miFormulario");

//Funcion para calcular la propina
calculadoraDePropinas.addEventListener("submit", (event) => {

    event.preventDefault();
    class Persona {

        constructor(nombre,apellido) {
            this.nombre = nombre.toUpperCase();
            this.apellido = apellido.toUpperCase();
        }

        // Funcion para mostrar en pantalla el nombre y apellido del usuario. 
        saludar() {
            if (this.nombre == "" && this.apellido == "") {
                document.getElementById('saludo').innerHTML = "";
            } else {
                document.getElementById('saludo').innerHTML = `HOLA  ${this.nombre}  ${this.apellido}`;
            }
        }
    }

    const NombreYApellido = new Persona(document.getElementById('nombre').value, document.getElementById('apellido').value);
    NombreYApellido.saludar();

    //Obtener datos
    let totalCompra = document.getElementById('box1').value;
    let porcentajePropina = document.getElementById('box2').value;
    let totalPersonas = document.getElementById('box3').value;

    //Formulas
    const porcentaje = porcentajePropina / 100;
    const resultado1 = totalCompra * porcentaje;
    const resultado2 = resultado1 / totalPersonas;

    // Uso de localStorage para guardar el calculo de propina en el navegador. 
    localStorage.setItem("calculoPropina", resultado1);
    totalPropina = JSON.parse(localStorage.getItem("calculoPropina"));
    
    if (totalCompra == "") {
        document.getElementById('r3').innerHTML = "INTRODUZCA TODOS LOS DATOS";
        document.getElementById('r1').innerHTML = ":(";
        document.getElementById('r2').innerHTML = ":(";
    } else {
        //Respuestas
        document.getElementById('r1').innerHTML = totalPropina.toFixed(2);
        document.getElementById('r2').innerHTML = resultado2.toFixed(2);
    }
});

// Utilización de la libreria Luxon para mostrar el año en el cual fue creada esta app. 
const DateTime = luxon.DateTime;
const hoy = DateTime.now();

document.getElementById('anio').innerHTML = hoy.year;
