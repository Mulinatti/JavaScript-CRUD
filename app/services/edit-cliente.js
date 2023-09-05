import { api } from "./api.js";

const getUrl = new URL(window.location);

const id = getUrl.searchParams.get("id");

const nome = document.querySelector("[data-nome]");
const email = document.querySelector("[data-email]");
const btn = document.querySelector("[data-btn]");

const updateClienteData = async () => {
    try {
        const dados = await api.getCliente(id);
        // Pega o cliente e altera o valor dos inputs para saber qual cliente está sendo editado
        nome.value = dados.nome;
        email.value = dados.email;
    } catch (erro) {
        console.error("Erro ao obter dados do cliente:", erro.message);
    }
};

updateClienteData();

btn.addEventListener("click", async (e) => {
    e.preventDefault();

    const novoNome = nome.value;
    const novoEmail = email.value;

    try {
        await api.updateCliente(id, novoNome, novoEmail);
        window.location.href = "../../app/index.html";
    } catch (erro) {
        console.error("Erro ao atualizar o cliente:", erro.message);
    }
});
