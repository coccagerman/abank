// Regex y función para validación de datos de formulario de contacto
const regex = {
    name: /^[a-z]{2,30}$/i,
    telephone: /^\d{8,20}$/,
    email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
};

function validateInput (regex, field) {
    if (regex.test(field) == true) {
        return true
    } else {
        return false
    }
}

