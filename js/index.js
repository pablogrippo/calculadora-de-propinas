// Guardo mi formulario en una constante
const calculadoraDePropinas = document.getElementById("miFormulario");

// Guardo mi contenedor en una constante
const contenedor = document.getElementById("contenedor");

// Creando una clase Persona. 
class Persona {

    constructor(nombre,apellido) {
        this.nombre = nombre.toUpperCase();
        this.apellido = apellido.toUpperCase();
    }

    // Funcion para mostrar en pantalla el nombre y apellido del usuario. 
    saludar() {
        if (this.nombre === "" && this.apellido === "") {
            document.getElementById('saludo').innerHTML = "";
        } else {
            document.getElementById('saludo').innerHTML = `HOLA  ${this.nombre}  ${this.apellido}`;
        }
    }
}

function bloquearBoton (bloqueado = true) {

    const boton = document.getElementById("btn_calcular");

    if(bloqueado) {
        boton.disabled = "true";
    } else {
        boton.disabled = "";
    }
}

//Funcion para calcular la propina
calculadoraDePropinas.addEventListener("submit", (event) => {

    event.preventDefault();

    const nombreYApellido = new Persona(document.getElementById('nombre').value, document.getElementById('apellido').value);
    nombreYApellido.saludar();

    //Obtener datos
    let totalCompra = document.getElementById('box1').value;
    let porcentajePropina = document.getElementById('box2').value;
    let totalPersonas = document.getElementById('box3').value;

    //Formulas
    const porcentaje = porcentajePropina / 100;
    const resultado1 = totalCompra * porcentaje;
    const resultado2 = resultado1 / totalPersonas;

    // Uso de localStorage para guardar el calculo de propina en el navegador. 
    localStorage.setItem("calculoPropina", porcentaje);
    calculoUltimaPropina = JSON.parse(localStorage.getItem("calculoPropina"));    

    function enviarFormulario(totalCompra, porcentajePropina, totalPersonas) {

        return new Promise( (resolve, reject) => {
    
            // Bloqueo del boton
            bloquearBoton();
    
            const random = Math.round(Math.random()); 
    
            setTimeout( () => {
    
                if(random === 1) {
                    resolve("Mensaje enviado con éxito");
                } else {
                    reject("Error en el servidor");
                }
            }, 1000);
        });
    }

    // Envio del formulario mediante un request 
    enviarFormulario(totalCompra, porcentajePropina, totalPersonas).then( (mensaje) => {

            contenedor.innerHTML = `<strong style="color: green">${mensaje}</strong>`;

            // Oculto el formulario
            miFormulario.style.display = "none"; 

        }).catch( (errorFormulario) => {

            contenedor.innerHTML = `<strong style="color: red">${errorFormulario}</strong>`

            document.getElementById('nombre').value = "";
            document.getElementById('apellido').value = "";
            document.getElementById('box1').value = "";
            document.getElementById('box2').value = "";
            document.getElementById('box3').value = "";

        }).finally( () => {

            bloquearBoton(false);

        });

    if (totalCompra === "") {
        document.getElementById('r3').innerHTML = "INTRODUZCA TODOS LOS DATOS";
        document.getElementById('r1').innerHTML = ":(";
        document.getElementById('r2').innerHTML = ":(";
    } else {
        //Resultados.
        document.getElementById('r1').innerHTML = resultado1.toFixed(2); 
        document.getElementById('r2').innerHTML = resultado2.toFixed(2);
        document.getElementById('r4').innerHTML = calculoUltimaPropina.toFixed(2) + "%"; // Mostrar la última propina por pantalla. 
    }
});

// Utilización de la libreria Luxon para mostrar el año en el cual fue creada esta app.
const dateTime = luxon.DateTime;
const hoy = dateTime.now();
 
setTimeout( () => {
    document.getElementById('anio').innerHTML = hoy.year;
}, 500)

