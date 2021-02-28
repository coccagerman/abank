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
    creditType = $("#creditType").val()
    creditAmount = $("#creditAmount").val()
    numberOfPayments = $("#numberOfPayments").val()
    if ($("#creditType").val() == "Personal") {
        interestRate = 1.65
    } else if ($("#creditType").val() == "Pledge") {
        interestRate = 1.60
    } else if ($("#creditType").val() == "Mortgage") {
        interestRate = 1.55
    } else {
        interestRate = 1.50
    }
    paymentsValue = parseInt((creditAmount*interestRate)/numberOfPayments)
}

// // ----------------------- SIMULADOR - SLIDERS ----------------------- Ocultar la sección actual y mostrar la siguiente a partir de onclick (como slider) / Se puede optimizar con una única función que recorra un array de secciones a medida que se aprieta el botón de avanzar. La función de volver a simular debiese ser única, ocultando la sección que está activa y activando la sección simulador.
// Además de mover el slide, cada función ejecuta las tareas correspondientes a cada sección.

function calculatePayments () {
    // Al clickear botón valida que monto solicitado esté completo y esté dentro de los parametros del credito. Si no cumple, arroja error.Si cumple, avanza.
    let amount = $("#creditAmount").val()
    let minAmount = parseInt($("#creditAmount").attr('min'))
    let maxAmount = parseInt($("#creditAmount").attr('max'))

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
        message.text(`Para solicitar un crédito ${creditType} por $${creditAmount} a pagar en ${numberOfPayments} cuotas, deberá pagar ${numberOfPayments} cuotas de $${paymentsValue}.`)
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
    message.text(`Tipo de crédito: ${creditType}
    Monto: $${creditAmount}
    Costo: ${numberOfPayments} cuotas de $${paymentsValue}`)
    $("#btn-send-contact-form").before(message)
    message.attr("class", "creditDetails")
}

function sendContactForm () {
    // Toma valores insertados en form y los compara contra regex correspondiente.
    let name = $("#name").val().trim()
    let telephone = $("#telephone").val()
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
    let message = $("#contact-form-response_message-p")
    message.text("")
    message.text(`Gracias, ${name}!
    A la brevedad nos comunicaremos con vos para adjudicar tu crédito.`)

    // Almacena variables del crédito en sessionStorage para luego mostrarlo en historial.
    sessionStorage.setItem('creditType', creditType)
    sessionStorage.setItem('monto', creditAmount)
    sessionStorage.setItem('cantidadCuotas', numberOfPayments)
    sessionStorage.setItem('valorCuotas', paymentsValue)
    }
}

function seeCreditHistory () {
    $("#contact-form-response").attr("class", "hiddenElement");
    $("#credit-history").attr("class", "activeElement");

    // Toma variables del crédito almacenadas en sessionStorage y los imprime en tabla de historial
    let newRow = document.createElement("tr")
    let tdTipo = document.createElement("td")
    let contenidoTipo = document.createTextNode(sessionStorage.getItem('creditType'))
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
        $("#numberOfPayments").append("<option class='paymentOption' value='6'>6 cuotas</option>, <option class='paymentOption' value='12'>12 cuotas</option>, <option class='paymentOption' value='18'>18 cuotas</option>")
    } 
    else if (creditType == "Pledge") {
        $("#numberOfPayments").append("<option class='paymentOption' value='12'>12 cuotas</option>, <option class='paymentOption' value='24'>24 cuotas</option>, <option class='paymentOption' value='36'>36 cuotas</option>")
    }
    else if (creditType == "Mortgage") {
        $("#numberOfPayments").append("<option class='paymentOption' value='60'>60 cuotas</option>, <option class='paymentOption' value='90'>90 cuotas</option>, <option class='paymentOption' value='180'>180 cuotas</option>")
    }
    else {
        $("#numberOfPayments").append("<option class='paymentOption' value='24'>24 cuotas</option>, <option class='paymentOption' value='48'>48 cuotas</option>, <option class='paymentOption' value='60'>60 cuotas</option>")
    }
}

// Funcion que imprime las opciones montos según el tipo de crédito y nivel de ingresos.

function modifyAvailableAmounts (netIncome, minAmount, maxAmount) {
    let creditAmount_tittle = $("#creditAmount_tittle")
    creditAmount_tittle.text("") // Resetea encabezado para que se vuelva imprimir luego de cada cambio en los parámetros.
    // identificar nivel de ingresos
    if (netIncome == "-$30.0000") {
    creditAmount_tittle.text("Monto a solicitar")
    } 
    
    else if (netIncome == "$30.000 - $50.000") {
    // Calcular los montos dispnibles para cada crédito y modificarlos en el input del form
    $("#creditAmount").attr("min", minAmount)
    $("#creditAmount").attr("max", maxAmount*0.5)
    // imprimir los montos dispnibles para cada crédito en un mensaje
    creditAmount_tittle.text(`Monto a solicitar (Montos disponibles: $${minAmount} - $${maxAmount*0.5})`)
    } 
    
    else if (netIncome == "$50.000 - $75.000") {
    $("#creditAmount").attr("min", minAmount)
    $("#creditAmount").attr("max", maxAmount*0.75)
    creditAmount_tittle.text(`Monto a solicitar (Montos disponibles: $${minAmount} - $${maxAmount*0.75})`)
    } 
    
    else if (netIncome == "+$75.0000") {
    $("#creditAmount").attr("min", minAmount)
    $("#creditAmount").attr("max", maxAmount)
    creditAmount_tittle.text(`Monto a solicitar (Montos disponibles: $${minAmount} - $${maxAmount})`)
    }
}

// Función que borra las opciones de cuotas y el mensaje de lowIncome

function cleanFormPaymentOptions() {
    payomentOptions = document.getElementsByClassName("paymentOption")
    for (let i = 0; i < payomentOptions.length; i) {
    document.getElementById("numberOfPayments").removeChild(payomentOptions[i])
    }

    if (document.getElementById("netIncome").value != "-$30.0000") {
    document.getElementById("insuficientIncomeMessage").setAttribute("class", "displayNone")
    document.getElementById("btn-calculatePayments").setAttribute("class", "btn")
    document.getElementById("numberOfPayments").removeAttribute("disabled")
    document.getElementById("creditAmount").removeAttribute("disabled")
    }

    // payomentOptions = document.getElementsByClassName("paymentOption")
    // for (let i = 0; i < payomentOptions.length; i) {
    // document.getElementById("numberOfPayments").removeChild(payomentOptions[i])
    // }

    // if (document.getElementById("netIncome").value != "-$30.0000") {
    // document.getElementById("insuficientIncomeMessage").setAttribute("class", "displayNone")
    // document.getElementById("btn-calculatePayments").setAttribute("class", "btn")
    // document.getElementById("numberOfPayments").removeAttribute("disabled")
    // document.getElementById("monto").removeAttribute("disabled")
    // }
}

// Función que ajusta las opciones de cantidad de cuotas y montos disponibles del formulario según el tipo de crédito seleccionado y el nivel de ingresos declarado.

function adjustPaymentOptions_and_availableAmounts () {
    creditType = $("#creditType").val()
    netIncome = $("#netIncome").val()

    if (netIncome == "-$30.0000") {
    $("#insuficientIncomeMessage").attr("class", "displayBlock")
    $("#btn-calculatePayments").attr("class", "btn-disabled")
    modifyAvailableAmounts(netIncome, personalCredit.minAmount, personalCredit.topAmount)
    $("#numberOfPayments").attr("disabled", true)
    $("#creditAmount").attr("disabled", true)
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