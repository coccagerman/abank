// ----------------------- PRELOAD ANIMTION -----------------------

$(window).on("load", function() {
$(".preloader_wrapper").fadeOut(2000);
})


// ----------------------- NAVBAR ----------------------- Mobile navbar animated button

let hamburguer = 0;

$('.hamburguer-icon').click(displayMobileMenu); 

$('#menu ul li').click(hideMobileMenu);

// ----------------------- CREDITS ----------------------- preventDefault de botones (evita que resetee página luego del click) / Se debe optimizar juntando todos los botones en una array y ejecutando la función sobre el array una sola vez (Unificarl todos los botones por clase en un mismo array)

document.getElementById("btn-credit_personal").addEventListener('click', function (e) {
    e.preventDefault();
})
document.getElementById("btn-credit_pledge").addEventListener('click', function (e) {
    e.preventDefault();
})
document.getElementById("btn-credit_mortgage").addEventListener('click', function (e) {
    e.preventDefault();
})
document.getElementById("btn-credit_business").addEventListener('click', function (e) {
    e.preventDefault();
})

// ----------------------- CREDITS ----------------------- Ocultar la sección actual y mostrar la siguiente a partir del onclick (como slider)

document.getElementById("btn-credit_personal").onclick = slidePersonalCredit;

document.getElementById("btn-credit_pledge").onclick = slidePledgeCredit;

document.getElementById("btn-credit_mortgage").onclick = slideMortgageCredit;

document.getElementById("btn-credit_business").onclick = slideBusinessCredit;

// ----------------------- SIMULATOR -----------------------
// ----------------------- SIMULATOR - FORM ----------------------- preventDefault de botones del form (evita que resetee página luego del click) / Se debe optimizar juntando todos los botones en una array y ejecutando la función sobre el array una sola vez (Unificar todos los botones por clase en un mismo array)

document.getElementById("btn-calcularCuotas").addEventListener('click', function (e) {
    e.preventDefault();
})
document.getElementById("btn-contact-form").addEventListener('click', function (e) {
    e.preventDefault();
})
document.getElementById("btn-volverSimular_from_simulatorResponse").addEventListener('click', function (e) {
    e.preventDefault();
})
document.getElementById("btn-enviar-contact-form").addEventListener('click', function (e) {
    e.preventDefault();
})
document.getElementById("btn-volverSimular_from_contactForm").addEventListener('click', function (e) {
    e.preventDefault();
})
document.getElementById("btn-creditHistory").addEventListener('click', function (e) {
    e.preventDefault();
})
document.getElementById("btn-volverSimular_from_contactFormResponse").addEventListener('click', function (e) {
    e.preventDefault();
})

document.getElementById("btn-volverSimular_from_creditHistory").addEventListener('click', function (e) {
    e.preventDefault();
})

// ----------------------- SIMULATOR - FORM ----------------------- Ocultar la sección actual y mostrar la siguiente a partir del onclick (como slider)

document.getElementById("btn-calcularCuotas").onclick = calcularCuotas;

document.getElementById("btn-contact-form").onclick = solicitarCredito;

document.getElementById("btn-volverSimular_from_simulatorResponse").onclick = simularDeNuevo_from_simulatorResponse;

document.getElementById("btn-enviar-contact-form").onclick = enviarFormContacto;

document.getElementById("btn-volverSimular_from_contactForm").onclick = simularDeNuevo_from_contactForm;

document.getElementById("btn-creditHistory").onclick = verHistorialCreditos;

document.getElementById("btn-volverSimular_from_contactFormResponse").onclick = simularDeNuevo_from_contactFormResponse;

document.getElementById("btn-volverSimular_from_creditHistory").onclick = simularDeNuevo_from_creditHistory;


// ----------------------- SIMULATOR - FORM ------------------------ Modificar cantidad de cuotas según tipo de crédito seleccionado y el monto disponible según el nivel de ingresos declarado

document.getElementById("tipoCredito").addEventListener("change", adjustFormtOptions)
document.getElementById("ingresosNetos").addEventListener("change", adjustFormtOptions)
document.addEventListener("DOMContentLoaded", adjustFormtOptions) // Para que figuren opciones apenas cargue el sitio, sin que la selección necesariamente cambie