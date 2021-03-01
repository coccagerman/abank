// ----------------------- PRELOAD ANIMTION -----------------------

$(window).on("load", function() {
$(".preloader_wrapper").fadeOut(1500);
})

// ----------------------- MOBILE NAVBAR ----------------------- Mobile navbar animated button

let hamburguer = 0;

$('.hamburguer-icon').click(displayMobileMenu); 

$('#menu ul li').click(hideMobileMenu);

// ----------------------- CREDITS & SIMULATOR ----------------------- Buttons preventDefault

$(".preventDefault").on('click', function (e) {
    e.preventDefault();
})

// ----------------------- CREDITS ----------------------- Hide active section and show next section when click (like a slider)

$("#btn-credit_personal").on('click', slidePersonalCredit)

$("#btn-credit_pledge").on('click', slidePledgeCredit)

$("#btn-credit_mortgage").on('click', slideMortgageCredit)

$("#btn-credit_business").on('click', slideBusinessCredit)

// ----------------------- SIMULATOR ----------------------- Hide active section and show next section when click (like a slider)

$("#btn-calculatePayments").on('click', calculatePayments);

$("#btn-contact-form").on('click', requestCredit);

$("#btn-send-contact-form").on('click', sendContactForm);

$("#btn-creditHistory").on('click', seeCreditHistory);

$(".btn-simulateAgain").on('click', simulateAgain);

// ----------------------- SIMULATOR - FORM ------------------------ Modiffy number of payments according to type of credit and modify the available amount acording to the net income

$("#creditType").on("change", adjustPaymentOptions_and_availableAmounts)
$("#netIncome").on("change", adjustPaymentOptions_and_availableAmounts)
$(document).on("DOMContentLoaded", adjustPaymentOptions_and_availableAmounts) // This shows options as soon as the page loads, without any variable necesarily changing