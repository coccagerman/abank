function CreditQuery (type, amount, installments) {
    this.type = type;
    this.amount = amount;
    this.installments = installments;
}

function Client (name, surname ,email, phone) {
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

function Credit (type, interestRate, minAmount, topAmount, minInstallments, topInstallments) {
    this.type = type;
    this.interestRate = interestRate;
    this.minAmount = minAmount;
    this.topAmount = topAmount;
    this.minInstallments = minInstallments;
    this.topInstallments = topInstallments;
}

let personalCredit = new Credit ("PERSONAL", 1.65, 100000, 1000000, 6, 18);
let pledgeCredit = new Credit ("PRENDARIO", 1.60, 500000, 2000000, 12, 36);
let mortgageCredit = new Credit ("HIPOTECARIO", 1.55, 10000000, 50000000, 60, 180);
let businessCredit = new Credit ("EMPRESARIAL", 1.50, 10000000, 10000000, 6, 60);