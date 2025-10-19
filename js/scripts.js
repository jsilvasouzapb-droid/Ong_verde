document.addEventListener("DOMContentLoaded", function () {
    
    const cpfInput = document.getElementById("cpf");
    const telefoneInput = document.getElementById("telefone");
    const cepInput = document.getElementById("cep");

    cpfInput.addEventListener("input", function () {
        let value = cpfInput.value.replace(/\D/g, "");
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d)/, "$1.$2");
        value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
        cpfInput.value = value;
    });

    telefoneInput.addEventListener("input", function () {
        let value = telefoneInput.value.replace(/\D/g, "");
        value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
        value = value.replace(/(\d{5})(\d{1,4})$/, "$1-$2");
        telefoneInput.value = value;
    });

    cepInput.addEventListener("input", function () {
        let value = cepInput.value.replace(/\D/g, "");
        value = value.replace(/^(\d{5})(\d)/, "$1-$2");
        cepInput.value = value;
    });

});