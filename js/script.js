alert("Esta es mi aplicacion para calcular propinas")

// Funcion para calcular la propina
function calcularPropina() {
    
    // Recopilar datos del usuario
    let totalCompra = parseInt(prompt("Ingrese el importe total a pagar"))
    let porcentajePropina = parseInt(prompt("Ingrese el porcentaje de la propina"))
    let totalPersonas = parseInt(prompt("Ingrese el total de personas"))

    // Formulas
    const porcentaje = porcentajePropina / 100
    const propinaTotal = totalCompra * porcentaje
    const propinaPorPersona = propinaTotal / totalPersonas

    if (!totalCompra) {
        console.log("No ingreso ningun dato")
    } else {
        console.log("El total de la propina es: $ " + propinaTotal.toFixed(2) + " y la propina por persona es de: $ " + propinaPorPersona.toFixed(2))
    }

    while(porcentaje != "") {
        console.log("El porcentaje ingresado es de: " + porcentaje.toFixed(2) + "%")   
        break
    }

}

calcularPropina()