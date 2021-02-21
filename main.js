// ----------------------- NAVBAR ----------------------- Mobile navbar animated button

let hamburguer = 0;

$('.hamburguer').click(function(){

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
}); 

$('#menu ul li').click(function(){
    $('#menu').toggleClass('menu-active');
    $("#top").removeClass('top');
    $("#center").removeClass('center');
    $("#bottom").removeClass('bottom');
    $('body').removeClass('fixed-position');
}); 

// ----------------------- CREDITOS ----------------------- preventDefault de botones (evita que resetee página luego del click) / Se debe optimizar juntando todos los botones en una array y ejecutando la función sobre el array una sola vez (Unificarl todos los botones por clase en un mismo array)

document.getElementById("btn-credit_personal").addEventListener('click', function (e) {
    e.preventDefault();
})
document.getElementById("btn-credit_prendario").addEventListener('click', function (e) {
    e.preventDefault();
})
document.getElementById("btn-credit_hipotecario").addEventListener('click', function (e) {
    e.preventDefault();
})
document.getElementById("btn-credit_empresarial").addEventListener('click', function (e) {
    e.preventDefault();
})

// ----------------------- CREDITOS ----------------------- Ocultar la sección actual y mostrar la siguiente a partir del onclick (como slider)

document.getElementById("btn-credit_personal").onclick = slidePersonalCredit;

document.getElementById("btn-credit_prendario").onclick = slidePrendarioCredit;

document.getElementById("btn-credit_hipotecario").onclick = slideHipotecarioCredit;

document.getElementById("btn-credit_empresarial").onclick = slideEmpresarialCredit;

// ----------------------- SIMULADOR -----------------------
// ----------------------- SIMULADOR - FORM ----------------------- preventDefault de botones del form (evita que resetee página luego del click) / Se debe optimizar juntando todos los botones en una array y ejecutando la función sobre el array una sola vez (Unificar todos los botones por clase en un mismo array)

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

// ----------------------- SIMULADOR - FORM ----------------------- Ocultar la sección actual y mostrar la siguiente a partir del onclick (como slider)

document.getElementById("btn-calcularCuotas").onclick = calcularCuotas;

document.getElementById("btn-contact-form").onclick = solicitarCredito;

document.getElementById("btn-volverSimular_from_simulatorResponse").onclick = simularDeNuevo_from_simulatorResponse;

document.getElementById("btn-enviar-contact-form").onclick = enviarFormContacto;

document.getElementById("btn-volverSimular_from_contactForm").onclick = simularDeNuevo_from_contactForm;

document.getElementById("btn-creditHistory").onclick = verHistorialCreditos;

document.getElementById("btn-volverSimular_from_contactFormResponse").onclick = simularDeNuevo_from_contactFormResponse;

document.getElementById("btn-volverSimular_from_creditHistory").onclick = simularDeNuevo_from_creditHistory;


// ----------------------- SIMULADOR - FORM ------------------------ Modificar cantidad de cuotas según tipo de crédito seleccionado y el monto disponible según el nivel de ingresos declarado

document.getElementById("tipoCredito").addEventListener("change", adjustFormtOptions)
document.getElementById("ingresosNetos").addEventListener("change", adjustFormtOptions)
document.addEventListener("DOMContentLoaded", adjustFormtOptions) // Para que figuren opciones apenas cargue el sitio, sin que la selección necesariamente cambie

// ----------------------- SIMULADOR - FORM RESPONSE - Validar si monto ingresado cumple los parámetros del tipo de crédito e ingresos netos. Si cumple, habilita el botón de avanzar.

// document.getElementById("monto").value
// let creditQueryAmount = document.getElementById("monto").value
// creditQueryAmount.addEventListener("change", modifyAvailableAmounts)
