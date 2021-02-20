// // ----------------------- CREDITOS - SLIDERS ----------------------- Ocultar la sección actual y mostrar la siguiente a partir de onclick (como slider) / Se puede optimizar con una única función que recorra un array de secciones a medida que se aprietan los botones, y que la función detecte el href del botón, llevándote al slide de ese href.

function slidePersonalCredit () {
    // Tomar sección vigente y darle class hiddenElement.
    document.getElementsByClassName("activeElement")[0].setAttribute("class", "hiddenElement");
    // Tomar botón active y darle class inactive.
    document.getElementsByClassName("active")[0].setAttribute("class", "inactive");
    // Tomar id de la sección seleccionada y darle class activeElement
    document.getElementById("credit_personal").setAttribute("class", "activeElement");
    // Tomar botón de la clase seleccionada y darle class active.
    document.getElementById("btn-credit_personal").setAttribute("class", "active");
}

function slidePrendarioCredit () {
    document.getElementsByClassName("activeElement")[0].setAttribute("class", "hiddenElement");
    document.getElementsByClassName("active")[0].setAttribute("class", "inactive");
    document.getElementById("credit_prendario").setAttribute("class", "activeElement");
    document.getElementById("btn-credit_prendario").setAttribute("class", "active");
}

function slideHipotecarioCredit () {
    document.getElementsByClassName("activeElement")[0].setAttribute("class", "hiddenElement");
    document.getElementsByClassName("active")[0].setAttribute("class", "inactive");
    document.getElementById("credit_hipotecario").setAttribute("class", "activeElement");
    document.getElementById("btn-credit_hipotecario").setAttribute("class", "active");
}

function slideEmpresarialCredit () {
    document.getElementsByClassName("activeElement")[0].setAttribute("class", "hiddenElement");
    document.getElementsByClassName("active")[0].setAttribute("class", "inactive");
    document.getElementById("credit_empresarial").setAttribute("class", "activeElement");
    document.getElementById("btn-credit_empresarial").setAttribute("class", "active");
}

// // ----------------------- SIMULADOR -----------------------
// // ----------------------- SIMULADOR - ASIGNA VARIABLES ----------------------- Al enviar formulario de simulación, asigna valores del formulario a distintas variables que luego son reutilizadas en funciones siguientes.

function asignarVariablesCredito() {
    tipoCredito = document.getElementById("tipoCredito").value
    monto = document.getElementById("monto").value
    cantidadCuotas = document.getElementById("cantidadCuotas").value
    if (document.getElementById("tipoCredito").value == "Personal") {
        tasaInteres = 1.65
    } else if (document.getElementById("tipoCredito").value == "Prendario") {
        tasaInteres = 1.60
    } else if (document.getElementById("tipoCredito").value == "Hipotecario") {
        tasaInteres = 1.55
    } else {
        tasaInteres = 1.50
    }
    valorCuotas = parseInt((monto*tasaInteres)/cantidadCuotas)
}

// // ----------------------- SIMULADOR - SLIDERS ----------------------- Ocultar la sección actual y mostrar la siguiente a partir de onclick (como slider) / Se puede optimizar con una única función que recorra un array de secciones a medida que se aprieta el botón de avanzar. La función de volver a simular debiese ser única, ocultando la sección que está activa y activando la sección simulador.
// Además de mover el slide, cada función ejecuta las tareas correspondientes a cada sección.

function calcularCuotas () {
    // Mueve slide
    document.getElementById("simulator-form").setAttribute("class", "hiddenElement");
    document.getElementById("simulator-form-response").setAttribute("class", "activeElement");
    // Asigna valores del formulario a variables que se utilizan luego.
    asignarVariablesCredito()
    // Forma string y lo imprime en un nodo
    let message = document.getElementById("simulator-form-response_message")
    message.innerHTML = "" 
    let contenido = document.createTextNode(`Para solicitar un crédito ${tipoCredito} por $${monto} a pagar en ${cantidadCuotas} cuotas, deberá pagar ${cantidadCuotas} cuotas de $${valorCuotas}.`)

    // Resetea el valor para que se imprima de nuevo con cada simulación

    message.appendChild(contenido)
    document.getElementById("simulator-form-response").insertBefore(message,document.getElementById("btn-contact-form"))
}

function solicitarCredito () {
    // Mueve slide
    document.getElementById("simulator-form-response").setAttribute("class", "hiddenElement");
    document.getElementById("contact-form").setAttribute("class", "activeElement");
    // Toma valores del formulario de simulación, forma string y lo imprime en un nodo
    let message = document.getElementById("creditQuery-data")
    message.innerHTML = ""
    let content = document.createTextNode(`Tipo de crédito: ${tipoCredito}
    Monto: $${monto}
    Costo: ${cantidadCuotas} cuotas de $${valorCuotas}`);
    message.appendChild(content)
    document.getElementById("contact-form_form").insertBefore(message,document.getElementById("btn-enviar-contact-form")).setAttribute("class", "creditDetails")
}

function simularDeNuevo_from_simulatorResponse () {
    document.getElementById("simulator-form-response").setAttribute("class", "hiddenElement");
    document.getElementById("simulator-form").setAttribute("class", "activeElement");
}

function enviarFormContacto () {
    document.getElementById("contact-form").setAttribute("class", "hiddenElement");
    document.getElementById("contact-form-response").setAttribute("class", "activeElement");

    // Toma valores del formulario de contacto, forma string y lo imprime en un nodo
    let nombre = document.getElementById("nombre").value.trim()
    let parrafo = document.createElement("p")
    let contenido = document.createTextNode(`Gracias, ${nombre}!
    A la brevedad nos comunicaremos con vos para adjudicar tu crédito.`)
    parrafo.appendChild(contenido)
    document.getElementById("contact-form-response_message").appendChild(parrafo)

    // Almacena variables del crédito en sessionStorage para luego mostrarlo en historial
    sessionStorage.setItem('tipoCredito', tipoCredito)
    sessionStorage.setItem('monto', monto)
    sessionStorage.setItem('cantidadCuotas', cantidadCuotas)
    sessionStorage.setItem('valorCuotas', valorCuotas)
}

function simularDeNuevo_from_contactForm () {
    document.getElementById("contact-form").setAttribute("class", "hiddenElement");
    document.getElementById("simulator-form").setAttribute("class", "activeElement");
}

function verHistorialCreditos () {
    document.getElementById("contact-form-response").setAttribute("class", "hiddenElement");
    document.getElementById("credit-history").setAttribute("class", "activeElement");

    // Toma variables del crédito almacenadas en sessionStorage y los imprime en tabla de historial
    let newRow = document.createElement("tr")
    let tdTipo = document.createElement("td")
    let contenidoTipo = document.createTextNode(sessionStorage.getItem('tipoCredito'))
    tdTipo.appendChild(contenidoTipo)
    let tdMonto = document.createElement("td")
    let contenidoMonto = document.createTextNode(`$${sessionStorage.getItem('monto')}`)
    tdMonto.appendChild(contenidoMonto)
    let tdCantidadCuotas = document.createElement("td")
    let contenidoCantidadCuotas = document.createTextNode(`${sessionStorage.getItem('cantidadCuotas')} cuotas`)
    tdCantidadCuotas.appendChild(contenidoCantidadCuotas)
    let tdValorCuotas = document.createElement("td")
    let contenidoValorCuotas = document.createTextNode(`$${sessionStorage.getItem('valorCuotas')}`)
    tdValorCuotas.appendChild(contenidoValorCuotas)

    newRow.appendChild(tdTipo)
    newRow.appendChild(tdMonto)
    newRow.appendChild(tdCantidadCuotas)
    newRow.appendChild(tdValorCuotas)
    document.getElementById("credit-history_table").appendChild(newRow)
}

function simularDeNuevo_from_contactFormResponse () {
    document.getElementById("contact-form-response").setAttribute("class", "hiddenElement");
    document.getElementById("simulator-form").setAttribute("class", "activeElement");
}

function simularDeNuevo_from_creditHistory () {
    document.getElementById("credit-history").setAttribute("class", "hiddenElement");
    document.getElementById("simulator-form").setAttribute("class", "activeElement");
}

// // ----------------------- SIMULADOR - FORM ------------------------ Modificar cantidad de cuotas disponibles según tipo de crédito seleccionado y modificar montos disponibles según ingresos declarados
// Las funciones cleanFormPaymentOptions y cleanFormLowIncomeMessage debiesen unificarse, y cleanFormLowIncomeMessage solo debiese correr si ingresosNetos != -$30.000

// Funciones que imprimen las opciones de cuotas según el tipo de crédito
function populatePaymentOptions_PersonalCredit () {
    let tagOpt1 = document.createElement("option")
    tagOpt1.setAttribute("class","paymentOption")
    let contentOpt1 = document.createTextNode("6 cuotas")
    tagOpt1.appendChild(contentOpt1)
    document.getElementById("cantidadCuotas").appendChild(tagOpt1).setAttribute("value", "6")

    let tagOpt2 = document.createElement("option")
    tagOpt2.setAttribute("class","paymentOption")
    let contentOpt2 = document.createTextNode("12 cuotas")
    tagOpt2.appendChild(contentOpt2)
    document.getElementById("cantidadCuotas").appendChild(tagOpt2).setAttribute("value", "12")

    let tagOpt3 = document.createElement("option")
    tagOpt3.setAttribute("class","paymentOption")
    let contentOpt3 = document.createTextNode("18 cuotas")
    tagOpt3.appendChild(contentOpt3)
    document.getElementById("cantidadCuotas").appendChild(tagOpt3).setAttribute("value", "18")
}

function populatePaymentOptions_PledgeCredit () {
    let tagOpt1 = document.createElement("option")
    tagOpt1.setAttribute("class","paymentOption")
    let contentOpt1 = document.createTextNode("12 cuotas")
    tagOpt1.appendChild(contentOpt1)
    document.getElementById("cantidadCuotas").appendChild(tagOpt1).setAttribute("value", "12")

    let tagOpt2 = document.createElement("option")
    tagOpt2.setAttribute("class","paymentOption")
    let contentOpt2 = document.createTextNode("24 cuotas")
    tagOpt2.appendChild(contentOpt2)
    document.getElementById("cantidadCuotas").appendChild(tagOpt2).setAttribute("value", "24")

    let tagOpt3 = document.createElement("option")
    tagOpt3.setAttribute("class","paymentOption")
    let contentOpt3 = document.createTextNode("36 cuotas")
    tagOpt3.appendChild(contentOpt3)
    document.getElementById("cantidadCuotas").appendChild(tagOpt3).setAttribute("value", "36")
}

function populatePaymentOptions_MortgageCredit () {
    let tagOpt1 = document.createElement("option")
    tagOpt1.setAttribute("class","paymentOption")
    let contentOpt1 = document.createTextNode("60 cuotas")
    tagOpt1.appendChild(contentOpt1)
    document.getElementById("cantidadCuotas").appendChild(tagOpt1).setAttribute("value", "60")

    let tagOpt2 = document.createElement("option")
    tagOpt2.setAttribute("class","paymentOption")
    let contentOpt2 = document.createTextNode("90 cuotas")
    tagOpt2.appendChild(contentOpt2)
    document.getElementById("cantidadCuotas").appendChild(tagOpt2).setAttribute("value", "90")

    let tagOpt3 = document.createElement("option")
    tagOpt3.setAttribute("class","paymentOption")
    let contentOpt3 = document.createTextNode("180 cuotas")
    tagOpt3.appendChild(contentOpt3)
    document.getElementById("cantidadCuotas").appendChild(tagOpt3).setAttribute("value", "180")
}

function populatePaymentOptions_BusinessCredit () {
    let tagOpt1 = document.createElement("option")
    tagOpt1.setAttribute("class","paymentOption")
    let contentOpt1 = document.createTextNode("24 cuotas")
    tagOpt1.appendChild(contentOpt1)
    document.getElementById("cantidadCuotas").appendChild(tagOpt1).setAttribute("value", "24")

    let tagOpt2 = document.createElement("option")
    tagOpt2.setAttribute("class","paymentOption")
    let contentOpt2 = document.createTextNode("48 cuotas")
    tagOpt2.appendChild(contentOpt2)
    document.getElementById("cantidadCuotas").appendChild(tagOpt2).setAttribute("value", "48")

    let tagOpt3 = document.createElement("option")
    tagOpt3.setAttribute("class","paymentOption")
    let contentOpt3 = document.createTextNode("60 cuotas")
    tagOpt3.appendChild(contentOpt3)
    document.getElementById("cantidadCuotas").appendChild(tagOpt3).setAttribute("value", "60")
}

// Funcion que valida el monto ingresado. Si el monto está ingresado y cumple los parámetros del tipo de crédito e ingresos netos, habilita el botón de avanzar.

// No funciona porque cleanFormPaymentOptions() resetea clase del boton #btn-calcularCuotas a .btn

function validateAmount (montoMinimo, montoMaximo) {
    // Identificar tipo de crédito y nivel de ingresos seleccionado
    // Según crédito y nivel de ingresos, identificar montos disponibles
    // Validar si monto ingresado se encuentra dentro de montos disponibles, y si corresponde, habilitar avance.

    amountEntered = document.getElementById("monto").value


    console.log("amountEntered " + amountEntered)
    console.log("montoMinimo " + montoMinimo)
    console.log("montoMaximo " + montoMaximo)

    if (amountEntered >= montoMinimo && amountEntered <= montoMaximo) {
        document.getElementById("btn-calcularCuotas").removeAttribute("class", "isDesabled")
    }
}

// Funcion que imprime las opciones montos según el tipo de crédito y nivel de ingresos, y valida el monto ingresado en el formulario para habilitar botón de avanzar. Hay que cambiarle el nombre a la función para que sea más representativa de su contenido.

function modifyAvailableAmounts (ingresosNetos, montoMinimo, montoMaximo) {
    let monto_tittle = document.getElementById("monto_tittle")
    monto_tittle.innerHTML = "" // Resetea encabezado para que se vuelva imprimir luego de cada cambio en los parámetros.
    // identificar nivel de ingresos
    if (ingresosNetos == "-$30.0000") {
    let content_monto_tittle = document.createTextNode(`Monto a solicitar`)
    monto_tittle.appendChild(content_monto_tittle)
    } 
    
    else if (ingresosNetos == "$30.000 - $50.000") {
    // Calcular los montos dispnibles para cada crédito y modificarlos en el input del form
    document.getElementById("monto").setAttribute("min", montoMinimo)
    document.getElementById("monto").setAttribute("max", montoMaximo*0.5)
    // imprimir los montos dispnibles para cada crédito en un mensaje
    let content_monto_tittle = document.createTextNode(`Monto a solicitar (Montos disponibles: $${montoMinimo} - $${montoMaximo*0.5})`)
    monto_tittle.appendChild(content_monto_tittle)
    validateAmount(montoMinimo, montoMaximo*0.5)
    } 
    
    else if (ingresosNetos == "$50.000 - $75.000") {
    let content_monto_tittle = document.createTextNode(`Monto a solicitar (Montos disponibles: $${montoMinimo} - $${montoMaximo*0.75})`)
    monto_tittle.appendChild(content_monto_tittle)
    document.getElementById("monto").setAttribute("min", montoMinimo)
    document.getElementById("monto").setAttribute("max", montoMaximo*0.75)
    validateAmount(montoMinimo, montoMaximo*0.75)
    } 
    
    else if (ingresosNetos == "+$75.0000") {
    let content_monto_tittle = document.createTextNode(`Monto a solicitar (Montos disponibles: $${montoMinimo} - $${montoMaximo})`)
    monto_tittle.appendChild(content_monto_tittle)
    document.getElementById("monto").setAttribute("min", montoMinimo)
    document.getElementById("monto").setAttribute("max", montoMaximo)
    validateAmount(montoMinimo, montoMaximo)
    }
}

// Función que borra las opciones de cuotas y el mensaje de lowIncome / a esta función hay que cambiarle el nombre para que sea más representativa de su contenido.
function cleanFormPaymentOptions() {
    payomentOptions = document.getElementsByClassName("paymentOption")
    for (let i = 0; i < payomentOptions.length; i) {
    document.getElementById("cantidadCuotas").removeChild(payomentOptions[i])
    }

    if (document.getElementById("ingresosNetos").value != "-$30.0000") {
    document.getElementById("insuficientIncomeMessage").setAttribute("class", "displayNone")
    document.getElementById("btn-calcularCuotas").setAttribute("class", "btn")
    // document.getElementById("btn-calcularCuotas").classList.add("btn");
    document.getElementById("cantidadCuotas").removeAttribute("disabled")
    document.getElementById("monto").removeAttribute("disabled")
    }
}

function adjustFormtOptions() {
    tipoCredito = document.getElementById("tipoCredito").value
    ingresosNetos = document.getElementById("ingresosNetos").value

    if (ingresosNetos == "-$30.0000") {
    document.getElementById("insuficientIncomeMessage").setAttribute("class", "displayBlock")
    document.getElementById("btn-calcularCuotas").setAttribute("class", "btn-disabled")
    modifyAvailableAmounts(ingresosNetos, personalCredit.minAmount, personalCredit.topAmount)
    document.getElementById("cantidadCuotas").setAttribute("disabled", true)
    document.getElementById("monto").setAttribute("disabled", true)
    }

    else if (tipoCredito == "Personal" && ingresosNetos == "$30.000 - $50.000") {
    cleanFormPaymentOptions()
    populatePaymentOptions_PersonalCredit()
    modifyAvailableAmounts(ingresosNetos, personalCredit.minAmount, personalCredit.topAmount)
    } 
    
    else if (tipoCredito == "Personal" && ingresosNetos == "$50.000 - $75.000") {
    cleanFormPaymentOptions()
    populatePaymentOptions_PersonalCredit()
    modifyAvailableAmounts(ingresosNetos, personalCredit.minAmount, personalCredit.topAmount)
    }

    else if (tipoCredito == "Personal" && ingresosNetos == "+$75.0000") {
    cleanFormPaymentOptions()
    populatePaymentOptions_PersonalCredit()
    modifyAvailableAmounts(ingresosNetos, personalCredit.minAmount, personalCredit.topAmount)
    }

    else if (tipoCredito == "Prendario" && ingresosNetos == "$30.000 - $50.000") {
    cleanFormPaymentOptions()
    populatePaymentOptions_PledgeCredit()
    modifyAvailableAmounts(ingresosNetos, pledgeCredit.minAmount, pledgeCredit.topAmount)
    }

    else if (tipoCredito == "Prendario" && ingresosNetos == "$50.000 - $75.000") {
    cleanFormPaymentOptions()
    populatePaymentOptions_PledgeCredit()
    modifyAvailableAmounts(ingresosNetos, pledgeCredit.minAmount, pledgeCredit.topAmount)
    }

    else if (tipoCredito == "Prendario" && ingresosNetos == "+$75.0000") {
    cleanFormPaymentOptions()
    populatePaymentOptions_PledgeCredit()
    modifyAvailableAmounts(ingresosNetos, pledgeCredit.minAmount, pledgeCredit.topAmount)
    }

    else if (tipoCredito == "Hipotecario" && ingresosNetos == "$30.000 - $50.000") {
    cleanFormPaymentOptions()
    populatePaymentOptions_MortgageCredit()
    modifyAvailableAmounts(ingresosNetos, mortgageCredit.minAmount, mortgageCredit.topAmount)
    }

    else if (tipoCredito == "Hipotecario" && ingresosNetos == "$50.000 - $75.000") {
    cleanFormPaymentOptions()
    populatePaymentOptions_MortgageCredit()
    modifyAvailableAmounts(ingresosNetos, mortgageCredit.minAmount, mortgageCredit.topAmount)
    }

    else if (tipoCredito == "Hipotecario" && ingresosNetos == "+$75.0000") {
    cleanFormPaymentOptions()
    populatePaymentOptions_MortgageCredit()
    modifyAvailableAmounts(ingresosNetos, mortgageCredit.minAmount, mortgageCredit.topAmount)
    }

    else if (tipoCredito == "Empresarial" && ingresosNetos == "$30.000 - $50.000") {
    cleanFormPaymentOptions()
    populatePaymentOptions_BusinessCredit()
    modifyAvailableAmounts(ingresosNetos, businessCredit.minAmount, businessCredit.topAmount)
    }

    else if (tipoCredito == "Empresarial" && ingresosNetos == "$50.000 - $75.000") {
    cleanFormPaymentOptions()
    populatePaymentOptions_BusinessCredit()
    modifyAvailableAmounts(ingresosNetos, businessCredit.minAmount, businessCredit.topAmount)
    }

    else if (tipoCredito == "Empresarial" && ingresosNetos == "+$75.0000") {
    cleanFormPaymentOptions()
    populatePaymentOptions_BusinessCredit()
    modifyAvailableAmounts(ingresosNetos, businessCredit.minAmount, businessCredit.topAmount)
    }
}