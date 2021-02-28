// // ----------------------- MOBILE NAVBAR -----------------------

function displayMobileMenu () {

    $('#menu').toggleClass('menu-active');
    $('body').toggleClass('fixed-position');

    if (hamburguer==0) {
    hamburguer+=1;
    $("#top").addClass('top');
    $("#center").addClass('center');
    $("#bottom").addClass('bottom');
    }
    
    else {
    hamburguer-=1;
    $("#top").removeClass('top');
    $("#center").removeClass('center');
    $("#bottom").removeClass('bottom');
    }
}

function hideMobileMenu () {
    $('#menu').toggleClass('menu-active');
    $("#top").removeClass('top');
    $("#center").removeClass('center');
    $("#bottom").removeClass('bottom');
    $('body').removeClass('fixed-position');
}

// // ----------------------- CREDITOS - SLIDERS ----------------------- Ocultar la sección actual y mostrar la siguiente a partir de onclick (como slider) / Se puede optimizar con una única función que recorra un array de secciones a medida que se aprietan los botones, y que la función detecte el href del botón, llevándote al slide de ese href.

function slidePersonalCredit () {
    // Tomar sección vigente y darle class hiddenElement.
    $(".activeElement").get(0).setAttribute("class", "hiddenElement");
    // Tomar botón active y darle class inactive.
    $(".active").get(0).setAttribute("class", "inactive");
    // Tomar id de la sección seleccionada y darle class activeElement
    $("#credit_personal").attr("class", "activeElement");
    // Tomar botón de la clase seleccionada y darle class active.
    $("#btn-credit_personal").attr("class", "active");
}

function slidePledgeCredit () {
    $(".activeElement").get(0).setAttribute("class", "hiddenElement");
    $(".active").get(0).setAttribute("class", "inactive");
    $("#credit_pledge").attr("class", "activeElement");
    $("#btn-credit_pledge").attr("class", "active");
}

function slideMortgageCredit () {
    $(".activeElement").get(0).setAttribute("class", "hiddenElement");
    $(".active").get(0).setAttribute("class", "inactive");
    $("#credit_mortgage").attr("class", "activeElement");
    $("#btn-credit_mortgage").attr("class", "active");
}

function slideBusinessCredit () {
    $(".activeElement").get(0).setAttribute("class", "hiddenElement");
    $(".active").get(0).setAttribute("class", "inactive");
    $("#credit_business").attr("class", "activeElement");
    $("#btn-credit_business").attr("class", "active");
}

// // ----------------------- SIMULADOR -----------------------
// // ----------------------- SIMULADOR - ASIGNA VARIABLES ----------------------- Al enviar formulario de simulación, asigna valores del formulario a distintas variables que luego son reutilizadas en funciones siguientes.

function assingCreditVariables () {
    tipoCredito = $("#tipoCredito").val()
    monto = $("#monto").val()
    cantidadCuotas = $("#cantidadCuotas").val()
    if ($("#tipoCredito").val() == "Personal") {
        tasaInteres = 1.65
    } else if ($("#tipoCredito").val() == "Pledge") {
        tasaInteres = 1.60
    } else if ($("#tipoCredito").val() == "Mortgage") {
        tasaInteres = 1.55
    } else {
        tasaInteres = 1.50
    }
    valorCuotas = parseInt((monto*tasaInteres)/cantidadCuotas)
}

// // ----------------------- SIMULADOR - SLIDERS ----------------------- Ocultar la sección actual y mostrar la siguiente a partir de onclick (como slider) / Se puede optimizar con una única función que recorra un array de secciones a medida que se aprieta el botón de avanzar. La función de volver a simular debiese ser única, ocultando la sección que está activa y activando la sección simulador.
// Además de mover el slide, cada función ejecuta las tareas correspondientes a cada sección.

function calculatePayments () {
    // Al clickear botón valida que monto solicitado esté completo y esté dentro de los parametros del credito. Si no cumple, arroja error.Si cumple, avanza.
    let amount = $("#monto").val()
    let minAmount = parseInt($("#monto").attr('min'))
    let maxAmount = parseInt($("#monto").attr('max'))

    if (amount >= minAmount && amount <= maxAmount) {
    // Mueve slide
    $("#simulator-form").attr("class", "hiddenElement");
    $("#simulator-form-response").attr("class", "activeElement");
    // Asigna valores del formulario a variables que se utilizan luego.
    assingCreditVariables ()
    // Oculta mensaje de error si es que estaba activo.
    $("#amountErrorMessage").attr("class", "displayNone")
    // Forma string y lo imprime
    let message = $("#simulator-form-response_message")
        // Resetea el valor para que se imprima de nuevo con cada simulación
        message.text("")
        message.text(`Para solicitar un crédito ${tipoCredito} por $${monto} a pagar en ${cantidadCuotas} cuotas, deberá pagar ${cantidadCuotas} cuotas de $${valorCuotas}.`)
        $("#btn-contact-form").before(message)
    }
    
    else {
    $("#amountErrorMessage").attr("class", "displayBlock")
    }
}

function requestCredit () {
    // Mueve slide
    $("#simulator-form-response").attr("class", "hiddenElement");
    $("#contact-form").attr("class", "activeElement");
    // Toma valores del formulario de simulación, forma string y lo imprime en un nodo
    let message = $("#creditQuery-data")
    message.text("")
    message.text(`Tipo de crédito: ${tipoCredito}
    Monto: $${monto}
    Costo: ${cantidadCuotas} cuotas de $${valorCuotas}`)
    $("#btn-send-contact-form").before(message)
    message.attr("class", "creditDetails")
}

function sendContactForm () {
    // Toma valores insertados en form y los compara contra regex correspondiente.
    let name = $("#nombre").val()
    let telephone = $("#telefono").val()
    let email = $("#email").val()
    let nameValidation = validateInput(regex.name, name)
    let telephoneValidation = validateInput(regex.telephone, telephone)
    let emailValidation = validateInput(regex.email, email)
    
    if (nameValidation == false || telephoneValidation == false || emailValidation == false) {
    $("#contactForm_ErrorMessage").attr("class", "displayBlock")
    }

    else {
    // Oculta mensaje de error.
    $("#contactForm_ErrorMessage").attr("class", "displayNone")
    // Mueve slide.
    $("#contact-form").attr("class", "hiddenElement");
    $("#contact-form-response").attr("class", "activeElement");

    // Toma valores del formulario de contacto, forma string y lo imprime en un nodo.
    let nombre = $("#nombre").val().trim()
    let message = $("#contact-form-response_message-p")
    message.text("")
    message.text(`Gracias, ${nombre}!
    A la brevedad nos comunicaremos con vos para adjudicar tu crédito.`)

    // Almacena variables del crédito en sessionStorage para luego mostrarlo en historial.
    sessionStorage.setItem('tipoCredito', tipoCredito)
    sessionStorage.setItem('monto', monto)
    sessionStorage.setItem('cantidadCuotas', cantidadCuotas)
    sessionStorage.setItem('valorCuotas', valorCuotas)
    }
}

function seeCreditHistory () {
    $("#contact-form-response").attr("class", "hiddenElement");
    $("#credit-history").attr("class", "activeElement");

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

function simulateAgain () {
    $("#simulator-form, #simulator-form-response, #contact-form, #contact-form-response, #credit-history").attr("class", "hiddenElement");
    $("#simulator-form").attr("class", "activeElement");
}

// // ----------------------- SIMULADOR - FORM ------------------------ Modificar cantidad de cuotas disponibles según tipo de crédito seleccionado y modificar montos disponibles según ingresos declarados

// Función que imprime las opciones de cuotas según el tipo de crédito
function populatePaymentOptions (creditType) {

    if (creditType == "Personal") {
        $("#cantidadCuotas").append("<option class='paymentOption' value='6'>6 cuotas</option>, <option class='paymentOption' value='12'>12 cuotas</option>, <option class='paymentOption' value='18'>18 cuotas</option>")
    } 
    else if (creditType == "Pledge") {
        $("#cantidadCuotas").append("<option class='paymentOption' value='12'>12 cuotas</option>, <option class='paymentOption' value='24'>24 cuotas</option>, <option class='paymentOption' value='36'>36 cuotas</option>")
    }
    else if (creditType == "Mortgage") {
        $("#cantidadCuotas").append("<option class='paymentOption' value='60'>60 cuotas</option>, <option class='paymentOption' value='90'>90 cuotas</option>, <option class='paymentOption' value='180'>180 cuotas</option>")
    }
    else {
        $("#cantidadCuotas").append("<option class='paymentOption' value='24'>24 cuotas</option>, <option class='paymentOption' value='48'>48 cuotas</option>, <option class='paymentOption' value='60'>60 cuotas</option>")
    }
}

// Funcion que imprime las opciones montos según el tipo de crédito y nivel de ingresos.

function modifyAvailableAmounts (ingresosNetos, montoMinimo, montoMaximo) {
    let monto_tittle = $("#monto_tittle")
    monto_tittle.text("") // Resetea encabezado para que se vuelva imprimir luego de cada cambio en los parámetros.
    // identificar nivel de ingresos
    if (ingresosNetos == "-$30.0000") {
    monto_tittle.text("Monto a solicitar")
    } 
    
    else if (ingresosNetos == "$30.000 - $50.000") {
    // Calcular los montos dispnibles para cada crédito y modificarlos en el input del form
    $("#monto").attr("min", montoMinimo)
    $("#monto").attr("max", montoMaximo*0.5)
    // imprimir los montos dispnibles para cada crédito en un mensaje
    monto_tittle.text(`Monto a solicitar (Montos disponibles: $${montoMinimo} - $${montoMaximo*0.5})`)
    } 
    
    else if (ingresosNetos == "$50.000 - $75.000") {
    $("#monto").attr("min", montoMinimo)
    $("#monto").attr("max", montoMaximo*0.75)
    monto_tittle.text(`Monto a solicitar (Montos disponibles: $${montoMinimo} - $${montoMaximo*0.75})`)
    } 
    
    else if (ingresosNetos == "+$75.0000") {
    $("#monto").attr("min", montoMinimo)
    $("#monto").attr("max", montoMaximo)
    monto_tittle.text(`Monto a solicitar (Montos disponibles: $${montoMinimo} - $${montoMaximo})`)
    }
}

// Función que borra las opciones de cuotas y el mensaje de lowIncome

function cleanFormPaymentOptions() {
    payomentOptions = document.getElementsByClassName("paymentOption")
    for (let i = 0; i < payomentOptions.length; i) {
    document.getElementById("cantidadCuotas").removeChild(payomentOptions[i])
    }

    if (document.getElementById("ingresosNetos").value != "-$30.0000") {
    document.getElementById("insuficientIncomeMessage").setAttribute("class", "displayNone")
    document.getElementById("btn-calculatePayments").setAttribute("class", "btn")
    document.getElementById("cantidadCuotas").removeAttribute("disabled")
    document.getElementById("monto").removeAttribute("disabled")
    }

    // payomentOptions = document.getElementsByClassName("paymentOption")
    // for (let i = 0; i < payomentOptions.length; i) {
    // document.getElementById("cantidadCuotas").removeChild(payomentOptions[i])
    // }

    // if (document.getElementById("ingresosNetos").value != "-$30.0000") {
    // document.getElementById("insuficientIncomeMessage").setAttribute("class", "displayNone")
    // document.getElementById("btn-calculatePayments").setAttribute("class", "btn")
    // document.getElementById("cantidadCuotas").removeAttribute("disabled")
    // document.getElementById("monto").removeAttribute("disabled")
    // }
}

// Función que ajusta las opciones de cantidad de cuotas y montos disponibles del formulario según el tipo de crédito seleccionado y el nivel de ingresos declarado.

function adjustPaymentOptions_and_availableAmounts () {
    creditType = $("#tipoCredito").val()
    netIncome = $("#ingresosNetos").val()

    if (netIncome == "-$30.0000") {
    $("#insuficientIncomeMessage").attr("class", "displayBlock")
    $("#btn-calculatePayments").attr("class", "btn-disabled")
    modifyAvailableAmounts(netIncome, personalCredit.minAmount, personalCredit.topAmount)
    $("#cantidadCuotas").attr("disabled", true)
    $("#monto").attr("disabled", true)
    }

    else if (creditType == "Personal" && netIncome == "$30.000 - $50.000") {
    cleanFormPaymentOptions()
    populatePaymentOptions (creditType)
    modifyAvailableAmounts(netIncome, personalCredit.minAmount, personalCredit.topAmount)
    } 
    
    else if (creditType == "Personal" && netIncome == "$50.000 - $75.000") {
    cleanFormPaymentOptions()
    populatePaymentOptions (creditType)
    modifyAvailableAmounts(netIncome, personalCredit.minAmount, personalCredit.topAmount)
    }

    else if (creditType == "Personal" && netIncome == "+$75.0000") {
    cleanFormPaymentOptions()
    populatePaymentOptions (creditType)
    modifyAvailableAmounts(netIncome, personalCredit.minAmount, personalCredit.topAmount)
    }

    else if (creditType == "Pledge" && netIncome == "$30.000 - $50.000") {
    cleanFormPaymentOptions()
    populatePaymentOptions (creditType)
    modifyAvailableAmounts(netIncome, pledgeCredit.minAmount, pledgeCredit.topAmount)
    }

    else if (creditType == "Pledge" && netIncome == "$50.000 - $75.000") {
    cleanFormPaymentOptions()
    populatePaymentOptions (creditType)
    modifyAvailableAmounts(netIncome, pledgeCredit.minAmount, pledgeCredit.topAmount)
    }

    else if (creditType == "Pledge" && netIncome == "+$75.0000") {
    cleanFormPaymentOptions()
    populatePaymentOptions (creditType)
    modifyAvailableAmounts(netIncome, pledgeCredit.minAmount, pledgeCredit.topAmount)
    }

    else if (creditType == "Mortgage" && netIncome == "$30.000 - $50.000") {
    cleanFormPaymentOptions()
    populatePaymentOptions (creditType)
    modifyAvailableAmounts(netIncome, mortgageCredit.minAmount, mortgageCredit.topAmount)
    }

    else if (creditType == "Mortgage" && netIncome == "$50.000 - $75.000") {
    cleanFormPaymentOptions()
    populatePaymentOptions (creditType)
    modifyAvailableAmounts(netIncome, mortgageCredit.minAmount, mortgageCredit.topAmount)
    }

    else if (creditType == "Mortgage" && netIncome == "+$75.0000") {
    cleanFormPaymentOptions()
    populatePaymentOptions (creditType)
    modifyAvailableAmounts(netIncome, mortgageCredit.minAmount, mortgageCredit.topAmount)
    }

    else if (creditType == "Business" && netIncome == "$30.000 - $50.000") {
    cleanFormPaymentOptions()
    populatePaymentOptions (creditType)
    modifyAvailableAmounts(netIncome, businessCredit.minAmount, businessCredit.topAmount)
    }

    else if (creditType == "Business" && netIncome == "$50.000 - $75.000") {
    cleanFormPaymentOptions()
    populatePaymentOptions (creditType)
    modifyAvailableAmounts(netIncome, businessCredit.minAmount, businessCredit.topAmount)
    }

    else if (creditType == "Business" && netIncome == "+$75.0000") {
    cleanFormPaymentOptions()
    populatePaymentOptions (creditType)
    modifyAvailableAmounts(netIncome, businessCredit.minAmount, businessCredit.topAmount)
    }
}