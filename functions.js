function calculateCredit (creditAmount, creditInstallments, interestRate) {
    return parseInt((creditAmount * interestRate) / creditInstallments)
}