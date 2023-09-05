import { api } from "./api.js";

const table = document.querySelector("[data-tabela-clientes]");

table.addEventListener("click", (e) => {
    const isDelete = e.target.className.includes("fa-trash");

    if(isDelete) {
        const cliente = e.target.closest("[data-id]");
        const id = cliente.dataset.id;

        cliente.remove();

        api.deleteCliente(id);
    }
})