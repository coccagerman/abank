// // ----------------------- CREDITOS - SLIDERS ----------------------- Ocultar la sección actual y mostrar la siguiente a partir de onclick (como slider) / Se puede optimizar con una única función que recorra un array de secciones a medida que se aprietan los botones.

function switchCreditSlide (destination) {
    // Tomar sección vigente y darle class hiddenElement.
    document.getElementsByClassName('activeElement')[0].setAttribute("class", "hiddenElement");
    // Leer href del botón que se apriete, y a la sección con el mismo ID darle class activeElement // La selección debiese ser cuando el botón se clickea
    document.getElementById(document.getElementById('btn-credit_personal').getAttribute('href').replace('#','')).setAttribute("class", "activeElement");
}

// // ----------------------- SIMULADOR -----------------------
// // ----------------------- SIMULADOR - SLIDERS ----------------------- Ocultar la sección actual y mostrar la siguiente a partir de onclick (como slider) / Se puede optimizar con una única función que recorra un array de secciones a medida que se aprieta el botón de avanzar. La función de volver a simular debiese ser única, ocultando la sección que está activa y activando la sección simulador. 

function calcularCuotas () {
    document.getElementById("simulator-form").setAttribute("class", "hiddenElement");
    document.getElementById("simulator-form-response").setAttribute("class", "activeElement");
}

function solicitarCredito () {
    document.getElementById("simulator-form-response").setAttribute("class", "hiddenElement");
    document.getElementById("contact-form").setAttribute("class", "activeElement");
}

function simularDeNuevo_from_simulatorResponse () {
    document.getElementById("simulator-form-response").setAttribute("class", "hiddenElement");
    document.getElementById("simulator-form").setAttribute("class", "activeElement");
}

function enviarFormContacto () {
    document.getElementById("contact-form").setAttribute("class", "hiddenElement");
    document.getElementById("contact-form-response").setAttribute("class", "activeElement");
}

function simularDeNuevo_from_contactForm () {
    document.getElementById("contact-form").setAttribute("class", "hiddenElement");
    document.getElementById("simulator-form").setAttribute("class", "activeElement");
}

function simularDeNuevo_from_contactFormResponse () {
    document.getElementById("contact-form-response").setAttribute("class", "hiddenElement");
    document.getElementById("simulator-form").setAttribute("class", "activeElement");
}


// // ----------------------- SIMULADOR - FORM - Modificar cantidad de cuotas según tipo de crédito seleccionado -----------------------

// function populateSimulatorForm (tipoCredito) {

//     if (tipoCredito == "Personal") {
// 		var arrayCuotas = ["6|6 cuotas","12|12 cuotas","18|18 cuotas"];

// 	} else if (tipoCredito == "Prendario") {
// 		var arrayCuotas = ["12|12 cuotas","24|24 cuotas","36|36 cuotas"];

// 	} else if (tipoCredito == "Hipotecario") {
// 		var arrayCuotas = ["60|60 cuotas","120|120 cuotas","180|180 cuotas"];

// 	} else {
// 		var arrayCuotas = ["6|6 cuotas","24|24 cuotas","48|48 cuotas", "60|60 cuotas"];
// 	}

//     for (var option in arrayCuotas){
// 		var pair = arrayCuotas[option].split("|");
// 		var newOption = document.createElement("option");
// 		newOption.value = pair[0];
// 		newOption.innerHTML = pair[1];
// 	}
// }