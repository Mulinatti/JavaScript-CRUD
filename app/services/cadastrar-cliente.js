import { api } from "./api.js";

const buttonCadastro = document.querySelector("[data-btn]");

buttonCadastro.addEventListener("click", (e) => {
    e.preventDefault();

    const nome = document.querySelector("[data-nome]").value;
    const email = document.querySelector("[data-email]").value;

    if(nome.length == 0 && email.length == 0) return

    api.addCliente(nome, email);

    window.location.href = "../../app/index.html";
})