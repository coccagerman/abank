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


// ----------------------- SIMULADOR - FORM - Modificar cantidad de cuotas según tipo de crédito seleccionado -----------------------

// ----------------------- SIMULADOR - FORM RESPONSE - Tomar datos del form y utilizarlos para dar respuesta en string

