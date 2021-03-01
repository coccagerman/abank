// // ----------------------- MOBILE NAVBAR ----------------------- Mobile navbar animated button

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

// // ----------------------- CREDITS - SLIDERS ----------------------- Hide active section and show next section when click (like a slider)

function slidePersonalCredit () {
    // Take active section and assign it class hiddenElement.
    $(".activeElement").get(0).setAttribute("class", "hiddenElement");
    // Take active button and assign it class inactive.
    $(".active").get(0).setAttribute("class", "inactive");
    // Take ID of the selected section and assign it class activeElement.
    $("#credit_personal").attr("class", "activeElement");
    // Take button of the selected section and assign it class active.
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

// // ----------------------- SIMULATOR - ASIGN VARIABLES ----------------------- When simulator form is sent, it assigns the form's values to variables that are used after.

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

// // ----------------------- SIMULATOR - SLIDERS ----------------------- Hide active section and show next section when click (like a slider) - Besides mooving the slider, each function performs the tasks correspondent to each section.

function calculatePayments () {
    // When calculate button is clicked it checks that the credit amount is complete and between the allowed parameters. When not, shows error message.
    let amount = $("#creditAmount").val()
    let minAmount = parseInt($("#creditAmount").attr('min'))
    let maxAmount = parseInt($("#creditAmount").attr('max'))

    if (amount >= minAmount && amount <= maxAmount) {
    // Moves slide.
    $("#simulator-form").attr("class", "hiddenElement");
    $("#simulator-form-response").attr("class", "activeElement");
    // Assigns form's values to variables that are used later.
    assingCreditVariables ()
    // Hides error message.
    $("#amountErrorMessage").attr("class", "displayNone")
    // Forms string and prints it.
    let message = $("#simulator-form-response_message")
    message.text("") // Resets value so it prints again with each simulation.
    message.text(`Para solicitar un crédito ${creditType} por $${creditAmount} a pagar en ${numberOfPayments} cuotas, deberá pagar ${numberOfPayments} cuotas de $${paymentsValue}.`)
    $("#btn-contact-form").before(message)
    }
    
    else {
    $("#amountErrorMessage").attr("class", "displayBlock")
    }
}

function requestCredit () {
    // Moves slide.
    $("#simulator-form-response").attr("class", "hiddenElement");
    $("#contact-form").attr("class", "activeElement");
    // Takes simulator form values and prints them in a message.
    let message = $("#creditQuery-data")
    message.text("")
    message.text(`Tipo de crédito: ${creditType}
    Monto: $${creditAmount}
    Costo: ${numberOfPayments} cuotas de $${paymentsValue}`)
    $("#btn-send-contact-form").before(message)
    message.attr("class", "creditDetails")
}

function sendContactForm () {
    // Takes the values inserted in the form and compares the to the corresponding regex.
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
    // Hides error message.
    $("#contactForm_ErrorMessage").attr("class", "displayNone")
    // Moves slide.
    $("#contact-form").attr("class", "hiddenElement");
    $("#contact-form-response").attr("class", "activeElement");

    // Takes contact form's values, forms a strings and prints them in a message.
    let message = $("#contact-form-response_message-p")
    message.text("")
    message.text(`Gracias, ${name}!
    A la brevedad nos comunicaremos con vos para adjudicar tu crédito.`)

    // Stores credit variables in sessionStorage to show them in credit history afterwards.
    sessionStorage.setItem('creditType', creditType)
    sessionStorage.setItem('monto', creditAmount)
    sessionStorage.setItem('cantidadCuotas', numberOfPayments)
    sessionStorage.setItem('valorCuotas', paymentsValue)
    }
}

function seeCreditHistory () {
    $("#contact-form-response").attr("class", "hiddenElement");
    $("#credit-history").attr("class", "activeElement");

    // Takes the credit variables stored in sessionStorage and prints them in a table.
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

// // ----------------------- SIMULATOR - FORM ------------------------ Modiffy number of payments according to type of credit and modify the available amount acording to the net income.

// Function that prints the payment options according to the type of credit seleted.
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

// Function that prints the available amounts according to the type of credit seleted and the net income declared.
function modifyAvailableAmounts (netIncome, minAmount, maxAmount) {
    let creditAmount_tittle = $("#creditAmount_tittle")
    creditAmount_tittle.text("") // Resets the label so that it prints again after each change of parameters.
    // Identify net income level.
    if (netIncome == "-$30.0000") {
    creditAmount_tittle.text("Monto a solicitar")
    } 
    
    else if (netIncome == "$30.000 - $50.000") {
    // Calculate available amounts for each credit and modify the min and max attributes of the form.
    $("#creditAmount").attr("min", minAmount)
    $("#creditAmount").attr("max", maxAmount*0.5)
    // Print the available amounts for each credit in a message.
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

// Function that resets the payment options and hides the low income error message.
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

// Function that modifies the options of the form according to the type of credit, and net income declared, using cleanFormPaymentOptions(), populatePaymentOptions() and modifyAvailableAmounts() functions.
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