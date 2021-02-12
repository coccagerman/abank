// let creditsArray = ["PERSONAL", "PRENDARIO", "HIPOTECARIO", "EMPRESARIAL"]

// // ----------------------- PROMPT NOMBRE USUARIO -----------------------

// let userName = prompt ("Ingrese su nombre.")

// // ----------------------- CTRL NOMBRE USUARIO -----------------------

// while (userName == "" || userName == null || (!isNaN(userName))) {
//     userName = prompt ("Ingrese su nombre.")
// }

// // ----------------------- PROMPT TIPO CREDITO -----------------------

// let creditType = prompt("Ingrese tipo de crédito a cotizar.", creditsArray[0] + " | " + creditsArray[1] + " | " + creditsArray[2] + " | " + creditsArray[3]).toUpperCase()

// // ----------------------- CTRL TIPO CREDITO -----------------------

// let creditAllowed = false
// for (let i = 0; i < creditsArray.length; i++) {
//     if (creditType == creditsArray[i]) {
//         creditAllowed = true
//         break
//     }
// }

// while (creditType == "" || creditType == null || creditAllowed == false) {
//     creditType = prompt ("Ingrese tipo de crédito a cotizar.", "PERSONAL | PRENDARIO | HIPOTECARIO | EMPRESARIAL")
// }

// // ----------------------- PROMPT MONTO CREDITO -----------------------

// let creditAmount = parseInt(prompt ("Ingrese el monto del crédito que desea solicitar.", "Monto mínimo: $100.000 - Monto máximo: $100.000.000"))

// // ----------------------- CTRL MONTO CREDITO -----------------------

// let amountCtrl

// if (creditAmount < 100000 || creditAmount > 100000000) {
//     amountCtrl = false
// } else {
//     amountCtrl = true
// }

// while (creditAmount == "" || creditAmount == null || (isNaN(creditAmount)) || amountCtrl == false) {
//     creditAmount = parseInt(prompt ("Ingrese el monto del crédito que desea solicitar.", "Monto mínimo: $100.000 - Monto máximo: $100.000.000"))
// }

// // ----------------------- PROMPT CUOTAS -----------------------

// let creditInstallments = parseInt(prompt("Ingrese la cantidad de cuotas en las que desea pagar su crédito.", "Cantidad mínima: 12 - Cantidad máxima: 60"))

// // ----------------------- CTRL CUOTAS -----------------------

// let installmentsCtrl

// if (creditInstallments < 12 || creditInstallments > 60) {
//     installmentsCtrl = false
// } else {
//     installmentsCtrl = true
// }

// while (creditInstallments == "" || creditInstallments == null || (isNaN(creditInstallments)) || installmentsCtrl == false) {
//     creditInstallments = parseInt(prompt("Ingrese la cantidad de cuotas en las que desea pagar su crédito.", "Cantidad mínima: 12 - Cantidad máxima: 60"))
// }

// // ----------------------- CALCULO DE CREDITO -----------------------

// let interestRate

// if (creditType == "PERSONAL") {
//     interestRate = personalCredit.interestRate
// } else if (creditType == "PRENDARIO") {
//     interestRate = pledgeCredit.interestRate
// } else if (creditType == "HIPOTECARIO") {
//     interestRate = mortgageCredit.interestRate
// } else {
//     interestRate = businessCredit.interestRate
// }

// // ----------------------- PRINT -----------------------

// let elemento = document.createElement ("p");
// elemento.setAttribute("class", "desafioDOM")
// let texto = document.createTextNode ("Hola " + userName+ "!\nPara solicitar el crédito " + creditType + " por $" + creditAmount + " con las características que detallaste, deberás pagar " + creditInstallments + " cuotas de $" + calculateCredit(creditAmount, creditInstallments, interestRate) + ".");

// elemento.appendChild(texto);
// document.getElementById("calculateCredit").appendChild(elemento);