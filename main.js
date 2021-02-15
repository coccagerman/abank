console.log(document.getElementById('btn-credit_personal').getAttribute('href').replace('#',''));


// ----------------------- CREDITOS ----------------------- preventDefault de botones (evita que resetee página luego del click) / Se debe optimizar juntando todos los botones en una array y ejecutando la función sobre el array una sola vez (Unificarl todos los botones por clase en un mismo array)

console.log(document.getElementsByClassName('activeElement')[0])

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

// ----------------------- SIMULADOR -----------------------
// ----------------------- SIMULADOR - FORM ----------------------- preventDefault de botones del form (evita que resetee página luego del click) / Se debe optimizar juntando todos los botones en una array y ejecutando la función sobre el array una sola vez (Unificarl todos los botones por clase en un mismo array)

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

// ----------------------- SIMULADOR - FORM ----------------------- Ocultar la sección actual y mostrar la siguiente a partir del onclick (como slider)

document.getElementById("btn-calcularCuotas").onclick = calcularCuotas;

document.getElementById("btn-contact-form").onclick = solicitarCredito;

document.getElementById("btn-volverSimular_from_simulatorResponse").onclick = simularDeNuevo_from_simulatorResponse;

document.getElementById("btn-enviar-contact-form").onclick = enviarFormContacto;

document.getElementById("btn-volverSimular_from_contactForm").onclick = simularDeNuevo_from_contactForm;

document.getElementById("btn-volverSimular_from_contactFormResponse").onclick = simularDeNuevo_from_contactFormResponse;


// ----------------------- SIMULADOR - FORM - Modificar cantidad de cuotas según tipo de crédito seleccionado -----------------------