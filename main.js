// ----------------------- PRELOAD ANIMTION -----------------------

$(window).on("load", function() {
$(".preloader_wrapper").fadeOut(2000);
})

// ----------------------- NAVBAR ----------------------- Mobile navbar animated button

let hamburguer = 0;

$('.hamburguer-icon').click(displayMobileMenu); 

$('#menu ul li').click(hideMobileMenu);

// ----------------------- CREDITS & SIMUALTOR ----------------------- preventDefault de botones (evita que resetee página luego del click) / Eficientizar unificando todos los botones en una clase .preventDefault

$("#btn-credit_personal, #btn-credit_pledge, #btn-credit_mortgage, #btn-credit_business, #btn-calcularCuotas, #btn-contact-form, #btn-volverSimular_from_simulatorResponse, #btn-enviar-contact-form, #btn-enviar-contact-form, #btn-volverSimular_from_contactForm, #btn-creditHistory, #btn-volverSimular_from_contactFormResponse, #btn-volverSimular_from_creditHistory").on('click', function (e) {
    e.preventDefault();
})

// ----------------------- CREDITS ----------------------- Ocultar la sección actual y mostrar la siguiente a partir del onclick (como slider)

$("#btn-credit_personal").on('click', slidePersonalCredit)

$("#btn-credit_pledge").on('click', slidePledgeCredit)

$("#btn-credit_mortgage").on('click', slideMortgageCredit)

$("#btn-credit_business").on('click', slideBusinessCredit)

// ----------------------- SIMULATOR -----------------------
// ----------------------- SIMULATOR - FORM ----------------------- Ocultar la sección actual y mostrar la siguiente a partir del onclick (como slider)

$("#btn-calcularCuotas").on('click', calcularCuotas);

$("#btn-contact-form").on('click', solicitarCredito);

$("#btn-volverSimular_from_simulatorResponse").on('click', simularDeNuevo_from_simulatorResponse);

$("#btn-enviar-contact-form").on('click', enviarFormContacto);

$("#btn-volverSimular_from_contactForm").on('click', simularDeNuevo_from_contactForm);

$("#btn-creditHistory").on('click', verHistorialCreditos);

$("#btn-volverSimular_from_contactFormResponse").on('click', simularDeNuevo_from_contactFormResponse);

$("#btn-volverSimular_from_creditHistory").on('click', simularDeNuevo_from_creditHistory);

// ----------------------- SIMULATOR - FORM ------------------------ Modificar cantidad de cuotas según tipo de crédito seleccionado y el monto disponible según el nivel de ingresos declarado

$("#tipoCredito").on("change", adjustFormtOptions)
$("#ingresosNetos").on("change", adjustFormtOptions)
$(document).on("DOMContentLoaded", adjustFormtOptions) // Para que figuren opciones apenas cargue el sitio, sin que la selección necesariamente cambie